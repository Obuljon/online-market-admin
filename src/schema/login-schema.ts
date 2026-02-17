import { z } from "zod";
const nameLength = 5;
const passwordLength = 6;

export const loginSchema = z.object({
  name: z.string().min(nameLength, `Ism kamida ${nameLength} ta belgidan iborat bo‘lishi kerak`),
  email: z.string().email("Email noto‘g‘ri kiritildi"),
  password: z
    .string()
    .min(passwordLength, `Parol kamida ${passwordLength} ta belgidan iborat bo‘lishi kerak`),
});
export type LoginFormValues = z.infer<typeof loginSchema>;
