import type { ProductType } from '@/types';
import  api  from './config';

// 1. Mahsulot yaratish
export const createProduct = (data:ProductType) =>
  api.post('/products/create', data);

// 2. Mahsulotni yangilash
export const updateProduct = (id: string, data: ProductType) =>
  api.put(`/products/update/${id}`, data);

// 3. Mahsulotni o‘chirish
export const deleteProduct = (id: string) =>
  api.delete(`/products/delete/${id}`);

// 4. Mahsulotlarni qidirish (search)
export const searchProducts = (searchTerm: string, page: number, limit: number) =>
  api.get(`/products/search/${encodeURIComponent(searchTerm)}/${page}/${limit}`);

// 5. Barcha mahsulotlarni olish (sahifalangan)
export const getAllProducts = (page: number, limit: number) =>
  api.get(`/products/getall/${page}/${limit}`);

// 6. Mahsulotni nomi bo‘yicha olish
export const getProductByName = (name: string) =>
  api.get(`/products/getone/${encodeURIComponent(name)}`);

// 7. Mahsulotni ID bo‘yicha olish
export const getProductById = (id: string) =>
  api.get(`/products/getbyid/${id}`);
