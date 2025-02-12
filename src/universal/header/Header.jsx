import React from "react";
import { Link } from "react-router-dom";
import Video from "../../assets/video/head.mp4";
React;
const Header = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full xl:w-full lg:w-full">
          <div className="header relative lg:max-w-none md:w-full w-full lg:w-full xl:w-full">
            {/* Video Background */}
            <div className="absolute transform-gpu overflow-hidden blur-1xl ">
              <div className="title sm:pt-0 pb-0"></div>
              <video
                className="w-full md:w-full  lg:w-fulllg:w-full xl:w-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Content */}
            <div className="w-full relative isolate px-6 pb-0 pt-14 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative rounded-full px-3 py-4 text-sm/6 text-white ring-1 ring-yellow-100 hover:ring-blue-500">
                    <div className="font-bold">
                      GET YOUR DESIRED COMPUTER AT A REASONABLE PRICE .
                    </div>
                  </div>
                </div>
                <div className="text-center my-10">
                  <h2 className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                    Leon is happy to Serve you Your Favourite Computers. Choose
                    the Best PC and Also If You want to Buy Your repairment
                    Kits.
                  </h2>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      to={"/Market"}
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500"
                    >
                      Get started
                    </Link>
                    <button>
                      <Link
                        to={"/Who/we/are"}
                        className="text-sm/6 font-semibold text-black"
                      >
                        Learn More
                        <b
                          aria-hidden="true"
                          className="text-amber-300 font-extrabold"
                        >
                          &#8594;
                        </b>
                      </Link>
                    </button>
                  </div>
                  <h2 className="text-gray-300 py-10 font-medium">
                    LD Computer Store Rwanda Limited is a Full-Service
                    Technology Services Provider also called the Top IT
                    Consulting Company in Kigali, Rwanda.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
