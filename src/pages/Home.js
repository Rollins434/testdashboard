import React, { useLayoutEffect, useRef, useState } from "react";
import "./Home.scss";
import CustomScatterChart from "../components/CustomScatterChart";
import SidebarAccordion from "../components/SidebarAccordion";
import FanChart from "../components/FanChart";
import FanChartB from "../components/FanChartB";

import FanChartC from "../components/FanChartC";
import StackedBarChart from "../components/StackedBarChart";
import FanChartWithRestrictions from "../components/charts_and_tables/FanChartWithRestrictions";
import SimpleTable from "../components/charts_and_tables/SimpleTable";
import {
  dailyForecastData,
  dailyForecastDataColumns,
  forecastAccuracyColumns,
  forecastAccuracyData,
  forecastAccuracyData2,
  forecastModelComparisonColumns,
  forecastModelComparisonData,
  linechartActualData,
  linechartForecastData,
  templateTableData,
  templateTableData2,
  templateTableDataColumns,
  templateTableDataColumns2,
} from "../components/charts_and_tables/forecast_data";
import NestedColumnTable from "../components/charts_and_tables/NestedColumnTable";
import DailyForecastFilters from "../components/filters/DailyForecastFilters";
import CustomAccordion from "../components/filters/CustomAccordion";
import FanChartSingleModel from "../components/charts_and_tables/FanChartSingleModel";
import DataChartMain from "../components/charts_and_tables/DataChartMain";
import { forecast_data } from "../components/charts_and_tables/forecast_data2";
import FanChartMain from "../components/charts_and_tables/FanChartMain";

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

      <div ref={containerRef} style={{ display: "block", width: "100%" }}>
        <FanChartMain chartData={forecast_data} />
        <div style={{ width: "100%", background: "white" }}>
          <CustomAccordion title={<span style={{ fontWeight: "200", fontSize: "1.3rem" }}>Additional Filters</span>}>
            <DailyForecastFilters />
          </CustomAccordion>
        </div>
        <br />
        {/* <FanChartWithRestrictions
          actualData={linechartActualData}
          forecastData={linechartForecastData}
        />
        <br />
        <FanChartSingleModel
          label="Modal A"
          labelBold="𝗠𝗼𝗱𝗲𝗹 𝗔"
          actualData={linechartActualData}
          forecastData={linechartForecastData.ModelA}
        />
        <br />
        <FanChartSingleModel
          label="Modal B"
          labelBold="𝗠𝗼𝗱𝗲𝗹 𝗕"
          actualData={linechartActualData}
          forecastData={linechartForecastData.ModelB}
        />
        <br /> */}
        <SimpleTable
          datasetName={"forecastAccuracy"}
          columns={forecastAccuracyColumns}
          data={forecastAccuracyData2}
          styleOptions={{
            fixedTableLayout: size > 768 ? true : false,
            wrapHeaders: true,
          }}
        />
        {/* <br />
        <SimpleTable
          datasetName={"forecastModelComparison"}
          columns={forecastModelComparisonColumns}
          data={forecastModelComparisonData}
          styleOptions={{
            fixedTableLayout: size > 768 ? true : false,
            wrapHeaders: size > 768 ? true : false,
          }}
        />
        <br />
        <NestedColumnTable
          datasetName={"templateTable"}
          data={templateTableData}
          columns={templateTableDataColumns}
          styleOptions={{
            rowBackgroundColors: [
              "gray",
              "lightgray",
              null,
              null,
              null,
              "lightgray",
              null,
              null,
              "lightgray",
              null,
            ],
            rowTextColors: ["white"],
          }}
        /> */}

        <br />
        {/* <NestedColumnTable
          datasetName={"dailyForecast"}
          data={dailyForecastData}
          columns={dailyForecastDataColumns}
          showPagination
        /> */}
        <NestedColumnTable
          defaultPageSize={templateTableData2.length}
          datasetName={"templateTable"}
          data={templateTableData2}
          columns={templateTableDataColumns2}
          styleOptions={{
            rowBackgroundColors: ["gray", "lightgray", null, null, null, "lightgray", null, null, "lightgray", null],
            rowTextColors: ["white"],
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
