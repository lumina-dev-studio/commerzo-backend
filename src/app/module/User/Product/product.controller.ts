


import { jwtHelpers } from "../../../../helpers/jwtHelpers";
import prisma from "../../../../shared/prisma";





import config from "../../../../config";
import zodValidation from "../../../error/zodErrorHandler";
import { ProductValidation } from "./product.validation";
import { ProductServices } from "./product.service";

const CreateProduct =async({body,headers}:any) => {
  


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

  

  const zod= await zodValidation(ProductValidation.CreateProductValidation,body)
           
  if(zod.success===false){
   

    throw new Error(zod?.error?.message)
    
    
  }
  body.userId=user.id 
  const result= await ProductServices.CreateProductDB(body)


return {
    statusCode: 201,
    success: true,
    message: "Product create successfully",
    data: result,
  };
};



//  all users
const GetAllProduct =async ({headers}:any ) => {
 
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
 

  const result = await ProductServices.GetAllProduct(user?.id);
  console.log('hosse')

  return {
    statusCode: 200,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  };
};

//  all users
const GetAllProductForUser =async () => {
 
  // const token = headers.authorization as string;

  // if (!token) {
  //   throw new Error("Unauthorized Access");
  // }

  // const { email }:any = jwtHelpers.verifyToken(
  //   token,
  //   config.jwt.jwt_secret as string
  // );

  // const user = await prisma.user.findUnique({
  //   where: { email: email },
  // });

  // if (!user) {
  //   throw new Error("Unauthorized Access");
  // }
  //   if (user.role!== "User"||"Admin") {
  //   throw new Error("Unauthorized Access");
  // }
 

  const result = await ProductServices.GetAllProductForUser();


  return {
    statusCode: 200,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  };
};

//  single users
const GetSingleProductForUser =async ({params}:any) => {

 
 

  const result = await ProductServices.GetSingleProduct(params.id);


  return {
    statusCode: 200,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  };
};


export const ProductController = {
 
  GetAllProduct,
    CreateProduct,
    GetAllProductForUser,
    GetSingleProductForUser
};
