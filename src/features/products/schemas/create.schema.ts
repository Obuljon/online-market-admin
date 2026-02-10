import { z } from "zod";

/*
 *  _id: string;
 *  name: string;
 * description: string;
 * price: number;
 * category: string;
 * stock: number;
 */

export const productCreateSchema = z.object({
  name: z.string().min(3).max(30),
  description: z.string().max(300),
  price: z.number().positive().max(1_000_000),
  category: z.string().min(3).max(30),
  stock: z.number().int().min(0),
});

export type ProductCreateInput = z.infer<typeof productCreateSchema>;
