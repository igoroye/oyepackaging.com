import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Sustainability } from "./screens/Sustainability";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Sustainability />
  </StrictMode>,
);
