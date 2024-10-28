


import { jwtHelpers } from "../../../../helpers/jwtHelpers";
import prisma from "../../../../shared/prisma";





import config from "../../../../config";
import zodValidation from "../../../error/zodErrorHandler";
import { CategoryServices } from "./category.service";
import { CaregoryValidation } from "./category.validation";
import { PrismaClient } from '@prisma/client';

const CreateCategory =async({body,headers}:any) => {
  
  const prisma = new PrismaClient();

  const token = headers.authorization as string;

 

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email }:any = jwtHelpers.verifyToken(
    token,
    config.jwt.jwt_secret as string
  );

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new Error("Unauthorized Access");
  }

//   if (user.role!== "User") {
//     throw new Error("Unauthorized Access");
//   }

  

  const zod= await zodValidation(CaregoryValidation.CreateCategoryValidation,body)
           
  if(zod.success===false){
   

    throw new Error(zod?.error?.message)
    
    
  }
console.log(body)

const isExist = await prisma.productCategory.findFirst({
  where: {
    categoryName: body?.categoryName
  }
});

  if(isExist){
    throw new Error(`${body?.categoryName}  already exist. Please try another one`);
  }

  const result= await CategoryServices.CreateCategoryDB(body)


return {
    statusCode: 201,
    success: true,
    message: "Category create successfully",
    data: result,
  };
};



//  all users
const GetAllCategory=async ({headers}:any ) => {
 
  const token = headers.authorization as string;

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email }:any = jwtHelpers.verifyToken(
    token,
    config.jwt.jwt_secret as string
  );

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new Error("Unauthorized Access");
  }
  //   if (user.role!== "User"||"Admin") {
  //   throw new Error("Unauthorized Access");
  // }
 

  const result = await CategoryServices.GetAllCategory();


  return {
    statusCode: 200,
    success: true,
    message: "Category retrieved successfully",
    data: result,
  };
};


export const CategoryController = {
 
  CreateCategory,
  GetAllCategory
};
