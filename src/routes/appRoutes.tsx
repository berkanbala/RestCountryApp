import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "../custom/component/country/country";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Country />} />
      </Routes>
    </Router>
  );
}
