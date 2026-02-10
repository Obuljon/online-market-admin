import { Button } from "./button";
import { ArrowLeft, Upload } from "lucide-react";
import { Input } from "./input";
import { useNavigate } from "@tanstack/react-router";
import type { ProductType } from "@/types";

interface ProductFormProps {
  product?: ProductType;
}

/* productform component object oladi
 * agar qiyat kelsa edit, qiymat kelmasa
 * create sifatida ishlaydi
 *
 * */
export default function ProductForm({ product = undefined }: ProductFormProps) {
  const navigate = useNavigate();
  const isEditMode = product !== undefined;

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate({ to: "/products" })}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">
          {isEditMode ? "Edit Product" : "Create New Product"}
        </h2>
      </div>

      <div className="grid gap-8 rounded-xl border bg-card p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Product Name</label>
            <Input defaultValue={""} placeholder="e.g. Wireless Headphones" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Input defaultValue={""} placeholder="e.g. Electronics" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Price ($)</label>
            <Input type="number" defaultValue={""} placeholder="0.00" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Stock</label>
            <Input type="number" defaultValue={""} placeholder="0" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Description</label>
          <textarea
            className="min-h-30 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            placeholder="Tell us about this product..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Product Image</label>
          <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-muted transition-colors hover:border-primary/50">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Upload className="h-8 w-8" />
              <span className="text-xs">Click or drag to upload image</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button variant="outline" onClick={() => {}}>
            Cancel
          </Button>
          <Button onClick={() => {}}>
            {isEditMode ? "Update Product" : "Create Product"}
          </Button>
        </div>
      </div>
    </div>
  );
}
