import { Plus, Search, Edit2, Trash2, Image as ImageIcon } from "lucide-react";

import { Input } from "./input";
import { useState } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Active" | "Draft" | "Out of Stock";
  image: string;
}

export default function Products() {
  const navigator = useNavigate();
  const mockProducts: Product[] = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: 299.99,
      stock: 45,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    },
    {
      id: "2",
      name: "Mechanical Gaming Keyboard",
      category: "Accessories",
      price: 149.5,
      stock: 12,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=100&h=100&fit=crop",
    },
    {
      id: "3",
      name: "Minimalist Leather Backpack",
      category: "Lifestyle",
      price: 89.0,
      stock: 0,
      status: "Out of Stock",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop",
    },
    {
      id: "4",
      name: "Smart Home Hub",
      category: "Electronics",
      price: 199.0,
      stock: 89,
      status: "Draft",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=100&h=100&fit=crop",
    },
    {
      id: "5",
      name: "Ergonomic Office Chair",
      category: "Furniture",
      price: 450.0,
      stock: 5,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1505797149-43b0001f221c?w=100&h=100&fit=crop",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          {/* <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button> */}
          <Button
            size="sm"
            onClick={() => {
              navigator({ to: "/create" });
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="rounded-md border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50">
            <tr className="text-left font-medium">
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {mockProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-md bg-muted flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                </td>
                <td className="p-4 text-muted-foreground">
                  {product.category}
                </td>
                <td className="p-4 font-mono">${product.price.toFixed(2)}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                      product.status === "Active"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                        : product.status === "Out of Stock"
                          ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
                          : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
                    )}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => console.log("Edit product:", product.id)}
                    >
                      <Edit2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Trash2 className="h-4 w-4 text-rose-500" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
