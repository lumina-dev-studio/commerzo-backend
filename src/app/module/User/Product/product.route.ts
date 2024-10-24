// Example of UsersRoutes (users.route.ts)
import { Elysia, error } from 'elysia';
import { ProductController } from './product.controller';



export const ProductRoutes = new Elysia()
  .get('api/userProduct', ProductController.GetAllProduct )
  .post('api/userProduct',ProductController.CreateProduct );
