import React from 'react'
import "./Home.scss"
import CustomScatterChart from '../components/CustomScatterChart'
import SidebarAccordion from '../components/SidebarAccordion'
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
    <SidebarAccordion/>
    
   </div>
  )
}

export default Home