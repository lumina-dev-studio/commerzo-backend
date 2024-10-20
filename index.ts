import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors'; // Import CORS support
import router from './src/app/router'; // Adjust this path according to your actual directory structure
// import { globalErrorHandler } from './src/app/middlewares/globalErrorHandler';


const app = new Elysia()
  .use(cors({ // Enable CORS
    origin: ["http://localhost:3000", "https://sass-project-dashboard-client-side.vercel.app"], // Allow all origins (adjust as necessary)
    credentials: true, // Allow credentials
  }))
  .get('/', () => {
    return 'Hello via Bun!'; // Send a response for the root route
  })
  .use(router) // Use the router for additional routes (as a plugin)
  // .onError(globalErrorHandler) // Add the global error handler
  .listen(Number(process.env.PORT) || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
