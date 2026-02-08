import ProductForm from "@/components/ui/ProductForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <ProductForm />;
}
