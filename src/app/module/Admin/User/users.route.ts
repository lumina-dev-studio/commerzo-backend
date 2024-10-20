// Example of UsersRoutes (users.route.ts)
import { Elysia, error } from 'elysia';

import { UsersController } from './users.controller';

export const UsersRoutes = new Elysia()
  .get('api/user', UsersController.GeTAllUsers )
  .post('api/user',UsersController.CreateUser );
