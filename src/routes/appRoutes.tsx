import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "../layout/appLayout/appLayout";
import Home from "../custom/component/home/home";
import CountryDetails from "../pages/countryDetails/countryDetails";

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}
