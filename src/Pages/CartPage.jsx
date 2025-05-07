import React, { useState, useEffect } from "react";
import DisplayCardSection from "../components/DisplayCardSection";
import MonitorCartSmall from "../assets/monitorCartSmall.png";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const initialProducts = [
    { name: "LCD Monitor", price: 650, image: MonitorCartSmall },
    { name: "Wireless Keyboard", price: 120, image: MonitorCartSmall },
    { name: "Gaming Mouse", price: 85, image: MonitorCartSmall },
  ];

  const [initialProduct1, setInitialProduvt1] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/v1/product/all")
      .then((res) => res.json())
      .then((data) => setInitialProduvt1(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

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
    <div>
      <Header />
      <div className="p-8">
        <div className="text-sm text-gray-500 mb-4">
          Home / <span className="text=-black">Cart</span>{" "}
        </div>

        <div className="grid grid-cols-5 gap-6 text-sm text-gray-700 uppercase font-semibold mb-2 px-1">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>delete</div>
        </div>

        {/* Product cards */}
        <div>
          {initialProduct1.map((product, idx) => (
            <DisplayCardSection
              key={idx}
              product={product}
              quantity={quantities[idx]}
              onIncrease={() => increaseQuantity(idx)}
              onDecrease={() => decreaseQuantity(idx)}
              deleteIcon={
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              }
            />
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/" className="border px-4 py-2 rounded hover:bg-gray-100">
            Return To Shop
          </Link>
        </div>

        {/* Summary Section */}
        <div className=" flex flex-wrap justify-end p-6 mt-8 gap-6 rounded-md shadow-sm">
          {/* Coupon Code */}

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
            <Link
              to="/placed"
              className="w-full text-white py-2 px-4 rounded "
              style={{ background: "#DB4444" }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CartPage;
