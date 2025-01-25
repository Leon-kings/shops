import React, { useState } from "react";
React;
import { BiLogOut, BiUser } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import MyBarChart from "../charts/Barchart";
import MyChart from "../charts/Chart";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const marketerLogos = [
    "https://i.pravatar.cc/130",
    "https://i.pravatar.cc/131",
    "https://i.pravatar.cc/132",
    "https://i.pravatar.cc/133",
    "https://i.pravatar.cc/134",
    "https://i.pravatar.cc/135",
    "https://i.pravatar.cc/136",
    "https://i.pravatar.cc/137",
    "https://i.pravatar.cc/138",
    "https://i.pravatar.cc/139",
    "https://i.pravatar.cc/140",
  ];
  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem("token"); // Or sessionStorage.removeItem("token");
    localStorage.removeItem("user"); // Optional: Remove any stored user info
    navigate("/login"); // Redirect to the login page
  };
  return (
    <>
      {" "}
      <div className="title"></div>
      <div className="flex scroll-auto w-full">
        {/* Sidebar */}
        <div
          className={`
          fixed scroll-auto top-0 left-0 z-50 min-h-screen w-64 bg-gray-800 text-white p-4 overflow-y-auto transition-all duration-300 ease-in-out
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
              <Link to={"/302010/Settings"}>
                <button>
                  <IoSettings />
                </button>
              </Link>
            </li>
            <br />
            <li className="my-2">
              <Link to={"/302005/Profile"}>
                <button>
                  <CgProfile />
                </button>
              </Link>
            </li>
            <br />
            <li className="my-2">
              <Link to={"/5010/Userview"}>
                <button disabled>
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
        <div className=" bg-white p-4 w-full xl:w-full lg:w-full sm:w-full">
          {/* Main content here */}
          <div className="grid grid-cols-1 gap-x-6  sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
            <div className="head">
              <MyBarChart />
            </div>
            <div className="head">
              <MyChart />
            </div>
          </div>
          <div className="new">
            <main className="bg-indigo-300 rounded-lg shadow-lg mt-10 py-20">
              <section className=" justify-between items-center p-10 ">
                <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-6">
                  <div className="flex -space-x-2 overflow-hidden">
                    {marketerLogos.map((logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt=""
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-amber-100"
                      />
                    ))}
                  </div>
                  <div className="flex -space-x-2 overflow-hidden">
                    {marketerLogos.map((logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt=""
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      />
                    ))}
                  </div>
                </div>
              </section>
            </main>
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
    </>
  );
}

export default Sidebar;
