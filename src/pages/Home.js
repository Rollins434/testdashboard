import React from 'react'
import "./Home.scss"
import CustomScatterChart from '../components/CustomScatterChart'
import SidebarAccordion from '../components/SidebarAccordion'
import FanChart from '../components/FanChart'
import FanChartB from '../components/FanChartB'
import PlotlyFanChart from '../components/PlotlyFanChart'
import FanChartC from '../components/FanChartC'

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
    <FanChartC/>
    {/* <PlotlyFanChart/> */}
    
   </div>
  )
}

export default Home