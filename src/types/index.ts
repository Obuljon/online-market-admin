export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  endimage: string;
  middleimage: string;
  startimage: string;
  status: "Active" | "Draft" | "Out of Stock";
}
