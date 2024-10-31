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
    const product = await prisma.productCategory.findMany();

    if (!product) {
      throw new Error('Category not found for the provided user ID');
    }

    console.log(product,'jj')

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching Category: ${error?.message}`);
  }
};


//  get single Category
const GetSingleCategory = async (id:string) => {
 
  try {
    const product = await prisma.productCategory.findFirst({

      where: {id: id}
    });

    if (!product) {
      throw new Error('Category not found for the provided user ID');
    }

    console.log(product,'jj')

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching Category: ${error?.message}`);
  }
};

// Update Category
const UpdateCategory = async (id: string, payload: any) => {

  console.log(id, payload)
  try {
    const product = await prisma.productCategory.update({
      where: {
        id: id
      },
      data: payload
    });

    if (!product) {
      throw new Error('Category not found for the provided ID');
    }

    console.log(product, 'jj');

    return product;
  } catch (error: any) {
    throw new Error(`Error updating Category: ${error?.message}`);
  }
};


// Delete Category
const DeleteCategory = async (id: string) => {
  try {
    const product = await prisma.productCategory.delete({
      where: {
        id: id
      }
    });

    if (!product) {
      throw new Error('Category not found for the provided ID');
    }

    console.log(product, 'jj');

    return product;
  } catch (error: any) {
    throw new Error(`Error deleting Category: ${error?.message}`);
  }
};



export const CategoryServices = {
  GetAllCategory,
  CreateCategoryDB,
  UpdateCategory,
  DeleteCategory,
  GetSingleCategory

};
