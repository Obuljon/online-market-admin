import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import {
  LayersPlus,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products/1/8", label: "Products", icon: Package },
    { id: "order", label: "Orders", icon: ShoppingCart },
    { id: "users", label: "Users", icon: Users },
    // { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "create", label: "Create", icon: LayersPlus },
  ];
  return (
    <>
      <div className="flex min-h-screen bg-background text-foreground">
        <div className="flex h-screen w-64 flex-col border-r bg-card text-card-foreground">
          <div className="flex h-16 items-center border-b px-6">
            <span className="text-lg font-bold tracking-tight">AdminPanel</span>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {" "}
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={`${"/" + item.id}` as const}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-auto border-t p-4">
            <button className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10">
              {/* <LogOut className="mr-3 h-5 w-5" /> */}
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col overflow-hidden">
          <TopBar title="Dashboard" />
          <main className="flex-1 overflow-y-auto p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export const TopBar = ({ title }: { title: string }) => {
  return (
    <header className="flex min-w-[calc(100vw-16rem)] h-16 items-center justify-between border-b bg-card px-8">
      <h1 className="text-xl font-semibold tracking-tight uppercase text-muted-foreground text-xs">
        {title}
      </h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="h-8 w-8 overflow-hidden rounded-full border bg-muted">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
