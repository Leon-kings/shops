
import React from 'react';
import { Link } from 'react-router-dom';
import Video from "../../assets/video/head.mp4";

const Header = () => {
  return (
    <div className="relative isolate">
      {/* Video Background */}
      <div className="absolute transform-gpu overflow-hidden blur-1xl ">
      <div className="title"></div>
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-black/100 hover:ring-blue-500">
              <b>GET YOUR DESIRED COMPUTER AT A REASONABLE PRICE</b>
            </div>
          </div>
          <div className="text-center">
            <h2 className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
              Leon is happy to Serve you Your Favourite Computers. Choose the Best PC and Also If You want to Buy Your repairment Kits.
            </h2>
            <p className="text-white"></p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500">
                Get started
              </Link>
              <Link className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
