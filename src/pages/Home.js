import React from "react";
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
      <div style={{ display: "block" }}>
        <SimpleTable
          columns={forecastAccuracyColumns}
          data={forecastAccuracyData}
          styleOptions={{ fixedTableLayout: true }}
        />

        <br />

        <SimpleTable
          columns={forecastModelComparisonColumns}
          data={forecastModelComparisonData}
          styleOptions={{ wrapHeaders: true, fixedTableLayout: true }}
        />
      </div>

      {/* in below chart i am trying to get date limit done */}
      {/* <FanChartC/> */}
      {/* <StackedBarChart/> */}
    </div>
  );
};

export default Home;
