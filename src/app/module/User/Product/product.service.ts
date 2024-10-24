import { PrismaClient } from '@prisma/client';
import prismaErrorHandler from '../../../error/prismaErrorHandler';

const prisma = new PrismaClient(); // Create a Prisma client instance

const CreateProductDB = async (payload: any) => {
  try {
    const {
      userId,
      collections,
      compareAtPrice,
      cost,
      margin,
      price,
      profit,
      status,
      tags,
      tax,
      themeTemplate,
      title,
      weight,
      weightSize,
      mediaImage, // Array of images
      variant // Array of product variants
    } = payload;

    // Use Prisma transaction to ensure atomicity
    const result = await prisma.$transaction(async (prisma) => {
      // Step 1: Create the main Product entry
      const product = await prisma.product.create({
        data: {
          userId,
          collections,
          compareAtPrice,
          cost,
          margin,
          price,
          profit,
          status,
          tags,
          tax,
          themeTemplate,
          title,
          weight: parseFloat(weight), // Convert weight to float if it's in string format
          weightSize,
        }
      });

      // Step 2: Create ProductMediaImage entries
      if (mediaImage && mediaImage.length > 0) {
        await prisma.productMediaImage.createMany({
          data: mediaImage.map((imageUrl: string) => ({
            imageUrl, // Assuming mediaImage is already the URL
            productId: product.id,
          })),
        });
      }

      // Step 3: Create ProductVariants and their OptionValues
      if (variant && variant.length > 0) {
        for (const v of variant) {
          const createdVariant = await prisma.productVariant.create({
            data: {
              optionName: v.optionName,
              productId: product.id,
            }
          });

          // Insert variant option values
          if (v.optionValues && v.optionValues.length > 0) {
            await prisma.productVariantOptionValue.createMany({
              data: v.optionValues.map((optionValue: any) => ({
                value: optionValue.value,
                price: parseFloat(optionValue.price), // Convert price to float
                available: parseInt(optionValue.available), // Convert available to int
                imageUrl: optionValue.image, // Assuming image is already a URL
                productVariantId: createdVariant.id,
              })),
            });
          }
        }
      }

      return product; // Return the created product to be accessed outside the transaction
    });

    return result; // Return the transaction result

  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    throw new Error(prismaError?.message || 'Failed to create product.');
  }
};


//  get user
const GetAllProduct = async (userId: string) => {
 
  try {
    const product = await prisma.product.findMany({
      where: {
        userId: userId, // Filter by the provided user ID
      },
      include: {
        user: true, // Include the related user data
        productMediaImages: true, // Include related product images
        productVariants: {
          include: {
            productVariantOptionValues: true, // Include the variants' option values
          },
        },
      },
    });

    if (!product) {
      throw new Error('Product not found for the provided user ID');
    }

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching product: ${error?.message}`);
  }
};
export const ProductServices = {
  CreateProductDB,
  GetAllProduct

};
