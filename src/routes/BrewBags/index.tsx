import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrewBags } from "./screens/BrewBags";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrewBags />
  </StrictMode>,
);
