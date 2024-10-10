import React from 'react'
import "./Home.scss"
import CustomScatterChart from '../components/CustomScatterChart'
import SidebarAccordion from '../components/SidebarAccordion'
import FanChart from '../components/FanChart'
// import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
   <div className='home'>
    {/* <Sidebar/>
    <div className='home-container'>
        Container
    </div> */}
    <h1>Home</h1>
    {/* <CustomScatterChart/> */}
    {/* <SidebarAccordion/> */}
    <FanChart/>
    
   </div>
  )
}

export default Home