// Example of UsersRoutes (users.route.ts)
import { Elysia, error } from 'elysia';
import { ProductController } from './product.controller';



export const ProductRoutes = new Elysia()
  .get('api/userProduct', ProductController.GetAllProduct )
  .get('api/allProduct', ProductController.GetAllProductForUser )
  .get('api/singleProduct/:id', ProductController.GetSingleProductForUser )
  .post('api/userProduct',ProductController.CreateProduct );
