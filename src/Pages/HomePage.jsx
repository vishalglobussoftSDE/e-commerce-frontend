import React from 'react'
import HomeSidebarSection from '../components/HomePageComponents/HomeSidebarSection';
import Today from '../components/HomePageComponents/Today';
import CategoriesSection from '../components/HomePageComponents/CategoriesSection';
import ThisMonth from '../components/HomePageComponents/ThisMonth';
import Poster from '../components/HomePageComponents/Poster';
import OurProduct from '../components/HomePageComponents/OurProduct';
import NewArrivals from '../components/HomePageComponents/NewArrivals';
import AboutService from '../components/HomePageComponents/AboutServiceSection';

const Homepage = () => {

  return (
    <div className='container'>
      <HomeSidebarSection/>
      <Today/>     
      <CategoriesSection/>   
      <ThisMonth/>
      <Poster/>
      <OurProduct/>
      <NewArrivals/>
      <AboutService/>
    </div>
  )
}

export default Homepage;