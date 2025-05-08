import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCardSection from "../components/DisplayCardSection";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const navigate = useNavigate();


  // Fetch cart data from backend
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/user/get-cart-data", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const items = res.data.cart.map((item) => ({
          ...item.productId,
          quantity: item.quantity,
          _id: item.productId._id, // safe access
        }));

        setCartItems(items);
        setQuantities(items.map((item) => item.quantity));
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCartData();
  }, []);

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

  const handleRemove = async (productId) => {
    try {
      await axios.delete("http://localhost:3000/api/v1/user/remove-cart", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { productId },
      });

      setCartItems(cartItems.filter((item) => item._id !== productId));
    } catch (err) {
      console.error("Error removing product:", err);
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item, idx) => acc + item.price * quantities[idx],
    0
  );

  const handleConfirmOrder = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/v1/user/place-order",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // alert("Order placed!");
      navigate("/placed"); // navigate to order placed page
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  return (
    <div>
      <Header />
      <div className="p-8">
        <div className="text-sm text-gray-500 mb-4">
          Home / <span className="text-black">Cart</span>
        </div>

        <div className="grid grid-cols-5 gap-6 text-sm text-gray-700 uppercase font-semibold mb-2 px-1">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
          <div>Delete</div>
        </div>

        <div>
          {cartItems.map((product, idx) => (
            <DisplayCardSection
              key={product._id}
              product={{
                ...product,
                imageUrl:
                  product.images && product.images.length > 0
                    ? `http://localhost:3000${product.images[0]}`
                    : "https://via.placeholder.com/270x250?text=No+Image",
              }}
              quantity={quantities[idx]}
              onIncrease={() => increaseQuantity(idx)}
              onDecrease={() => decreaseQuantity(idx)}
              deleteIcon={
                <FaTrashAlt
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleRemove(product._id)}
                />
              }
            />
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <Link to="/" className="border px-4 py-2 rounded hover:bg-gray-100">
            Return To Shop
          </Link>
        </div>

        <div className="flex flex-wrap justify-end p-6 mt-8 gap-6 rounded-md shadow-sm">
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
              onClick={handleConfirmOrder}
              className="w-full text-white py-2 px-4 rounded"
              style={{ background: "#DB4444" }}
            >
              Proceed to Confirm order
            </button>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
