import React, { useState } from "react";
React;
import { BiLogOut, BiMenu, BiUser } from "react-icons/bi";
import { CgClose, CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { Link} from "react-router-dom";
import image from '../../../../../assets/images/buying-laptops-in-ireland-in-2023-min-1678291071660_a842ec16-4d68-4ab9-ade7-3a46f6e4efcf_1600x.webp'
import Graphs from "../map/Graphs";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex scroll-auto">
      <div className="title"></div>
      {/* Sidebar */}
      <div
        className={`
          fixed scroll-auto top-0 left-0 z-50 min-h-screen w-64 bg-gray-800 text-white p-4 overflow-y-auto transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar content here */}

        <ul className="scroll-auto">
          <li className="w-full">
            <img
              src={image}
              alt=""
            />
          </li>
          <li className="my-2">
            <Link to={"/"}>
              <button>
                <BsHouse />
              </button>
            </Link>
          </li>
          <br />
          <li className="my-2">
            <Link to={"/Settings"}>
              <button>
                <IoSettings />
              </button>
            </Link>
          </li>
          <br />
          <li className="my-2">
            <Link to={"/Profile/Dashboard"}>
              <button>
                <CgProfile />
              </button>
            </Link>
          </li>
          <br />
          <li className="my-2">
            <Link to={"/5010/Userview"}>
              <button>
                <BiUser />
              </button>
            </Link>
          </li>
          <br />
          <li className="my-2">
            <Link to={'/'}>
              <button>
                <BiLogOut />
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white p-4 w-full xl:w-full lg:w-full sm:w-full">
        <Graphs/>  
        {/* ... */}
      </div>

      {/* Sidebar toggle button */}
      <button
        className="fixed top-34 left-4 z-50 bg-blue-500 hover:bg-blue-600 text-white font-bold py-18 px-4 rounded"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <CgClose className="text-red-500 font-bold"/> : <BiMenu/> }
      </button>
    </div>
  );
}

export default Sidebar;
