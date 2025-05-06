import React from 'react'
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import NotFoundPage from './Pages/NotFoundPage'
import AboutPage from './Pages/AboutPage'
import AccountPage from './Pages/AccountPage'
import ContactPage from './Pages/ContactPage'
import CheckOut from './Pages/CheckOut'
import Today from './components/Today'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path = '/login' element={<LoginPage/>} />
        <Route path = '/signup' element={<SignUpPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route path='/checkOut' element={<CheckOut/>} />
        <Route path='today' element={ <Today/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;