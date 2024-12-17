

import Products from "../data.json";
import Product from "./Product";

function ProductList() {
  return (
    <div className="pleft justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
      <h1 className="ml-4 mb-4 text-4xl font-bold text-rose-800">Leon-shop</h1>
      <h4 className="title p-6 font-medium">Best Quality We Serve</h4>
      <div className="grid sm:grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 grid grid-cols-1 md:grid-cols-3  gap-y-7">
        
        {Products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className="buttonView">
        <div className="title">
        <button className="mt-5 tracking-wide font-semibold bg-blue-900 m-3 text-gray-100 w-1/3 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">View Products</button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
