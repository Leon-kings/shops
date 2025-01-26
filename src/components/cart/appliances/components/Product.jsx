import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useEffect } from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
Link;
React;
const Product = ({ product }) => {
  const [count, setCount] = useState(0);
  const { cartItems, updateCart } = useCart();

  useEffect(() => {
    const cartItem = cartItems.find((item) => item.id === product.id);
    setCount(cartItem ? cartItem.quantity : 0);
  }, [cartItems, product.id]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    updateCart(product, 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      updateCart(product, -1);
    }
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex flex-col items-center">
        <Link to={`/Details/:${product.id}`}>
          <img
            className={
              count > 0
                ? "border-red border-2 w-full lg:w-full h-[250px] object-cover rounded-[5px]"
                : " lg:w-full w-full h-[250px] object-cover rounded-[5px]"
            }
            src={product.image}
            alt={product.id}
          />
        </Link>
        <div className="relative group">
          <button
            className={
              count > 0
                ? "hidden"
                : "flex bg-white -mt-5 border-black border-2 px-5 py-2 rounded-[1.5rem] transition-all duration-300 group-hover:hidden"
            }
          >
            <BiCart className="size-6 text-white" />
            Add to cart
          </button>
          <div
            className={
              count > 0
                ? "opacity-100 bg-red -mt-5 inset-0 flex items-center px-3 py-2 rounded-[1.5rem] justify-center gap-2"
                : "bg-red -mt-5 inset-0 flex items-center px-3 py-2 rounded-[1.5rem] justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:flex"
            }
          >
            <button
              className=" text-white bg-black px-3 py-1 rounded"
              onClick={decrement}
            >
              -
            </button>
            <p className="text-black font-bold">{count}</p>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="pl-4">
        <p className="text-sm font-primary text-blue-400">{product.tag}</p>
        <h3 className="text-lg text-black font-primary font-medium">
          {product.name}
        </h3>
        <p className="text-green-400 bg-amber-50  font-bold">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
