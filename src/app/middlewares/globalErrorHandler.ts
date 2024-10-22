// import { Elysia } from 'elysia';
// import httpStatus from 'http-status';
// import { ZodError } from 'zod';

// import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// import prismaErrorHandler from '../error/prismaErrorHandler';
// import zodErrorHandler from '../error/zodErrorHandler';


// export const globalErrorHandler = async (error: any, ctx: any) => {
//   if (error instanceof ZodError) {
//     const response = zodErrorHandler(error);
    
//     return ctx
//       .setStatus(httpStatus.BAD_REQUEST) // Use BAD_REQUEST for validation errors
//       .json({
//         success: false,
//         message: response.message,
//         errorDetails: response.errorDetails,
//       });
//   }

//   if (error instanceof PrismaClientKnownRequestError) {
//     const response = prismaErrorHandler(error);
//     return ctx
//       .setStatus(httpStatus.INTERNAL_SERVER_ERROR) // Use INTERNAL_SERVER_ERROR for Prisma errors
//       .json({
//         success: false,
//         message: response.message,
//         errorDetails: response.errorDetails,
//       });
//   }

//   // Log unexpected errors for debugging
//   console.error(error, 'global error');

//   return ctx
//     .setStatus(httpStatus.INTERNAL_SERVER_ERROR)
//     .json({
//       success: false,
//       message: error.message || 'Something went wrong!',
//       errorDetails: error,
//     });
// };
