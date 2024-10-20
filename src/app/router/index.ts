import { Elysia } from 'elysia';
import { AuthRoutes } from '../module/Auth/auth.route';
import { UsersRoutes } from '../module/Admin/User/users.route';

// Create a new instance of Elysia for the router
const router = new Elysia();

// Register AuthRoutes with prefixed paths directly inside `AuthRoutes`
router.use(AuthRoutes);

// Register UsersRoutes similarly
router.use(UsersRoutes);

// Export the router
export default router;
