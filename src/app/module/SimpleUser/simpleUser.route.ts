import { Elysia } from 'elysia';
import { SimpleUserController } from './simpleUser.controller';


export const SimpleUserRoutes = new Elysia()
  .post('api/simpleUser/login', SimpleUserController.loginSimpleUser)
  .post('api/simpleUser/registration', SimpleUserController.RegistrationSimpleUser)
