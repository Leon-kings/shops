import React from "react";
import Sidebar from "./components/sidebar/Side";
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

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          <div className="main">
            <Postview />
          </div>
          <div className="main">
            <Testimonyview />
          </div>
        </div>

      </div>
    </>
  );
}
