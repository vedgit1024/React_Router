import React from "react";

import { Outlet } from "react-router-dom"; //
import Navbar from "./components/Navbar";

const RootLayout = () => {
  return (
    <div>
      {/* <h1>Root Layout</h1> */}
      <Navbar />
      <Outlet />{" "}
      {/* This outlet component in app.js will be replaced by Home pe hu to Home pe and products pe hu to uspe */}
    </div>
  );
};

export default RootLayout;
