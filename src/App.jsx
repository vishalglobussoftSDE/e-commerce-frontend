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



const App = () => {

  return (
    <BrowserRouter>
      <Header1/>
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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;