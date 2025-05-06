import React from "react";
import ThreeStar from "/ratingImages/ThreeStar.png";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const addtoCart = () => {
    console.log("Product added to cart:", {
      id: product.id,
      name: product.name,
      price: product.price,
      image: imageUrl,
      stock: product.stock
    });
  
    
  };
  

  const imageUrl =
    product.images && product.images.length > 0
      ? `http://localhost:3000${product.images[0]}`
      : "https://via.placeholder.com/270x250?text=No+Image";

  return (
    <div className="w-[270px]">
      <div className="w-[270px] relative h-[350px] flex flex-col justify-center items-center bg-[#F5F5F5] rounded-md">
        <div
          className="absolute top-5 right-3 cursor-pointer"
          onClick={() => setLiked(!liked)}
        >
          {liked ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-gray-950 text-xl" />
          )}
        </div>
        <img
          className="max-h-[100%] max-w-[100%] object-contain"
          src={imageUrl}
          alt={product.name}
        />
        <button
          onClick={addtoCart}
         className="w-full absolute bottom-0 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">Add to Cart</button>
      </div>
      <div>
        <p className="text-xl py-4 font-semibold">{product.name}</p>
        <div className="flex gap-3.5 items-center">
          <p className="text-red-700">₹{product.price}</p>
          <img
            className="w-[100px] h-[20px]"
            src={ThreeStar}
            alt="rating-stars"
          />
          <p className="text-gray-600 text-sm">({product.stock})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
