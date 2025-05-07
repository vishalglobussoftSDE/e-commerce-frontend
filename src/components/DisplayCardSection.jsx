import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DisplayCardSection = ({ product, quantity, onIncrease, onDecrease, deleteIcon }) => {
  const { name, price, image } = product;
  const subtotal = price * quantity;
  const removeCart = async () => {
    // Logic to remove the item from the cart can be added here
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/remove-cart",
        { productId: product._id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("remove to cart:", res.data);
    } catch (error) {
      console.error("Add to cart error:", error.response?.data || error.message);
    }
  }

  return (
    <div className="grid grid-cols-5 gap-6 justify-center items-center border border-gray-300 rounded-md p-4 mb-4 shadow-sm">

      <div className="flex items-center gap-4">
        <img src={image} alt={name} className="w-14 h-14 object-cover" />
        <span className="text-sm">{name}</span>
      </div>


      <div className="text-sm">${price}</div>


      <div>
        <div className="border rounded px-2 py-1 flex items-center justify-between w-[70px]">
          
          <div className="flex flex-col ml-2 space-y-1">
            <button onClick={onIncrease} className="text-xs hover:text-black text-gray-600">
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button onClick={onDecrease} className="text-xs hover:text-black text-gray-600">
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

          </div>
        </div>

      </div>


      <div className="text-sm">${subtotal}</div>
      <div onClick={removeCart}>{deleteIcon}</div>
    </div>
  );
};

export default DisplayCardSection;
