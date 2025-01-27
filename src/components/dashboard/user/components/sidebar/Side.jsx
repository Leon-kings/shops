import React, { useState } from "react";
React;
import { BiLogOut, BiMenu, BiUser } from "react-icons/bi";
import { CgClose, CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";
import MyBarChart from "../charts/Barchart";
import MyChart from "../charts/Chart";
import image from "../../../../../assets/images/buying-laptops-in-ireland-in-2023-min-1678291071660_a842ec16-4d68-4ab9-ade7-3a46f6e4efcf_1600x.webp";
import side from "../../../../../assets/images/Watches-PCD_CO15_Sleep-Coaching_MO.webp";
import side1 from "../../../../../assets/images/student-with-laptop.jpg";
import side2 from "../../../../../assets/images/romantic-african-woman-with-trendy-hairstyle-sitting-her-workplace-analysing-data-indoor-portrait-black-female-student-working-with-laptop-before-exam_197531-3782.avif";
import side3 from "../../../../../assets/images/programmer-people-working-laptops-smartphones-600nw-2473384115.webp";
import side4 from "../../../../../assets/images/macbook-pro.avif";
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
            <li className="w-full">
              <img src={image} alt="" />
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
              <Link to={"/LogOut"}>
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
          <div className="w-full">
            <div className="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 lg:mt-20 snap-x">
              <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cover"
                        src={side}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          New Features
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Rwanda&lsquo; s Shop for mobiles, Electronics,
                          perfumes, Laptops.
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                        src={side1}
                        alt=""
                      />
                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          New Features
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Buy genuine products at the best prices. Apple,
                          Samsung, HP.
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                        src={side2}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          New Features
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Razer BlackShark V2 X Gaming Headset: 7.1 Surround
                          Sound - 50mm.
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                        src={side3}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          New Feature
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Shop through a wide selection of Smart Watches with
                          Free shipping .
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
                <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                        src={side4}
                        alt=""
                      />

                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          New Feature
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          Navigation, 3.53 cm HD Display & BT Calling
                          Smartwatch. 82%.
                        </p>
                        <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                          April 09, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ... */}
        </div>

        {/* Sidebar toggle button */}
        <button
          className="fixed top-34 left-4 z-50 bg-blue-500 hover:bg-blue-600 text-white font-bold py-18 px-4 rounded"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <CgClose className="text-red-500 font-bold" />
          ) : (
            <BiMenu />
          )}
        </button>
      </div>
    </>
  );
}

export default Sidebar;
