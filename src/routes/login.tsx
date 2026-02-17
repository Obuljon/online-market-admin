import { createFileRoute } from "@tanstack/react-router";
import Login from "../components/ui/Login";
import { adminData } from "@/api-client/login-api";

export const Route = createFileRoute("/login")({
  loader: async () => {
    const token = localStorage.getItem("token");
    const isAuthenticated = await adminData(token || "")
      .then(() => true)
      .catch(() => false);
    if (isAuthenticated) {
      window.location.href = "/dashboard";
    }
    return null; // Agar ma'lumot yuklash shart emas bo'lsa, null qaytarishingiz mumkin
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <Login />;
}
