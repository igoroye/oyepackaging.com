import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrivacyPolicy } from "./screens/PrivacyPolicy";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PrivacyPolicy />
  </StrictMode>,
);
