import { Elysia } from 'elysia';
import { AuthRoutes } from '../module/Auth/auth.route';
import { UsersRoutes } from '../module/Admin/User/users.route';
import { ProductRoutes } from '../module/User/Product/product.route';
import { CategoryRoutes } from '../module/User/Category/category.route'
import { SettingRoutes } from '../module/Setting/setting.route'

// Create a new instance of Elysia for the router
const router = new Elysia();

// Register AuthRoutes with prefixed paths directly inside `AuthRoutes`
router.use(AuthRoutes);

// Register UsersRoutes similarly
router.use(UsersRoutes);

// Register UsersRoutes 
router.use(ProductRoutes);

router.use(CategoryRoutes);

router.use(SettingRoutes);

// Export the router
export default router;
