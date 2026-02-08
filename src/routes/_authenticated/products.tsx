import { createFileRoute } from "@tanstack/react-router";
import Products from "../../components/ui/Products";

export const Route = createFileRoute("/_authenticated/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Products />;
}
