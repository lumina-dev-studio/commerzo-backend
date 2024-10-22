import { Elysia } from 'elysia';
import { AuthController } from './auth.controller';

export const AuthRoutes = new Elysia()
  .post('api/auth/login', AuthController.loginUser);
