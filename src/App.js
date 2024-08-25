import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import AuthLayout from './components/AuthLayout';
import Login from './pages/Login';
import Layout from './components/Layout';
import Home from './pages/Home';
import Forecasting from './pages/Forecasting';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forecasting" element={<Forecasting />} />
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<Tab2 />} />
        </Route>
        {/* Separate routes for Login and Signup */}
        <Route path="login" element={<AuthLayout><Login/></AuthLayout>} />
        {/* <Route path="signup" element={<AuthLayout><Signup /></AuthLayout>} /> */}
      </Routes>
    </div>
  );
}

export default App;
