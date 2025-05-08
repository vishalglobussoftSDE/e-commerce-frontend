import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DisplayCardSection = ({ product, quantity, onIncrease, onDecrease, deleteIcon }) => {
  const { name, price, imageUrl } = product;
  const subtotal = price * quantity;

  return (
    <div className="grid grid-cols-5 gap-6 justify-center items-center border border-gray-300 rounded-md p-4 mb-4 shadow-sm">
      {/* Product Image + Name */}
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-14 h-14 object-cover rounded-md"
        />
        <span className="text-sm">{name}</span>
      </div>

      {/* Price */}
      <div className="text-sm">₹{price}</div>

      {/* Quantity Control */}
      <div>
        <div className="border rounded px-2 py-1 flex flex-col items-center w-[70px]">
          <button onClick={onIncrease} className="text-xs hover:text-black text-gray-600">
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <span className="text-sm my-1">{quantity}</span>
          <button onClick={onDecrease} className="text-xs hover:text-black text-gray-600">
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>

      {/* Subtotal */}
      <div className="text-sm">₹{subtotal.toFixed(2)}</div>

      {/* Delete Icon */}
      <div>{deleteIcon}</div>
    </div>
  );
};

export default DisplayCardSection;
