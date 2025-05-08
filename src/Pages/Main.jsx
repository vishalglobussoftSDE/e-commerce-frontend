import React, {useState, useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header1 from '../components/Header1';


const Main = () => {

  const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:3000/api/v1/product/all")
          .then((res) => res.json())
          .then((data) => setProducts(data.products))
          .catch((err) => console.error("Error fetching products:", err));
      }, []);


  return (
    <div>
        <Header1 products={products}/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main