// Example of CategoryRoutes (category.route.ts)
import { Elysia } from 'elysia';

import { StoreThemeRoutesController } from './storeTheme.controller';

export const StoreThemeRoutes = new Elysia()
  .get('api/theme/storeTheme/navigation',StoreThemeRoutesController.getNavigationDB )
  .post('api/theme/storeTheme/navigation',StoreThemeRoutesController.CreateNavigation )
  .get('api/theme/storeTheme/logo',StoreThemeRoutesController.getLogoDB )
  .post('api/theme/storeTheme/logo',StoreThemeRoutesController.CreateLogo )
  .get('api/theme/storeTheme/number',StoreThemeRoutesController.getNumberDB )
  .post('api/theme/storeTheme/number',StoreThemeRoutesController.CreateNumber )
  .get('api/theme/storeTheme/social',StoreThemeRoutesController.getSocialDB)
  .post('api/theme/storeTheme/social',StoreThemeRoutesController.createSocial )
  .get('api/theme/storeTheme/review/:id',StoreThemeRoutesController.getReviewDB )
  .post('api/theme/storeTheme/review',StoreThemeRoutesController.createReviewDB )
  
