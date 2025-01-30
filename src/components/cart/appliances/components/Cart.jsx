// Cart.js
import { useCart } from "../CartContext";
import React from "react";
import { BiCart } from "react-icons/bi";

import { CgClose } from "react-icons/cg";
import { XMarkIcon } from "@heroicons/react/16/solid";
React;

function Cart({ onConfirmOrder }) {
  const { cartItems, updateCart } = useCart();

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  const handleRemove = (product) => {
    updateCart(product, -product.quantity);
  };

  return (
    <div className="  bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
      <h3 className="text-2xl text-red font-bold">
        Your Added To Cart Items : ({totalItems})
      </h3>
      {totalItems === 0 ? (
        <div className="flex flex-col items-center">
          <BiCart className="size-6" />
          <p className="text-sm text-rose-500">Add Your Products</p>
        </div>
      ) : (
        <div className="flex flex-col">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center pt-2 pb-2 border-b border-rose-100"
            >
              <div>
                <div className=" rounded-2xl rounded-b-md shadow-2xl">
                  <div className="name">
                    <h2>{item.name}</h2>
                  </div>
                  <div className="image">
                    <img src={item.image} alt="" className="w-3xs h-3xs" />
                  </div>
                  <div className="flex items-center gap-2 font-primary text-sm">
                    <p className="text-sm text-red flex">
                      {item.quantity}
                      <XMarkIcon className="size-6" />{" "}
                    </p>
                    <p className="text-sm">@ {item.price}/item</p>
                    <p className="font-bold text-rose-500">
                      $
                      {(
                        parseFloat(item.price.replace("$", "")) * item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="bg-red-500 p-1 rounded-full border-rose-200 border-2 ml-4 hover:border-rose-500"
              >
                <CgClose className="size-4 font-extrabold text-red-400" />
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 pd-2 ">
            <p className="text-[1rem] font-medium text-black">Order Total</p>
            <p className="font-extrabold text-rose-500">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="container flex-col items-center justify-center">
            <p className="items-center">LD</p>
          </div>

          <button
            onClick={onConfirmOrder}
            className="text-sm self-stretch mt-4 bg-red px-4 py-2 bg-black text-white rounded-3xl"
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
