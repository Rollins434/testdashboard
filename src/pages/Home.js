import React, { useLayoutEffect, useRef, useState } from "react";
import "./Home.scss";
import CustomScatterChart from "../components/CustomScatterChart";
import SidebarAccordion from "../components/SidebarAccordion";
import FanChart from "../components/FanChart";
import FanChartB from "../components/FanChartB";

import FanChartC from "../components/FanChartC";
import StackedBarChart from "../components/StackedBarChart";
import FanChartWithRestrictions from "../components/FanChartWithRestrictions";
import SimpleTable from "../components/tables/SimpleTable";
import {
  forecastAccuracyColumns,
  forecastAccuracyData,
  forecastModelComparisonColumns,
  forecastModelComparisonData,
} from "../components/tables/forecast_data";

// import Sidebar from '../components/Sidebar'

const Home = () => {
  const [size, setSize] = useState(0);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    function updateSize() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      setSize(containerWidth);
    }

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div className="home">
      {/* <Sidebar/>
    <div className='home-container'>
        Container
    </div> */}

      {/* <CustomScatterChart/> */}
      {/* <SidebarAccordion/> */}
      {/* <FanChart/> */}
      {/* <FanChartB/> */}

      {/* <FanChartWithRestrictions /> */}
      <div ref={containerRef} style={{ display: "block" }}>
        <SimpleTable
          columns={forecastAccuracyColumns}
          data={forecastAccuracyData}
          styleOptions={{
            fixedTableLayout: size > 768 ? true : false,
            wrapHeaders: true,
          }}
        />
        <br />
        <SimpleTable
          columns={forecastModelComparisonColumns}
          data={forecastModelComparisonData}
          styleOptions={{
            fixedTableLayout: size > 768 ? true : false,
            wrapHeaders: size > 768 ? true : false,
          }}
        />
      </div>

      {/* in below chart i am trying to get date limit done */}
      {/* <FanChartC/> */}
      {/* <StackedBarChart/> */}
    </div>
  );
};

export default Home;
