import { Link, RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import React from "react";
// Create a new router instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 daqiqa
    },
  },
});
const router = createRouter({
  routeTree,
  context: { queryClient },
  defaultPendingComponent: () => (
    <div className="loading-fullscreen">
      <div className="spinner" />
      <p>Yuklanmoqda...</p>
    </div>
  ),
  defaultPendingMs: 300,
  defaultPendingMinMs: 600,
  defaultNotFoundComponent: () => {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>404 - Sahifa topilmadi 😔</h1>
        <p>Bunday sahifa mavjud emas.</p>
        <Link to="/">Bosh sahifaga qaytish</Link>
      </div>
    );
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.Fragment>
  );
}
