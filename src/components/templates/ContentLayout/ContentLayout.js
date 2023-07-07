import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

const ContentLayout = () => {
    return (
        <>
            <Header />
            <main className="content-page">
                <Outlet />
            </main>
            <Footer />
        </>

    )
}

export default ContentLayout;