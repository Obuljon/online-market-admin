import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { Link, RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
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

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
