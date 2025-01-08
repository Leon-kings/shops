import React, { useState } from "react";
React;
import Userview from "../userview/Userview";
import { BiLogOut, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
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
              src="https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fHww"
              alt="new"
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
            <Link to={handleLogout}>
              <button>
                <BiLogOut />
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white p-4 w-full xl:w-full lg:w-full sm:w-full">
        {/* Main content here */}
        <Userview />
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
