import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./forecasting.scss";

const Forecasting = () => {
  return (
    <div className="forecasting__container">
      <nav className="forecasting__nav">
        <ul>
          <li>
            <Link to="tab1">Tab1</Link>
          </li>
          <li>
            <Link to="tab2">Tab 2</Link>
          </li>
        </ul>
      </nav>
      <div className="forecasting__content">
        <Outlet /> {/* Child routes will render their content here */}
      </div>
    </div>
  );
};

export default Forecasting;
