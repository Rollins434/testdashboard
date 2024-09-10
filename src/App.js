import React from "react";
import { Routes, Route } from "react-router-dom";

import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Forecasting from "./pages/Forecasting";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public route */}
          <Route
            index
            element={
              
                <Home />
              
            }
          />
          <Route
            path="/masspromo"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          {/* Protected route with nested routes */}
          <Route
            path="forecasting"
            element={
              <RequireAuth allowedRoles={["admin", "verizon employee"]}>
                <Forecasting />
              </RequireAuth>
            }
          >
            <Route path="tab1" element={<Tab1 />} />
            <Route path="tab2" element={<Tab2 />} />
          </Route>
        </Route>
        {/* Separate route for Login */}
        <Route
          path="login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
