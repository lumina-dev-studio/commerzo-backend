


import { jwtHelpers } from "../../../../helpers/jwtHelpers";
import prisma from "../../../../shared/prisma";





import config from "../../../../config";
import zodValidation from "../../../error/zodErrorHandler";

import { PrismaClient } from '@prisma/client';
import { StoreThemeServices } from "./storeTheme.service";

const CreateNavigation =async({body,headers}:any) => {
  
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

  

  // const zod= await zodValidation(CaregoryValidation.CreateCategoryValidation,body)
           
//   if(zod.success===false){
   

//     throw new Error(zod?.error?.message)
    
    
//   }
// console.log(body)


  const result= await StoreThemeServices.CreateNavigationDB(body)


return {
    statusCode: 201,
    success: true,
    message: "Navigation create successfully",
    data: result,
  };
};

//  craete logo
const CreateLogo =async({body,headers}:any) => {

 
  
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

  

  // const zod= await zodValidation(CaregoryValidation.CreateCategoryValidation,body)
           
//   if(zod.success===false){
   

//     throw new Error(zod?.error?.message)
    
    
//   }
// console.log(body)


  const result= await StoreThemeServices.CreateLogoDB(body)


return {
    statusCode: 201,
    success: true,
    message: "Logo create successfully",
    data: result,
  };
};

const getNavigationDB =async({body,headers}:any) => {
  
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

  

  // const zod= await zodValidation(CaregoryValidation.CreateCategoryValidation,body)
           
//   if(zod.success===false){
   

//     throw new Error(zod?.error?.message)
    
    
//   }
// console.log(body)


  const result= await StoreThemeServices.getNavigationDB()


return {
    statusCode: 201,
    success: true,
    message: "Navition create successfully",
    data: result,
  };
};

//  get logo
const getLogoDB =async({body,headers}:any) => {
  console.log('hello')
  
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

  

  // const zod= await zodValidation(CaregoryValidation.CreateCategoryValidation,body)
           
//   if(zod.success===false){
   

//     throw new Error(zod?.error?.message)
    
    
//   }
// console.log(body)


  const result= await StoreThemeServices.getLogoDB()


return {
    statusCode: 201,
    success: true,
    message: "Navition create successfully",
    data: result,
  };
};



export const StoreThemeRoutesController = {
  CreateNavigation,
  getNavigationDB,
  CreateLogo,
  getLogoDB

};
