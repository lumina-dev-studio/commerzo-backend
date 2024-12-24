import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import prisma from "../../../shared/prisma";
import bcrypt from "bcrypt";



const RegistrationSimpleUserDB = async (payload: {
  name: string;
  email: string;
  password: string;
  role?: string;
}) => {
  try {
    // Hash the password
    const hashedPassword: string = await bcrypt.hash(payload.password, 12);

    // Prepare the user data for Prisma
    const userPayload = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      role: payload.role || 'SimpleUser', // Default role is 'User'
    };

    // Create the user in the database
    const userData = await prisma.simpleUser.create({
      data: userPayload,
    });

    // Generate the access token
    const accessToken = jwtHelpers.generateToken(
      {
        email: userData.email,
        id: userData.id,
        role: userData.role,
      },
      config.jwt.jwt_secret as string,
      config.jwt.expires_in as string
    );

    // Extract the required fields from the created user
    const { id, name, email } = userData;

    // Return the response
    return {
      id,
      name,
      email,
      token: accessToken,
    };
  } catch (error) {
    console.error('Error during user registration:', error);
    throw new Error('User registration failed');
  }
};


  
// login
const loginSimpleUserDB = async (payload: any) => {

  
    const userData = await prisma.simpleUser.findUnique({
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
        role: userData?.role,
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


  
export const SimpleUserServices = {
 
  loginSimpleUserDB,
    RegistrationSimpleUserDB
    
  };
  