import { BrowserRouter, Routes, Route } from "react-router-dom";
import { V } from "./screens/V/V";
import { FlatBottomBags } from "./routes/FlatBottomBags/screens/FlatBottomBags";
import { DripBags } from "./routes/DripBags/screens/DripBags";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V />} />
        <Route path="/products" element={<FlatBottomBags />} />
        <Route path="/services" element={<DripBags />} />
      </Routes>
    </BrowserRouter>
  );
};
