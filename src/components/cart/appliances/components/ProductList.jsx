import React from "react";
import Products from "../data.json";
import Product from "./Product";
React;
function ProductList() {
  return (
    <div className="pleft justify-between w-full h-full py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
      <div className="heading-title">
        <h2 className="text-blue-400 font-bold">HEADSET / HEADPHONE</h2>
        <h2 className="subtitle">
        Visit Headset Store, The Fastest Growing Marketplace for Business Headsets, Office Headsets, Call Centre Headsets and Contact Centre Headsets
        </h2>
      </div>
      <h2 className="title p-6 font-medium">Best Quality We Serve</h2>
      <div className="w-full sm:grid-cols-1 gap-8 lg:grid-cols-4  grid grid-cols-1 md:grid-cols-3  gap-y-7">
        {Products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
