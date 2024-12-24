import { SimpleUserServices } from "./simpleUser.services";

const RegistrationSimpleUser = async ({body}:any) => {
    const result = await SimpleUserServices.RegistrationSimpleUserDB(body);
  
   return  {
      statusCode: 200,
      success: true,
      message: "User logged in successfully",
      data: result,
    };
  };

const loginSimpleUser = async ({body}:any) => {
    const result = await SimpleUserServices.loginSimpleUserDB(body);
  
   return  {
      statusCode: 200,
      success: true,
      message: "User logged in successfully",
      data: result,
    };
  };



  export const SimpleUserController = {
    loginSimpleUser,RegistrationSimpleUser
  
  };
  