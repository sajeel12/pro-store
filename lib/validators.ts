import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

// schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  brand: z.string().min(1, { message: "Brand is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  stock: z.coerce.number(),
  images: z.array(z.string().min(1, { message: "Image URL is required" })),
  // price: z.number().min(0, { message: 'Price must be a positive number' }),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: z.string().refine((value) => formatNumberWithDecimal(Number(value))),
});
