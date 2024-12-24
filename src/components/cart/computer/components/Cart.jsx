// Cart.js
import EmptyCart from "../../../../assets/images/360_F_288921356_krHC3KV1lJ2jAGnaep6NXZX6Fkv4FF9q.jpg";
import { useCart } from "../CartContext";
import RemoveIcon from "../../../../assets/images/360_F_288921356_krHC3KV1lJ2jAGnaep6NXZX6Fkv4FF9q.jpg";
import Carbon from "../../../../assets/images/360_F_288921356_krHC3KV1lJ2jAGnaep6NXZX6Fkv4FF9q.jpg";
import React from "react";
import { Link } from "react-router-dom";
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
      <h3 className="text-2xl text-red font-bold">Your Added  To Cart Items : ({totalItems})</h3>
      {totalItems === 0 ? (
        <div className="flex flex-col items-center">
          <img src={EmptyCart} alt="Empty Cart" className="w-8" />
          <p className="text-sm text-rose-500">
           Add Your Products
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center pt-2 pb-2 border-b border-rose-100"
            >
              <div>
                <p className="text-sm font-bold pb-1 text-rose-500">{item.name}</p>
                <div className="flex items-center gap-2 font-primary text-sm">
                  <p className="text-sm text-red">{item.quantity}x</p>
                  <p className="text-sm text-rose-400">@ {item.price}</p>
                  <p className="font-medium text-rose-500">
                    $
                    {(
                      parseFloat(item.price.replace("$", "")) * item.quantity
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="bg-red-500 p-1 rounded-full border-rose-200 border-2 ml-4 hover:border-rose-500"
              >
                <img src={RemoveIcon} className="w-8 md:w-6" alt="" />
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 pd-2 ">
            <p className="text-[0.7rem] font-medium text-rose-400">
              Order Total
            </p>
            <p className="font-extrabold text-rose-500">
              
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-center py-2 px-4 bg-rose-100 mt-4 rounded-lg gap-1">
            <img src={Carbon} alt="" className="w-8"/>
            <p className="text-[0.7rem] font-medium text-rose-400">
              This is a{" "}
              <label htmlFor="label" className="font-bold text-rose-500">Leon-shop</label>{" "}
              delivery
            </p>
          </div>
          <Link to={'/CheckOut'}>
          <button
            onClick={onConfirmOrder}
            className="text-sm self-stretch mt-4 bg-red px-4 py-2 bg-black text-white rounded-3xl"
          >
            Confirm Order
          </button>
          </Link>
         
        </div>
      )}
    </div>
  );
}

export default Cart;
