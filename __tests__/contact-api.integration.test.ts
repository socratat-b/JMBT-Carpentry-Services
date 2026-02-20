import { describe, it, expect } from 'vitest';

/**
 * Integration tests — hit the live Vercel deployment.
 * Run with: pnpm test:integration
 *
 * These tests send REAL requests (and real emails on the success case).
 * The success test will deliver an email to bedisscottandrew@gmail.com.
 */

const BASE_URL = 'https://jmbt-carpentry-services.vercel.app';

async function post(body: Record<string, unknown>) {
  return fetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('Integration: /api/contact on Vercel', () => {
  it('returns 400 when required fields are missing', async () => {
    const res = await post({ email: 'test@example.com' }); // missing name + message
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/required/i);
  });

  it('returns 400 for invalid email format', async () => {
    const res = await post({ name: 'Test', email: 'bad-email', message: 'Hello' });
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.error).toMatch(/invalid email/i);
  });

  it('sends a real email and returns 200 for a valid submission', async () => {
    const res = await post({
      name: 'Test User',
      email: 'bedisscottandrew@gmail.com',
      phone: '+63 900 000 0000',
      service: 'Cabinet Making',
      message: '✅ This is an automated integration test from the JMBT contact form. You can ignore this.',
    });

    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.success).toBe(true);
  }, 15_000); // allow 15s for real network call

  it('enforces rate limiting after 3 rapid requests from same IP', async () => {
    // Send 3 more requests (on top of the one above — may hit limit faster in CI)
    const responses = await Promise.all([
      post({ name: 'RL1', email: 'rl1@example.com', message: 'rate limit test 1' }),
      post({ name: 'RL2', email: 'rl2@example.com', message: 'rate limit test 2' }),
      post({ name: 'RL3', email: 'rl3@example.com', message: 'rate limit test 3' }),
    ]);

    const statuses = responses.map((r) => r.status);
    // At least one should be 429 (rate limited) since the success test above already counted
    const hasRateLimit = statuses.includes(429);
    const allOkOrRateLimited = statuses.every((s) => s === 200 || s === 429);

    expect(allOkOrRateLimited).toBe(true);
    expect(hasRateLimit).toBe(true);
  }, 20_000);
});
