import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ColdBrewBags } from "./screens/ColdBrewBags";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ColdBrewBags />
  </StrictMode>,
);
