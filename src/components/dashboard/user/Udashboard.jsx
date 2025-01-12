import React from "react";
import Sidebar from "./components/sidebar/Side";

import Header from "./components/heading/Head";
import ComponentName from "./components/linechart/Linechart";
import { FaDownload } from "react-icons/fa";
import Postview from "../admin/components/postview/Postview";
import Testimonyview from "../admin/components/testimonyview/Testimonyview";
React;
export default function Udashboard() {
  return (
    <>
      {" "}
      <div className="title"></div>
      <div className="container bg-white">
        <div className="w-full container xl:w-full lg:w-full md:w-full sm:w-full">
          <Sidebar />
        </div>
        <div className="main">
          <Postview/>
        </div>
        <div className="new">
          <Header/>
        </div>
        <div className="main">
          <Testimonyview/>
        </div>
        <div className="main">
          <ComponentName/>
        </div>
        <div className="main">
        <main className='flex justify-center items-center my-12 mx-auto'>
        <div className='flex-1 justify-center items-center px-12'>
          <img src='https://images.unsplash.com/photo-1600087626014-e652e18bbff2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZSUyMHdpdGglMjBhJTIwZGVsaXZlcnklMjBub3RpZmljYXRpb258ZW58MHx8MHx8fDA%3D' alt='Smartphone' className='rounded-lg shadow-2xl' />
        </div>
        <div className='flex-1 text-left px-12'>
          <h1 className='text-6xl font-bold my-4'>Simplify Your Work</h1>
          <p className='text-gray-400 text-xl my-4'>Our tool helps you streamline your workflow for better efficiency. Experience cutting-edge features with our tool. Redefine your working experience now.</p>
          <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center'>
            <FaDownload className='mr-3' />
            Download Now
          </button>
          <p className='text-gray-500 text-sm mt-4'>No credit card required</p>
        </div>
      </main>
        </div>
   

      </div>
      
    </>
  );
}
