import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FlatBottomBags } from "./screens/FlatBottomBags";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FlatBottomBags />
  </StrictMode>,
);
