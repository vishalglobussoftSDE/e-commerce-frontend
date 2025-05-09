import React from 'react';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import NotFoundPage from './Pages/NotFoundPage';
import AboutPage from './Pages/AboutPage';
import AccountPage from './Pages/AccountPage';
import ContactPage from './Pages/ContactPage';
import CheckOut from './Pages/CheckOut';
import HomepageComp from './Pages/HomepageComp';
import Footer from './components/Footer';
import OrderPlaced from './Pages/OrderPlacedPage'
import Header1 from './components/Header1';
import { useEffect, useState } from 'react';
import AllProducts from './components/AllProducts';
import MainCarousel from './components/HomePageComponents/MainCarousel';



const App = () => {

  const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:3000/api/v1/product/all")
          .then((res) => res.json())
          .then((data) => setProducts(data.products))
          .catch((err) => console.error("Error fetching products:", err));
      }, []);

  return (
    <BrowserRouter>
      <Header1 products={products}/>
      <Routes>
        <Route path='/' element={<HomepageComp/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path = '/login' element={<LoginPage/>} />
        <Route path = '/signup' element={<SignUpPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route path='/checkOut' element={<CheckOut/>} />
        <Route path="/home" element={<HomepageComp/>} />
        <Route path='placed' element={ <OrderPlaced/>} />
        <Route path='allProducts' element={ <AllProducts/>} />
        <Route path='test' element={ <MainCarousel/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;