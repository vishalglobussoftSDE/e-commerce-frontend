import React from 'react'
import HomeComp1 from '../components/HomePageComponents/homeComp1';
import Today from '../components/HomePageComponents/Today';
import Categories1 from '../components/HomePageComponents/Categories1';
import ThisMonth from '../components/HomePageComponents/ThisMonth';
import Poster from '../components/HomePageComponents/Poster';
import OurProduct from '../components/HomePageComponents/OurProduct';
import NewArrivals from '../components/HomePageComponents/NewArrivals';
import AboutService from '../components/HomePageComponents/AboutService';

const HomepageComp = () => {

  return (
    <div className='container'>
      <HomeComp1/>
      <Today/>     
      <Categories1/>   
      <ThisMonth/>
      <Poster/>
      <OurProduct/>
      <NewArrivals/>
      <AboutService/>
    </div>
  )
}

export default HomepageComp;