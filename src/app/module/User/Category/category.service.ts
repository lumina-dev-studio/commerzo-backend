import { PrismaClient } from '@prisma/client';
import prismaErrorHandler from '../../../error/prismaErrorHandler';


const prisma = new PrismaClient(); // Create a Prisma client instance

//  create Category
const CreateCategoryDB = async (payload:  any) => {

 
  try {
   

    const result= await prisma.productCategory.create({data:payload})

    return result; // Return the transaction result

  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    throw new Error(prismaError?.message || 'Failed to create product.');
  }
};


//  get Category
const GetAllCategory = async () => {
 
  try {
    const product = await prisma.product.findMany();

    if (!product) {
      throw new Error('Category not found for the provided user ID');
    }

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching Category: ${error?.message}`);
  }
};
export const CategoryServices = {
  GetAllCategory,
  CreateCategoryDB

};
