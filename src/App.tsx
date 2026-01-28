import { BrowserRouter, Routes, Route } from "react-router-dom";
import { V } from "./screens/V/V";
import { FlatBottomBags } from "./routes/FlatBottomBags/screens/FlatBottomBags";
import { DripBags } from "./routes/DripBags/screens/DripBags";
import { AboutUs } from "./routes/AboutUs/screens/AboutUs";
import { DivWrapper } from "./routes/DivWrapper/screens/DivWrapper";
import { BrewBags } from "./routes/BrewBags/screens/BrewBags";
import { ColdBrewBags } from "./routes/ColdBrewBags/screens/ColdBrewBags";
import { Sustainability } from "./routes/Sustainability/screens/Sustainability";
import { ContactUs } from "./routes/ContactUs/screens/ContactUs";
import { PrivacyPolicy } from "./routes/PrivacyPolicy/screens/PrivacyPolicy";
import { TermsAndConditions } from "./routes/TermsAndConditions/screens/TermsAndConditions";
import { CookiePolicy } from "./routes/CookiePolicy/screens/CookiePolicy";
import { StandupBags } from "./routes/StandupBags/screens/StandupBags";
import { CartonBoxes } from "./routes/CartonBoxes/screens/CartonBoxes";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V />} />
        <Route path="/products" element={<FlatBottomBags />} />
        <Route path="/services" element={<DripBags />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/standup-bags" element={<StandupBags />} />
        <Route path="/carton-boxes" element={<CartonBoxes />} />
        <Route path="/brew-bags" element={<BrewBags />} />
        <Route path="/cold-brew-bags" element={<ColdBrewBags />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>
  );
};
