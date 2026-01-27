import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CookiePolicy } from "./screens/CookiePolicy";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CookiePolicy />
  </StrictMode>,
);
