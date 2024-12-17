import React from "react";
import { Link } from "react-router-dom";
React;
const products = [
  {
    id: 1,
    name: "G433 7.1 Wired Surround Gaming Headset",
    imageSrc:
      "https://resource.logitech.com/content/dam/gaming/en/products/g433/g433-gallery-black-1.png",
    imageAlt: "G433 7.1 Wired Surround Gaming Headset",
    price: "$15",
    color: "Black",
  },
  {
    id: 2,
    name: "G5BT CAT Gaming Headset Low Latency Bluetooth Gaming Headset",
    imageSrc:
      "https://edifier-online.ca/cdn/shop/files/edifier-g5btcat-pink-1_bbf9a39e-dbac-4fb5-8a63-d9afa1210342.png?v=1704699084",
    imageAlt: "G5BT CAT Gaming Headset Low Latency Bluetooth Gaming Headset",
    price: "$15",
    color: "Orange",
  },
  {
    id: 3,
    name: "Gaming Headsets",
    imageSrc:
      "https://assets2.razerzone.com/images/pnx.assets/eacc83c0643ed2da8c9e98968f8aa215/headset-landingpg-500x500-barracuda.jpg",
    imageAlt: "Gaming Headsets",
    price: "$25",
    color: "Black",
  },
  {
    id: 4,
    name: "boAt Rockerz 103 Pro M Bluetooth",
    imageSrc:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/18238478/2022/5/27/25eb64b7-75e5-4afb-a8e3-61d904ee42b91653642240521-boAt-Rockerz-103-Pro-M-Bluetooth-Headset-with-Beast-Mode---B-1.jpg",
    imageAlt: "boAt Rockerz 103 Pro M Bluetooth",
    price: "$9",
    color: "Black-Black",
  },
  {
    id: 5,
    name: "Maypug Laptop Computer, 12GB RAM 512GB ROM, 15.6 inch",
    imageSrc:
      "https://m.media-amazon.com/images/I/61e5ozXtN6L._AC_UF894,1000_QL80_.jpg",
    imageAlt: "Maypug Laptop Computer",
    price: "$335",
    color: "Gray",
  },
  {
    id: 6,
    name: " MacBook Air MJVM2LL/A 11.6-Inch Laptop",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtA8eRGzKLDb6fb9mdth-US6EtX1fLtI_h-w&s",
    imageAlt: "MacBook Air MJVM2LL/A 11.6-Inch Laptop",
    price: "$35",
    color: "Gray",
  },
  {
    id: 7,
    name: "HP Laptop 17-cn3000ca",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaSilnmDMrQIY-88ntjsxnN-cEtkplpwlDg&s",
    imageAlt: "HP Laptop 17-cn3000ca",
    price: "$235",
    color: "Gray",
  },
  {
    id: 8,
    name: "HP Laptop 15s-fq5016ni",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkjpL_MT9ckST2_sm48ysFtkv8nnSf9eL8kw&s",
    imageAlt: "HP Laptop 15s-fq5016ni.",
    price: "$235",
    color: "White",
  },

  // More products...
];

export default function Product() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-50"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-black">
                    <Link to={product.href}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-blue-400">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-green-400">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
