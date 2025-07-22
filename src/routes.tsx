// src/routes.ts
import { JSX, lazy } from "react";

// Optional: Define a type for consistency
export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  title?: string; // Optional if you want to use it in sidebar or elsewhere
}

// Define your route list here
export const routes: RouteConfig[] = [
  {
    path: "admindashboard", // will be accessible at /watco/admindashboard
    component: lazy(() => import("./pages/AdminDashboard")),
    title: "Dashboard",
  },
  {
    path: "roles", // will be accessible at /watco/roles
    component: lazy(() => import("./pages/userManagement/roles")),
    title: "Roles",
  },
];
