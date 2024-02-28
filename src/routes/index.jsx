// Routes.js
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import AboutUs from "../Pages/aboutUs";
import Contact from "../Pages/contact";
import Classes from "../Pages/classes";
import Event from "../Pages/event";
import Teachers from "../Pages/teachers";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/event" element={<Event />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
};

export default AppRoutes;
