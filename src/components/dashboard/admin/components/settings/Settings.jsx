import { EyeIcon } from "@heroicons/react/16/solid";
import React from "react";
import { BiCartAdd, BiUserPlus } from "react-icons/bi";
import { LuMessageCirclePlus } from "react-icons/lu";
import { TbSettingsAutomation } from "react-icons/tb";
import { Link } from "react-router-dom";
// pages
import CreateTestimony from "../testmony/Testimony";
import CreatePost from "../post/CreatePost";
import CreateMessage from "../message/CreateMessage";
import CreateUser from "../createuser/CreateUser";

React;
export default function Settings() {
  return (
    <>
      <div className="title"></div>
      <div className="bg-white">
        <div className="grid bg-white py-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          <div className="bg-blue-200 text-white p-4">
            <Link to={"/5040/Create/User/245678"}>
              <button>
                <BiUserPlus />
              </button>
            </Link>
          </div>
          <div className="bg-green-200 text-white p-4">
            <Link to={"/5040/Create/Message/245678"}>
              <button>
                <LuMessageCirclePlus />
              </button>
            </Link>
          </div>
          <div className="bg-red-200 text-white p-4">
            <Link to={"/5040/Create/Testimony/245678"}>
              <button>
                <TbSettingsAutomation />
              </button>
            </Link>
          </div>
          <div className="bg-yellow-200 text-white p-4">
            <Link to={"/5040/Create/Post/245678"}>
              <button>
                <BiCartAdd />
              </button>
            </Link>
          </div>
        </div>
        <h4 className="py-4">View All</h4>
        {/*  */}
        {/*  */}
        <div className="grid bg-white py-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          <div className="bg-blue-200 text-white p-4">
            <Link to={"/5010/Userview"}>
              <button>
                <EyeIcon />
                <BiUserPlus />
              </button>
            </Link>
          </div>
          <div className="bg-green-200 text-white p-4">
            <Link to={"/5010/Message"}>
              <button>
                <EyeIcon />
                <LuMessageCirclePlus />
              </button>
            </Link>
          </div>
          <div className="bg-red-200 text-white p-4">
            <Link to={"/5010/Testimony"}>
              <button>
                <EyeIcon />
                <TbSettingsAutomation />
              </button>
            </Link>
          </div>
          <div className="bg-yellow-200 text-white p-4">
            <Link to={"/5010/Postview"}>
              <button>
                <EyeIcon />
                <BiCartAdd />
              </button>
            </Link>
          </div>
        </div>
        {/* main content */}
        <br />
        <h2 className="text-blue-300 bg-amber-100 rounded-md">
          Make your Components Compatible
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="text-white p-4">
            <CreateUser />
          </div>
          <div className="text-white">
            <CreatePost />
          </div>
        </div>
        {/*  */}
        <h2 className="text-blue-300 rounded-md text-2xl">
          Make your Components Compatible
        </h2>
        <p className="text-lg">
          We can make our Comments and Testimony and also create user and post
          or post products
        </p>
        <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="text-white p-6">
            <CreateMessage />
          </div>
          <div className="text-white p-6">
            <CreateTestimony />
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
