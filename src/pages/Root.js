import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
