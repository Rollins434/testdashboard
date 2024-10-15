import React from 'react'
import "./Home.scss"
import CustomScatterChart from '../components/CustomScatterChart'
import SidebarAccordion from '../components/SidebarAccordion'
import FanChart from '../components/FanChart'
import FanChartB from '../components/FanChartB'

import FanChartC from '../components/FanChartC'
import StackedBarChart from '../components/StackedBarChart'
import ThreeLineChart from '../components/ThreeLineChart'

// import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
   <div className='home'>
    {/* <Sidebar/>
    <div className='home-container'>
        Container
    </div> */}

    {/* <CustomScatterChart/> */}
    {/* <SidebarAccordion/> */}
    {/* <FanChart/> */}
    {/* <FanChartB/> */}
    {/* in below chart i am trying to get date limit done */}
    {/* <FanChartC/> */}
    {/* <StackedBarChart/> */}

    <ThreeLineChart/>
    
   </div>
  )
}

export default Home