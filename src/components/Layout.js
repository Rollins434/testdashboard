import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import "./layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="maincontainer">
        <Sidebar />
        <div className="dashboard">
          <Outlet /> {/* This is where the routed content will be displayed */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
