import React from "react";
React;
export default function Package() {
  return (
    <div className="bg-white py-24 sm:py-32 w-full xl:w-full md:w-full sm:w-full">
      <h2 className="text-blue-400 font-bold py-4">BRAND&apos;S PRODUCT WE SERVE</h2>
      <h2 className="text-center text-lg/8 font-semibold text-gray-900">
        Trusted by the world’s most innovative teams
      </h2>
      <div className="mx-auto w-full px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="hp"
            src="https://static.vecteezy.com/system/resources/previews/020/190/465/non_2x/hp-logo-hp-icon-free-free-vector.jpg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Apple"
            src="https://cdn.pixabay.com/photo/2018/05/08/21/08/apple-3383931_1280.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Lenovo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_XNFrpHsStNfX5Hcqy1cenKDyNYxfFJMsA&s"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Beats"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDgwH-5RTvc0cHl_4Uze2n2ljt5l2gEZbvQg&s"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Logitech"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-v6Fcsc6HpyPy5j1l7mc_xAapf1FhtvhZOw&s"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
