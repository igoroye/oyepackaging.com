import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DripBags } from "./screens/DripBags";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DripBags />
  </StrictMode>,
);
