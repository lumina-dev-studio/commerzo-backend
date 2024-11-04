
import { SettingServices } from "./setting.service";

import config from "../../../config";
import {jwtHelpers} from "../../../helpers/jwtHelpers";

import { PrismaClient } from '@prisma/client'; // Import PrismaClient
const prisma = new PrismaClient(); // Create a Prisma client instance


//  get user  profile
const getSingleUser =async({headers}:any) => {
  


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

  // if (user.role!== "Admin") {
  //   throw new Error("Unauthorized Access");
  // }


  const result= await SettingServices.getSingleUserDB(user?.id)


return {
    statusCode: 204,
    success: true,
    message: "Profile created successfully",
    data: result,
  };
};


//  update profile
const UpdateProfile =async({body,headers}:any) => {
  


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

  // if (user.role!== "Admin") {
  //   throw new Error("Unauthorized Access");
  // }


  const result= await SettingServices.updateProfileDB(user?.id,body)


return {
    statusCode: 204,
    success: true,
    message: "Profile created successfully",
    data: result,
  };
};


export const SettingController = {
 
  UpdateProfile,
  getSingleUser
};
