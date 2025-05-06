import React from 'react';
import ThreeStar from '/ratingImages/ThreeStar.png';

const ProductCard = ({ product }) => {
  const imageUrl = product.images && product.images.length > 0
    ? `http://localhost:3000${product.images[0]}`
    : 'https://via.placeholder.com/270x250?text=No+Image';

  return (
    <div className='w-[270px]'>
      <div className='w-[270px] h-[250px] flex justify-center items-center bg-[#F5F5F5] rounded-md'>
        <img className='max-h-[100%] max-w-[100%] object-contain' src={imageUrl} alt={product.name} />
      </div>
      <div>
        <p className='text-xl py-4 font-semibold'>{product.name}</p>
        <div className='flex gap-3.5 items-center'>
          <p className='text-red-700'>₹{product.price}</p>
          <img className='w-[100px] h-[20px]' src={ThreeStar} alt="rating-stars" />
          <p className='text-gray-600 text-sm'>({product.stock})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
