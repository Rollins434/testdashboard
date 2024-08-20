import React, { useState } from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isShrink, setIsShrink] = useState(false);

  function handleSidebar(){
    setIsShrink(!isShrink)
  }

  return (
    <div className="sidebar" style={{ width: isShrink? "80px" : "300px" }}>
      
      <div className="sidebar-content">
        <ul>
          <li>
            <NavLink to="/">
            {!isShrink ? "Home" : "H" }
            </NavLink>
          </li>
          <li>
            <NavLink to="/forecasting">{!isShrink ? "Forecasting" : "F"}</NavLink>
          </li>
        </ul>
      </div>
      <button onClick={handleSidebar} >&#10594;</button>
    </div>
  );
};

export default Sidebar;
