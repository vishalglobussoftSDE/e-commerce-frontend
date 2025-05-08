import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header1 from '../components/Header1';

const Main = () => {
  return (
    <div>
        <Header1/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main