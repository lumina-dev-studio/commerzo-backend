


import { z } from "zod";

// Define the schema for a navigation item
const   navigationValidation = z.object({
  name: z.string().min(1, "Name is required"),  // Name should be a non-empty string
  path: z.string().min(1, "Path is required"),  // Path should be a non-empty string
  parentId: z.number().nullable(),             // Parent ID can be null (for top-level items)
});

// Schema for updating a navigation item
const updateNavigationValidation =   navigationValidation.extend({
  id: z.number().int().min(1, "Invalid ID"),   // ID should be a positive integer
});


export const NavigationValidation = {
  navigationValidation,
  updateNavigationValidation
  };
  