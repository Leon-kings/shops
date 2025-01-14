import { EyeIcon, HomeIcon } from "@heroicons/react/16/solid";
import React from "react";
import { BiCartAdd, BiUserPlus } from "react-icons/bi";
import { LuMessageCirclePlus } from "react-icons/lu";
import { TbSettingsAutomation } from "react-icons/tb";
import { Link } from "react-router-dom";
import CreateMessage from "../../../admin/components/message/CreateMessage";
import CreateTestimony from "../../../admin/components/testmony/Testimony";
import CreatePost from "../../../admin/components/post/CreatePost";
import Postview from "../../../admin/components/postview/Postview";
// pages
// import CreateTestimony from "../testmony/Testimony";
// import CreatePost from "../post/CreatePost";
// import CreateMessage from "../message/CreateMessage";
// import CreateUser from "../createuser/CreateUser";

React;
export default function USettings() {
  return (
    <>
      <div className="title">
      </div>
      <div className="bg-white">
        <div className="grid bg-white py-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          <div className="bg-blue-200 text-white p-4 text-center">
            <Link to={'/5040/Create/User/245678'}>
              <button disabled>
                <BiUserPlus />
              </button>
            </Link>
          </div>
          <div className="bg-green-200 text-white p-4 text-center">
            <Link to={'/5040/Create/Message/245678'}>
              <button>
                <LuMessageCirclePlus />
              </button>
            </Link>
          </div>
          <div className="bg-red-200 text-white p-4 text-center">
            <Link to={'/5040/Create/Testimony/245678'}>
              <button>
                <TbSettingsAutomation />
              </button>
            </Link>
          </div>
          <div className="bg-yellow-200 text-white p-4 text-center">
            <Link to={'/5040/Create/Post/245678'}>
              <button>
                <BiCartAdd />
              </button>
            </Link>
          </div>
        </div>
        <h4 className="py-4 font-bold underline">View All</h4>
        <Link to={'/Udashboard'}>
        <button>
            <HomeIcon className="size-4"/>
        </button>
        </Link>
        {/*  */}
        {/*  */}
        <div className="grid bg-white py-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          <div className="bg-blue-200 text-white p-4 text-center">
            <Link to={'/302000/user'}>
              <button disabled>
                <EyeIcon />
                <BiUserPlus />
              </button>
            </Link>
          </div>
          <div className="bg-green-200 text-white p-4 text-center">
            <Link to={"/302015/Message"}>
              <button>
                <EyeIcon />
                <LuMessageCirclePlus />
              </button>
            </Link>
          </div>
          <div className="bg-red-200 text-white p-4 text-center">
            <Link to={"/302020/Testimony"}>
              <button>
                <EyeIcon />
                <TbSettingsAutomation />
              </button>
            </Link>
          </div>
          <div className="bg-yellow-200 text-white p-4 text-center">
            <Link to={"/302025/Post"}>
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
        <div className="grid bg-white grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
   
          <div className="text-white p-4 text-center">
           <CreateMessage/>
        </div>
          <div className="text-white p-4 text-center">
           <CreateTestimony/>
           </div>
        </div>
        {/*  */}
        <h2 className="text-blue-300 rounded-md">
          Make your Components Compatible
        </h2>
        <label htmlFor="head">We can make our Comments and Testimony and also create user and post or post products</label>
        <div className="grid bg-white py-4 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
          <div className="text-white p-4 text-center">
          <CreatePost/>
        </div>
          <div className="text-white p-4 text-center">
         <Postview/>
           </div>
        </div>
        <div className="title"></div>
      </div>
    </>
  );
}
