import React, { useState } from 'react';
import DisplayCardSection from '../components/DisplayCardSection';
import MonitorCartSmall from '../assets/monitorCartSmall.png';

const CartPage = () => {
  const initialProducts = [
    { name: 'LCD Monitor', price: 650, image: MonitorCartSmall },
    { name: 'Wireless Keyboard', price: 120, image: MonitorCartSmall },
    { name: 'Gaming Mouse', price: 85, image: MonitorCartSmall },
  ];

  const [quantities, setQuantities] = useState(initialProducts.map(() => 1));

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] - 1);
    setQuantities(newQuantities);
  };

  const subtotal = initialProducts.reduce(
    (acc, item, idx) => acc + item.price * quantities[idx],
    0
  );

  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-4">Home / Cart</div>

      <div className="grid grid-cols-4 gap-6 text-sm text-gray-700 uppercase font-semibold mb-2 px-1">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>

      {/* Product cards */}
      <div>
        {initialProducts.map((product, idx) => (
          <DisplayCardSection
            key={idx}
            product={product}
            quantity={quantities[idx]}
            onIncrease={() => increaseQuantity(idx)}
            onDecrease={() => decreaseQuantity(idx)}
          />
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button className="border px-4 py-2 rounded hover:bg-gray-100">Return To Shop</button>
        <button
          className="border px-4 py-2 rounded hover:bg-gray-100"
          style={{ backgroundColor: '#DB4444', color: 'white' }}
        >
          Update Cart
        </button>
      </div>

      {/* Summary Section */}
      <div className=" flex flex-wrap justify-between p-6 mt-8 gap-6 rounded-md shadow-sm">
        {/* Coupon Code */}
        <div className="flex gap-4 flex-wrap">
          <input
            className="border w-[300px] h-[56px] rounded-[4px] px-2"
            placeholder="Coupon Code"
            type="text"
          />
          <button
            className="h-[56px] px-6 rounded-[4px] text-white"
            style={{ backgroundColor: '#DB4444' }}
          >
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="bg-gray-100 p-6 rounded-md w-full max-w-xs space-y-3">
          <p className="text-lg font-semibold">Cart Total</p>
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <p>Total:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr />
          <button
            className="w-full text-white py-2 rounded mt-2"
            style={{ background: '#DB4444' }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
