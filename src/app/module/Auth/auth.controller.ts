import { AuthServices } from "./auth.services";

const loginUser = async ({body}:any) => {
    const result = await AuthServices.loginUserDB(body);
  
   return  {
      statusCode: 200,
      success: true,
      message: "User logged in successfully",
      data: result,
    };
  };



  export const AuthController = {
    loginUser,
  
  };
  