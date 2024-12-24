import React from "react";
import Shop from "../../universal/marketPart/Shop";
// import ProductList from "../../universal/marketPart/ProductList";
import App from "../../components/cart/appliances/App";
import AppComputer from "../../components/cart/computer/App";
React;
const Market = () => {
  return (
    <>
      <div className="title"></div>
      <br />
      <div className="bg-white rounded-2xl">
      <h2 className="text-2xl font-bold py-3 tracking-tight text-blue-600 ">
          SHOP
        </h2>
        
        <Shop />
        {/* <ProductList/> */}
        <App/>
        <AppComputer/>
      </div>
      <div className="title"></div>
    </>
  );
};

export default Market;
