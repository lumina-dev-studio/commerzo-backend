import bcrypt from 'bcrypt'; // Make sure to import bcrypt
import { PrismaClient } from '@prisma/client'; // Import PrismaClient
import prismaErrorHandler from '../../error/prismaErrorHandler';

const prisma = new PrismaClient(); // Create a Prisma client instance

const getSingleUserDB = async (id: string) => {
  try {
    // Update the user in the database
    const result = await prisma.user.findFirst({
      where: { id }, // Correctly specify the user by their ID
      
    });

    // Return relevant user details
    return result;
  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    console.error('Error get user profile:', prismaError); // Log the error for debugging
    throw new Error(prismaError?.message || 'Failed to get user profile.'); // Rethrow a generic error message
  }
};
const updateProfileDB = async (id: string, payload: any) => {
  try {
    // Update the user in the database
    const result = await prisma.user.update({
      where: { id }, // Correctly specify the user by their ID
      data: payload
    });

    // Return relevant user details
    return result;
  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    console.error('Error updating user profile:', prismaError); // Log the error for debugging
    throw new Error(prismaError?.message || 'Failed to update user profile.'); // Rethrow a generic error message
  }
};

export const SettingServices = {
  updateProfileDB,
  getSingleUserDB
};
