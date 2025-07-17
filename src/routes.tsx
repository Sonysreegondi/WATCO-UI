// src/routes.ts
import { JSX, lazy } from "react";

// Optional: Define a type for consistency
export interface RouteConfig {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}

// Define your route list here
export const routes: RouteConfig[] = [
 {
    path: "dashboard", // will be accessible at /watco/dashboard
    component: lazy(() => import("./pages/Dashboard")),
  },
 
];
