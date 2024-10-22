import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";


// login
const loginUserDB = async (payload: any) => {
    const userData = await prisma.user.findUnique({
      where: {
        email: payload?.email,
      },
    });
  
    if (!userData) {
      console.log("nei");
      throw new Error(" User Not Exist !");
    }
   
  
    
    const isCorrectPassword: boolean = await bcrypt.compare(
      payload.password,
      userData.password
    );
    if (!isCorrectPassword) {
      throw new Error("Password incorrect!");
    }
    const accessToken = jwtHelpers.generateToken(
      {
        email: userData.email,
        id: userData.id,
        role: userData.role,
      },
      config.jwt.jwt_secret as string,
      config.jwt.expires_in as string
    );
    const { id, name, email } = userData;
    return {
      id,
      name,
      email,
      token: accessToken,
    };
  };


  
export const AuthServices = {
 
    loginUserDB,
    
  };
  