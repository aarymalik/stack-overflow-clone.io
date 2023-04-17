import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./components/pages/Auth/Auth";
import Home from "./components/pages/Home/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
