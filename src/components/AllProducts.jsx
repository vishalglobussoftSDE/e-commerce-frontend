import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:3000/api/v1/product/all')
          .then(res => res.json())
          .then(data => setProducts(data.products))
          .catch(err => console.error('Error fetching products:', err));
      }, []);

  return (
    <div className='container flex-wrap flex gap-15 justify-center my-20'>
        {products.map((item) => {
            return <ProductCard product={item} />
          })}
    </div>
  )
}

export default AllProducts;