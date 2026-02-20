import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'node',
    env: {
      RESEND_API_KEY: 're_test_key',
      CONTACT_EMAIL: 'bedisscottandrew@gmail.com',
    },
  },
});
