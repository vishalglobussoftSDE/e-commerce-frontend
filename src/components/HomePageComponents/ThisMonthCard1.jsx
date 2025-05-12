import React, { useState, useRef } from "react";
import ThreeStar from "/ratingImages/ThreeStar.png";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard1 = ({ product }) => {

  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();
  let addToCartBtn= useRef(null);

  const handleIn = () => {    
      addToCartBtn.current.style.display = "block";     
  };

  const handleOut = () => {
      addToCartBtn.current.style.display = "none";
  };

  const handleCartClick = async () => {
    if (addedToCart) {
      navigate("/cart");
    } else {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.post(
          "http://localhost:3000/api/v1/user/add-cart",
          { productId: product._id, quantity: 1 },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Product added to cart successfully!");
        setAddedToCart(true);
        console.log("Added to cart:", res.data);
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message || "Failed to add to cart.");
        } else {
          toast.error("Network or server error: " + error.message);
        }
        console.error("Add to cart error:", error.response?.data || error.message);
      }
    }
  };

  const imageUrl =
    product.images && product.images.length > 0
      ? `http://localhost:3000${product.images[0]}`
      : "";

  return (
    <div className="w-[270px]" onMouseOver={handleIn} onMouseLeave={handleOut}>
      <div  className="w-[270px] relative h-[350px] flex flex-col justify-center items-center bg-[#F5F5F5] rounded-md" >
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
          ref={addToCartBtn} onClick={handleCartClick} 
          className="w-full absolute bottom-0 text-white py-2 px-4 rounded-md hidden bg-gray-600 hover:bg-gray-700"
        >
          {addedToCart ? "Go to Cart" : "Add to Cart"}
        </button>
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

export default ProductCard1;
