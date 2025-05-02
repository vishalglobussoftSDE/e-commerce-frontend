import React from 'react'
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
<<<<<<< HEAD
import CartPage from './Pages/CartPage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import NotFoundPage from './Pages/NotFoundPage'
=======
import AboutPage from './Pages/AboutPage'
>>>>>>> 0508ce55412d63582339df7f53be8930ea70dd98
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
<<<<<<< HEAD
        <Route path="/cart" element={<CartPage/>} />
        <Route path = '/about' element={<div>About Us</div>} />
        <Route path = '/login' element={<LoginPage/>} />
        <Route path = '/signup' element={<SignUpPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
=======
        <Route path="/about" element={<AboutPage/>} />
>>>>>>> 0508ce55412d63582339df7f53be8930ea70dd98
      </Routes>
    </BrowserRouter>
  )
}

export default App