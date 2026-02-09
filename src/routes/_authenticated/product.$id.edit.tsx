import ProductForm from "@/components/ui/ProductForm";
import { createFileRoute } from "@tanstack/react-router";
// import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/_authenticated/product/$id/edit")({
  stringifyParams: ({ id }) => ({ id }),
  parseParams: (params) => ({
    id: params.id, // string sifatida qoldiramiz yoki .replace() bilan tozalash mumkin
  }),
  // loader: async ({ params, context: { queryClient } }) => {
  //   // return queryClient.ensureQueryData({
  //   //   queryKey: ['product', params.id],
  //   //   queryFn: () => fetchProductById(params.id),
  //   // })
  //   return null;
  // },
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return (
    <ProductForm
      product={{
        _id: id,
        name: "",
        description: "",
        price: 0,
        category: "",
        stock: 0,
      }}
    />
  );
}
