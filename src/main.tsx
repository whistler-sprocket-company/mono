import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";
import "./styles/main.scss";

createRoot(document.getElementById("root") ?? new Element()).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
