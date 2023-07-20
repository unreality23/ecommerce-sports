import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import SiteHeader from "../../molecules/SiteHeader/SiteHeader";

const Layout = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header onHeaderHeightChange={setHeaderHeight} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
