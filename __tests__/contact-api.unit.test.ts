import { describe, it, expect, vi, beforeEach } from 'vitest';

// ─── Mock Resend before importing the route ───────────────────────────────────
const mockSend = vi.fn().mockResolvedValue({ data: { id: 'mock-id' }, error: null });
vi.mock('resend', () => {
  return {
    Resend: class {
      emails = { send: mockSend };
    },
  };
});

// ─── Helper: build a NextRequest-like mock ────────────────────────────────────
function makeRequest(body: Record<string, unknown>, ip = '127.0.0.1') {
  return {
    json: async () => body,
    headers: {
      get: (key: string) => (key === 'x-forwarded-for' ? ip : null),
    },
  } as any;
}

// ─── Import route AFTER mocks are set up ─────────────────────────────────────
const { POST } = await import('@/app/api/contact/route');

// ─── Unit Tests ───────────────────────────────────────────────────────────────
describe('POST /api/contact — validation', () => {
  beforeEach(() => {
    mockSend.mockClear();
  });

  it('returns 400 when name is missing', async () => {
    const req = makeRequest({ email: 'test@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/required/i);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it('returns 400 when email is missing', async () => {
    const req = makeRequest({ name: 'John', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/required/i);
  });

  it('returns 400 when message is missing', async () => {
    const req = makeRequest({ name: 'John', email: 'test@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/required/i);
  });

  it('returns 400 for an invalid email format', async () => {
    const req = makeRequest({ name: 'John', email: 'not-an-email', message: 'Hello' }, '127.0.0.2');
    const res = await POST(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/invalid email/i);
  });

  it('returns 400 for malformed JSON body', async () => {
    const badReq = {
      json: async () => { throw new SyntaxError('bad json'); },
      headers: { get: () => null },
    } as any;
    const res = await POST(badReq);
    expect(res.status).toBe(400);
  });
});

describe('POST /api/contact — success', () => {
  beforeEach(() => {
    mockSend.mockClear();
  });

  it('sends email and returns 200 for valid payload', async () => {
    const req = makeRequest(
      { name: 'John Doe', email: 'john@example.com', message: 'I need a quote.' },
      '10.0.0.1'
    );
    const res = await POST(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
    expect(mockSend).toHaveBeenCalledOnce();
  });

  it('includes optional phone and service in the email when provided', async () => {
    const req = makeRequest(
      {
        name: 'Jane',
        email: 'jane@example.com',
        phone: '+1 555 000 0000',
        service: 'Cabinet Making',
        message: 'Need custom cabinets.',
      },
      '10.0.0.2'
    );
    const res = await POST(req);
    expect(res.status).toBe(200);
    const call = mockSend.mock.calls[0][0];
    expect(call.html).toContain('Cabinet Making');
    expect(call.html).toContain('+1 555 000 0000');
  });

  it('sets replyTo to the sender email', async () => {
    const req = makeRequest(
      { name: 'Reply Test', email: 'reply@example.com', message: 'Test.' },
      '10.0.0.3'
    );
    await POST(req);
    const call = mockSend.mock.calls[0][0];
    expect(call.replyTo).toBe('reply@example.com');
  });

  it('escapes HTML in user input to prevent XSS', async () => {
    const req = makeRequest(
      { name: '<script>alert(1)</script>', email: 'xss@example.com', message: '<b>bold</b>' },
      '10.0.0.4'
    );
    await POST(req);
    const call = mockSend.mock.calls[0][0];
    expect(call.html).not.toContain('<script>');
    expect(call.html).toContain('&lt;script&gt;');
  });
});

describe('POST /api/contact — rate limiting', () => {
  it('allows up to 3 requests then returns 429', async () => {
    const ip = '192.168.99.99'; // unique IP for this test

    for (let i = 1; i <= 3; i++) {
      const req = makeRequest(
        { name: 'Test', email: `t${i}@example.com`, message: 'msg' },
        ip
      );
      const res = await POST(req);
      expect(res.status).toBe(200);
    }

    // 4th request should be blocked
    const blockedReq = makeRequest(
      { name: 'Test', email: 'blocked@example.com', message: 'msg' },
      ip
    );
    const blockedRes = await POST(blockedReq);
    expect(blockedRes.status).toBe(429);
    const body = await blockedRes.json();
    expect(body.error).toMatch(/too many requests/i);
  });

  it('different IPs are rate-limited independently', async () => {
    const results = await Promise.all(
      ['1.1.1.1', '2.2.2.2', '3.3.3.3'].map((ip) =>
        POST(makeRequest({ name: 'A', email: 'a@a.com', message: 'hi' }, ip))
      )
    );
    results.forEach((res) => expect(res.status).toBe(200));
  });
});

describe('POST /api/contact — Resend error handling', () => {
  it('returns 500 when Resend throws', async () => {
    mockSend.mockRejectedValueOnce(new Error('Resend is down'));
    const req = makeRequest(
      { name: 'Err', email: 'err@example.com', message: 'msg' },
      '10.1.1.1'
    );
    const res = await POST(req);
    expect(res.status).toBe(500);
    const body = await res.json();
    expect(body.error).toMatch(/failed to send/i);
  });
});
