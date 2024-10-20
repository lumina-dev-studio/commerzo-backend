import { ZodSchema, ZodError } from 'zod'; // Import Zod types for type safety

// Error handler to format Zod errors
const zodErrorHandler = (err: ZodError) => {
  let errorMessage = "";
  let errorDetails: any = [];

  const errorSources = err.issues.map((issue: any) => {
    errorDetails.push({
      field: issue?.path[0],
      message: `${issue?.path[0]} field is required`, // Fixed typo "require" to "required"
    });
    let message = `${issue?.path[issue?.path.length - 1]} field is ${
      issue?.message
    }. `;

    return message;
  });

  errorMessage = errorSources.join(" ");

  return {
    message: errorMessage,
    errorDetails: {
      issues: errorDetails, // Fixed typo "issus" to "issues"
    },
  };
};

// Zod validation function
const zodValidation = async (schema: ZodSchema<any>, body: any) => {
  try {
    await schema.parseAsync(body); // Use schema's parseAsync method
    return { success: true }; // Validation passed
  } catch (err) {
    // Check if the error is an instance of ZodError
    if (err instanceof ZodError) {
      const formattedError = zodErrorHandler(err); // Format the Zod error
      return {
        success: false,
        error: formattedError, // Use formatted error details
      };
    }

    // Handle unexpected errors
    return {
      success: false,
      error: {
        message: 'An unexpected error occurred',
        details: err,
      },
    };
  }
};

export default zodValidation;

