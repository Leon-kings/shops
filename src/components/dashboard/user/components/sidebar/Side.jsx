import React, { useState } from "react";
React;
import { BiLogOut, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Postview from "../../../admin/components/postview/Postview";
import MyBarChart from "../charts/Barchart";
import MyChart from "../charts/Chart";
import MyPieChart from "../charts/PieChart";
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem("token"); // Or sessionStorage.removeItem("token");
    localStorage.removeItem("user"); // Optional: Remove any stored user info
    navigate("/login"); // Redirect to the login page
  };
  return (
    <div className="flex h-screen scroll-auto">
      <div className="title"></div>
      {/* Sidebar */}
      <div
        className={`
          fixed scroll-auto top-0 left-0 z-50 w-64 bg-gray-800 text-white p-4 overflow-y-auto transition-all duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar content here */}

        <ul className="scroll-auto">
          <li className="w-40">
            <img
              src="https://t4.ftcdn.net/jpg/02/88/92/13/360_F_288921356_krHC3KV1lJ2jAGnaep6NXZX6Fkv4FF9q.jpg"
              alt=""
            />
          </li>
          <li className="my-2">
            <Link to={"/Udashboard"}>
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
            <Link to={handleLogout}>
              <button>
                <BiLogOut />
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className=" bg-white p-4 grid w-full xl:w-full lg:w-full sm:w-full">
        {/* Main content here */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          <div className="head">
            <MyBarChart />
          </div>
          <div className="head">
            <MyChart />
          </div>
          <div className="head">
            <MyPieChart />
          </div>
        </div>
        {/* ... */}
      </div>

      {/* Sidebar toggle button */}
      <button
        className="fixed top-34 left-4 z-50 bg-blue-500 hover:bg-blue-600 text-white font-bold py-18 px-4 rounded"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
}

export default Sidebar;
