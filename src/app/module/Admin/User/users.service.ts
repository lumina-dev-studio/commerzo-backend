import bcrypt from 'bcrypt'; // Make sure to import bcrypt
import { PrismaClient } from '@prisma/client'; // Import PrismaClient
import prismaErrorHandler from '../../../error/prismaErrorHandler';

const prisma = new PrismaClient(); // Create a Prisma client instance



const CreateUsersDB = async (payload: any) => {
  try {
    // Hash the password
    const hashedPassword: string = await bcrypt.hash(payload.password, 12);

    // Update payload with hashed password
    payload.password = hashedPassword;
    payload.confirmPassword = hashedPassword;

    // Use a transaction to ensure all operations succeed or fail together
    const result = await prisma.$transaction(async (prisma) => {
      // Create a new user in the database
      const user = await prisma.user.create({ data: payload });

      // Create associated logo and number records
      await prisma.logo.create({
        data: { logoUrl: 'https://images.pexels.com/photos/2417848/pexels-photo-2417848.jpeg', userId: user.id }, // Use userId directly
      });

      await prisma.number.create({
        data: { userId: user.id, number: 'unavailable' },
      });

     await prisma.number.create({
        data:{number:'unavailable',userId: user.id}
      });

      await prisma.socialAccount.create({
        data:{account:'unavailable',userId:user.id,emoji:"unavailable"}
      });

      // Return the created user
      return user;
    });

    // Destructure necessary fields from the result
    const { id, name, email } = result;

    // Return relevant user details
    return { id, name, email };
  } catch (error) {
    const prismaError = prismaErrorHandler(error); // Assuming prismaErrorHandler is defined
    throw new Error(prismaError?.message || 'Failed to create user.');
  }
};


const GetAllUsersDB = async () => {

  
  try {
    const result = await prisma.user.findMany(); // Fetch all users from the database
    return result; // Return the result if successful
  } catch (error) {
    // Handle specific Prisma errors or log the error
    throw new Error('Data not found.'); // Rethrow a generic error message
  }
};


  export const UsersServices = {
  
    GetAllUsersDB,
    CreateUsersDB
 
  };
  
