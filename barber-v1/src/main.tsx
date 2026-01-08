import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { ProgressLayout } from "./pages/client/progressLayout/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProgressLayout />
  </StrictMode>
);
