// Example of UsersRoutes (users.route.ts)
import { Elysia, error } from 'elysia';

import { CategoryController } from './category.controller';



export const CategoryRoutes = new Elysia()
  .get('api/productCategory', CategoryController.GetAllCategory )
  .post('api/productCategory',CategoryController.CreateCategory );
