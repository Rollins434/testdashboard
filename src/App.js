import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Layout from "./components/Layout";

import Forecasting from "./pages/Forecasting";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forecasting" element={<Forecasting />}>
            <Route path="tab1" element={<Tab1 />} />
            <Route path="tab2" element={<Tab2 />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
