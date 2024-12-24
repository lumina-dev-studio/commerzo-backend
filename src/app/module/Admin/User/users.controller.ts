

import { UsersServices } from "./users.service";
import { jwtHelpers } from "../../../../helpers/jwtHelpers";
import prisma from "../../../../shared/prisma";




import { UserValidation } from "./users.validation";
import config from "../../../../config";
import zodValidation from "../../../error/zodErrorHandler";

const CreateUser =async({body,headers}:any) => {
  


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

  if (user.role!== "Admin") {
    throw new Error("Unauthorized Access");
  }


  const zod= await zodValidation(UserValidation.CreateUserValidation,body)
           
  if(zod.success===false){

    throw new Error(zod?.error?.message)
    
      // return {
      //   statusCode: 201,
      //   success: true,
      //   message: zod.error?.message,
      //   data: zod?.error,
      // };
  }

 
  const result= await UsersServices.CreateUsersDB(body)


return {
    statusCode: 201,
    success: true,
    message: "User create successfully",
    data: result,
  };
};



//  all users
const GeTAllUsers =async ({body,headers,response}:any ) => {
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
  if (user.role!== "Admin") {
    throw new Error("Unauthorized Access");
  }

  const result = await UsersServices.GetAllUsersDB();

  return {
    statusCode: 200,
    success: true,
    message: "Users retrieved successfully",
    data: result,
  };
};


export const UsersController = {
 
  GeTAllUsers,
  CreateUser
};
