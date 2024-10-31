// Example of CategoryRoutes (category.route.ts)
import { Elysia } from 'elysia';
import { CategoryController } from './category.controller';

export const CategoryRoutes = new Elysia()
  .get('api/productCategory', CategoryController.GetAllCategory)
  .get('api/productCategory/:id', CategoryController.GetSingleCategory)
  .post('api/productCategory', CategoryController.CreateCategory)
  .put('api/productCategory/:id', CategoryController.UpdateCategory)
  .delete('api/productCategory/:id', CategoryController.DeleteCategory);
