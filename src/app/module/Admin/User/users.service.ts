import bcrypt from 'bcrypt'; // Make sure to import bcrypt
import { PrismaClient } from '@prisma/client'; // Import PrismaClient

const prisma = new PrismaClient(); // Create a Prisma client instance

const CreateUsersDB = async (payload: any) => {
  try {
    // Hash the password
    const hashedPassword: string = await bcrypt.hash(payload.password, 12);
  
    // Update payload with hashed password
    payload.password = hashedPassword;
    payload.confirmPassword = hashedPassword;

    // Create a new user in the database
    const result = await prisma.user.create({ data: payload });
  
    // Destructure necessary fields from the result
    const { id, name, email } = result;
  
    // Return relevant user details
    return { id, name, email };
  } catch (error) {
    // Handle errors (e.g., log them, rethrow them, or return a structured error response)
    console.error('Error creating user:', error); // Log the error
    throw new Error('Failed to create user.'); // Rethrow a generic error message
  }
};

const GetAllUsersDB = async () => {

  console.log('get user')
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
  
