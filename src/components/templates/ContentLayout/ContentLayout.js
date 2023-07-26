import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import ShoppingCart from "../../organisms/ShoppingCart/ShoppingCart";

const ContentLayout = () => {
  return (
    <>
      <ShoppingCart />
      <Header />
      <main className="content-page">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ContentLayout;
