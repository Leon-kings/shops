import React from "react";
import Sidebar from "./components/sidebar/Side";
import Header from "./components/heading/Head";
import ComponentName from "./components/linechart/Linechart";
import UTestimony from "./components/testimony/Testimony";
import UPost from "./components/post/Post";
import side from '../../../assets/images/postdp-hero03.jpg.large.2x.jpg'
React;
export default function Udashboard() {
  return (
    <>
      {" "}
      <div className="title"></div>
      <div className="container bg-white xl:w-full lg:w-full md:w-full sm:w-full">
        <div className="w-full ">
          <Sidebar />
        </div>
        <div className="main">
          <UPost />
        </div>
        <div className="container w-full">
          <Header />
        </div>
        <div className="main">
          <UTestimony />
        </div>
        <div className="main">
          <ComponentName />
        </div>
        <div className="main">
          <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
                {/* Left content */}
                <div>
                  <h2 className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                  Computer Accessories · Computer Batteries · Acer · Asus · Dell · HP · Toshiba · Computer Cables · Computer Connectors · Display Connectors · Ethernet Connectors .
                  </h2>
                  <h2 className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                  Shop Newegg today for all of your gaming, PC & technology needs. Don&apos; t miss today&apos; s best electronics deals with fast shipping & great customer service!
                  </h2>
                </div>

                {/* Right content */}
                <div className="relative">
                  <div className="absolute inset-0">
                    <svg
                      className="blur-3xl filter opacity-70"
                      style={{ filter: "blur(64px)" }}
                      width="444"
                      height="536"
                      viewBox="0 0 444 536"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                        fill="url(#c)"
                      />
                      <defs>
                        <linearGradient
                          id="c"
                          x1="82.7339"
                          y1="550.792"
                          x2="-39.945"
                          y2="118.965"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: "var(--color-cyan-500)" }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: "var(--color-purple-500)" }}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="absolute inset-0">
                    <img
                      className="object-cover w-full h-full opacity-50"
                      src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
                      alt=""
                    />
                  </div>

                  <img
                    className="relative w-full max-w-md mx-auto"
                    src={side}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br />
    </>
  );
}
