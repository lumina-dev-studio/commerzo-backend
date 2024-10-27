import { z } from 'zod';


const CreateCategoryValidation = z.object({
 
  categoryName: z.string().nonempty({ message: "Category Name cannot be empty." }),
  categoryImage: z.string().nonempty({ message: "Category Image cannot be empty." }),


});

export const CaregoryValidation = {
    CreateCategoryValidation
  };
  