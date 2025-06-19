import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "./app/app";
import "./styles/main.scss";
import { Home } from "./features/home/home";

const router = createBrowserRouter([
  { path: "/", Component: App, children: [{ index: true, Component: Home }] },
]);

createRoot(document.querySelector("#root") ?? new Element()).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
