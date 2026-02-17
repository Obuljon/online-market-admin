import { createFileRoute } from "@tanstack/react-router";
import Products from "../../components/ui/Products";
import { getAllProducts } from "@/api-client";
import { QueryClient } from "@tanstack/react-query";
//////////////////////////////////////////////////////////////////////////////////////

export const Route = createFileRoute("/_authenticated/products/$page/$limit")({
  loader: async ({ params, context }) => {
    const page = Number(params.page) || 1;
    const limit = Number(params.limit) || 10;
    const queryClient: QueryClient = context.queryClient;
    await new Promise((r) => setTimeout(r, 2500));
    return queryClient.ensureQueryData({
      queryKey: ["products", page, limit],
      queryFn: async () => {
        const response = await getAllProducts(page, limit);
        console.log("API response:", response);
        return { data: response.data };
      },
    });
  },

  pendingMs: 400, // 400ms dan keyin ko'rsatishni boshlaydi
  pendingMinMs: 600,
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = Route.useLoaderData();
  const products = data.list || [];
  return <Products products={products} />;
}
