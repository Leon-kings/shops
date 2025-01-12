import React from "react";
import Sidebar from "./components/sidebar/Side";

import Header from "./components/heading/Head";
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
        <div className="new">
          <Header/>
        </div>
      
   

      </div>
      
    </>
  );
}
