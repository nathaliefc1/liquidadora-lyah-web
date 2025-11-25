import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./assets/styles/layout/MainLayout";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="terms" element={<Terms />} />
      </Route>
    </Routes>
  );
};

export default App;
