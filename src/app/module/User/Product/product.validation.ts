import { z } from 'zod';

// Define the ProductVariantOptionValue schema
const ProductVariantOptionValueSchema = z.object({
  value: z.string().nonempty({ message: "Value cannot be empty." }),
  price: z.string().nonempty({ message: " Price be empty." }),
  available: z.string().nonempty({ message: " Price be empty." }),
  image: z.string().url({ message: "Image must be a valid URL." }),
});

// Define the ProductVariant schema
const ProductVariantSchema = z.object({
  optionName: z.string().nonempty({ message: "Option name cannot be empty." }),
  optionValues: z.array(ProductVariantOptionValueSchema).nonempty({ message: "Option values cannot be empty." }),
});

// Define the Product schema
const CreateProductValidation = z.object({
 
  collections: z.string().nonempty({ message: "Collections cannot be empty." }),
  category: z.string().nonempty({ message: "category cannot be empty." }),
  compareAtPrice: z.number().min(0, { message: "Compare at price must be a non-negative number." }),
  cost: z.number().min(0, { message: "Cost must be a non-negative number." }),
  margin: z.number(),
  mediaImage: z.array(z.string().url().or(z.string()), { message: "Media image must be a valid URL or base64 string." }),
  price: z.number().min(0, { message: "Price must be a non-negative number." }),
  profit: z.number(),
  status: z.string().nonempty({ message: "Status cannot be empty." }),
  tags: z.string().nonempty({ message: "Tags cannot be empty." }),
  tax: z.boolean(),
  themeTemplate: z.string().nonempty({ message: "Theme template cannot be empty." }),
  title: z.string().nonempty({ message: "Title cannot be empty." }),
  weight: z.string().nonempty({ message: "Weight  cannot be empty." }),
  weightSize: z.string().nonempty({ message: "Weight size cannot be empty." }),
  variant: z.array(ProductVariantSchema).nonempty({ message: "At least one variant is required." }),
});

export const ProductValidation = {
    CreateProductValidation
  };
  