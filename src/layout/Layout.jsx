import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Wrapper from "../components/wrapper/Wrapper";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Wrapper />
            <Footer />
        </div>
    );
};

export default Layout;
