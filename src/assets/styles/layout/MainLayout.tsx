import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import WhatsAppFloat from "../../../components/WhatsAppFloat/WhatsAppFloat";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default MainLayout;
