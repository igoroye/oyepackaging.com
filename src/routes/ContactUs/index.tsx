import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContactUs } from "./screens/ContactUs";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ContactUs />
  </StrictMode>,
);
