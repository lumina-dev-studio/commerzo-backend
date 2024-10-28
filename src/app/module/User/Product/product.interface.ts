export interface TProduct {
    userId: string;
    collections: string;
    category: string;
    compareAtPrice: number;
    cost: number;
    margin: number;
    mediaImage: string[];
    price: number;
    profit: number;
    status: string;
    tags: string;
    tax: boolean;
    themeTemplate: string;
    title: string;
    weight: number;
    weightSize: string;
    variant: ProductVariant[];
  }
  
  interface ProductVariant {
    optionName: string;
    optionValues: ProductVariantOptionValue[];
  }
  
  interface ProductVariantOptionValue {
    value: string;
    price: number;
    available: number;
    image: string;
  }
  