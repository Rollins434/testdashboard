import React from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/forecasting">Forecasting</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
