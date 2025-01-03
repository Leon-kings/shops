

import React from "react";
import Products from "../data.json";
import Product from "./Product";
React;
function ProductList() {
  return (
    <div className="pleft justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
    
      <h4 className="title p-6 font-medium">Best Quality We Serve</h4>
      <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 md:grid-cols-3  gap-y-7">
        
        {Products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    
    </div>
  );
}

export default ProductList;
