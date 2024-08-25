import React from "react";

import "./authlayout.scss";
import Navbar from "./Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">
      <Navbar />
      <div className="auth-content">
        {children} {/* This will be the Login or Signup component */}
      </div>
    </div>
  );
};

export default AuthLayout;
