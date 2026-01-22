import { BrowserRouter, Routes, Route } from "react-router-dom";
import { V } from "./screens/V/V";
import { FlatBottomBags } from "./routes/FlatBottomBags/screens/FlatBottomBags";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<V />} />
        <Route path="/products" element={<FlatBottomBags />} />
      </Routes>
    </BrowserRouter>
  );
};
