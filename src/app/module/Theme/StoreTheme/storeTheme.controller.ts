


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

  
  const prisma = new PrismaClient();

  const token = headers.authorization as string;

 

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email,id }:any = jwtHelpers.verifyToken(
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


  const result= await StoreThemeServices.getLogoDB(id)


return {
    statusCode: 201,
    success: true,
    message: "Logo get successfully",
    data: result,
  };
};



//  craete number
const CreateNumber =async({body,headers}:any) => {

 
  
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


  const result= await StoreThemeServices.CreateNumberDB(body)


return {
    statusCode: 201,
    success: true,
    message: "Number create successfully",
    data: result,
  };
};



//  get Number
const getNumberDB =async({body,headers}:any) => {
  
  
  const prisma = new PrismaClient();

  const token = headers.authorization as string;

 

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email ,id}:any = jwtHelpers.verifyToken(
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


  const result= await StoreThemeServices.getNumberDB(id)


return {
    statusCode: 201,
    success: true,
    message: "number get successfully",
    data: result,
  };
};

//  craete social
const createSocial =async({body,headers}:any) => {

 
  
  const prisma = new PrismaClient();

  const token = headers.authorization as string;

 

  if (!token) {
    throw new Error("Unauthorized Access");
  }

  const { email,id }:any = jwtHelpers.verifyToken(
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


  const result= await StoreThemeServices.CreateSocialDB(body,id)


return {
    statusCode: 201,
    success: true,
    message: "Social create successfully",
    data: result,
  };
};



//  get Social
const getSocialDB =async({body,headers}:any) => {
  
  
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


  const result= await StoreThemeServices.getSocialAccountDB()


return {
    statusCode: 201,
    success: true,
    message: "social get successfully",
    data: result,
  };
};



//  craete review
const createReviewDB =async({body}:any) => {
  
 
  



  const result= await StoreThemeServices.createProductReviewDB(body)


return {
    statusCode: 200,
    success: true,
    message: "review created successfully",
    data: result,
  };
};



//  find review
const getReviewDB =async({params}:any) => {
  
  const {id}=params;
  




  const result= await StoreThemeServices.getProductReviewsDB(id)


return {
    statusCode: 200,
    success: true,
    message: "review find successfully",
    data: result,
  };
};





export const StoreThemeRoutesController = {
  CreateNavigation,
  getNavigationDB,
  CreateLogo,
  getLogoDB,
  CreateNumber,
  getNumberDB,
  createSocial,
  getSocialDB,
  createReviewDB,
  getReviewDB

};
