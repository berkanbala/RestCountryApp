import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from "../custom/component/country/country";
import AppLayout from "../layout/appLayout/appLayout";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Country />} />
        </Route>
      </Routes>
    </Router>
  );
}
