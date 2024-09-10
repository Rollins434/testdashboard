import React from 'react'
import "./Home.scss"
import CustomScatterChart from '../components/CustomScatterChart'
// import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
   <div className='home'>
    {/* <Sidebar/>
    <div className='home-container'>
        Container
    </div> */}
    <h1>Home</h1>
    <CustomScatterChart/>
   </div>
  )
}

export default Home