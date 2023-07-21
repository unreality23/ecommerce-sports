import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
