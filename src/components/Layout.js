import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import "./layout.scss";

const Layout = () => {
  
  

  return (
    <div className="layout">
      <Navbar />
      <div className="maincontainer">
        <Sidebar />
        <div className="dashboard">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;
