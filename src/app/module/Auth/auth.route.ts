import { Elysia } from 'elysia';

export const AuthRoutes = new Elysia()
  .post('api/auth/login', (ctx) => {
    // Login handler
    return { message: 'Login successful!' };
  });
