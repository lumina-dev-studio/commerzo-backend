// Example of UsersRoutes (users.route.ts)
import { Elysia, error } from 'elysia';
import { SettingController } from './setting.controller';



export const SettingRoutes = new Elysia()
  .get('api/setting/singleUser', SettingController.getSingleUser )
  .put('api/setting/profile', SettingController.UpdateProfile )

