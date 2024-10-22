// const prismaErrorHandler = (err: any) => {
//   let errorMessage = "";
//   let errorDetails: any = [];

//   if (err.code === "P2002") {
//     // Unique constraint violation error
//     errorMessage = `${err?.meta?.target} already exists`;
//     errorDetails = err;
//   }

//   return {
//     message: errorMessage,
//     errorDetails: {
//       issus: errorDetails,
//     },
//   };
// };

// export default prismaErrorHandler;




const prismaErrorHandler = (err: any) => {
  let errorMessage = "";
  let errorDetails: any = [];

  switch (err.code) {
    case "P2002":
      // Unique constraint violation error
      errorMessage = `${err?.meta?.target} already exists`;
      errorDetails = err;
      break;
      
    case "P2003":
      // Foreign key constraint violation
      errorMessage = `Foreign key constraint violation: ${err?.meta?.field_name}`;
      errorDetails = err;
      break;

    case "P2025":
      // Record not found error
      errorMessage = "The requested record could not be found.";
      errorDetails = err;
      break;

    default:
      // Handle any other errors
      errorMessage = "An unexpected error occurred.";
      errorDetails = err;
      break;
  }

  return {
    message: errorMessage,
    errorDetails: {
      issues: errorDetails,
    },
  };
};

export default prismaErrorHandler;
