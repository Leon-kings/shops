import React from "react";
import Shop from "../../universal/marketPart/Shop";
import App from "../../components/cart/appliances/App";
import AppComputer from "../../components/cart/computer/App";
React;
const Market = () => {
  return (
    <>
      <div className="title"></div>
      <div className="bg-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <h2 className="text-2xl font-bold py-3 tracking-tight text-blue-600 ">
          SHOP
        </h2>
        <Shop />
        </div>
        <br />
        <div className="bg-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
           <App />
        </div>
        <br />
       <div className="bg-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
         <AppComputer />
       </div>
       <br />
    </>
  );
};

export default Market;
