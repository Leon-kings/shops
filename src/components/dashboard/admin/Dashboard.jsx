import React from "react";
import Sidebar from "./components/sidebar/Side";
import Postview from "./components/postview/Postview";
import Userview from "./components/userview/Userview";
import image from "../../../assets/images/best-laptop-brands-20230420-3-medium.jpg";
React;
const Dashboard = () => {
  return (
    <>
      <div className="title"></div>
      <div className=" w-full bg-white md:w-full lg:w-full xl:w-full">
        <h3 className="text-center py-5 text-blue-400 font-bold">DASHBOARD</h3>
        <Sidebar />
        <br />
        <div className="w-full">
          <div className="relative py-12 bg-white sm:py-16 lg:py-20">
            <div className="absolute inset-0">
              <img
                className="object-cover object-right w-full h-full lg:object-center"
                src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/5/background.png"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>

            <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
                <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
                  Find the best office accessories in one tap
                </h1>
                <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  nunc nisl eu consectetur. Mi massa elementum odio eu viverra
                  amet.
                </p>

                <form action="#" className="max-w-xl mx-auto mt-10">
                  <div>
                    <label htmlFor="" className="sr-only">
                      {" "}
                      Search{" "}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Try Desk, Chair, Webcam etc..."
                        className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="
                                inline-flex
                                items-center
                                justify-center
                                w-full
                                px-6
                                py-4
                                text-sm
                                font-bold
                                tracking-widest
                                text-white
                                uppercase
                                transition-all
                                duration-200
                                bg-gray-800
                                border border-transparent
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white
                                hover:bg-gray-700
                            "
                    >
                      Search now
                    </button>
                  </div>
                </form>

                <div className="grid max-w-md grid-cols-2 mx-auto mt-8 md:mt-16 lg:mt-24 xl:mt-32 gap-x-6 grid-col-2">
                  <div>
                    <p className="text-4xl font-bold text-white">38,942</p>
                    <p className="mt-2 text-sm font-medium text-gray-300">
                      Order Delivered
                    </p>
                  </div>

                  <div>
                    <p className="text-4xl font-bold text-white">14,344</p>
                    <p className="mt-2 text-sm font-medium text-gray-300">
                      Registered Customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid">
          <Userview />
        </div>
        <div className="w-full">
          <div className="flex w-full gap-6 pb-8 mt-12 overflow-x-auto sm:mt-16 lg:mt-20 snap-x">
            <div className="relative snap-center scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
              <div className="overflow-hidden w-[300px] lg:w-[420px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                <div className="px-4 py-5 sm:p-5">
                  <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-1.png"
                        alt=""
                      />

                    <div className="flex-1 ml-4 lg:ml-6">
                      <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Growth
                          </p>
                      <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          How a visual artist redefines success in graphic
                          design
                          </p>
                      <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                        April 09, 2022
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
                        className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-2.png"
                        alt=""
                      />

                    <div className="flex-1 ml-4 lg:ml-6">
                      <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Growth
                          </p>
                      <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          How a visual artist redefines success in graphic
                          design
                          </p>
                      <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                        April 09, 2022
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
                        className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-3.png"
                        alt=""
                      />

                    <div className="flex-1 ml-4 lg:ml-6">
                      <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Growth
                          </p>
                      <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          How a visual artist redefines success in graphic
                          design
                          </p>
                      <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                        April 09, 2022
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
                        className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-4.png"
                        alt=""
                      />

                    <div className="flex-1 ml-4 lg:ml-6">
                      <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Growth
                          </p>
                      <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          How a visual artist redefines success in graphic
                          design
                          </p>
                      <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                        April 09, 2022
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
                        className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/thumbnail-5.png"
                        alt=""
                      />

                    <div className="flex-1 ml-4 lg:ml-6">
                      <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          Growth
                          </p>
                      <p className="mt-2 text-sm font-bold text-gray-900 lg:text-lg group-hover:text-gray-600">
                          How a visual artist redefines success in graphic
                          design
                          </p>
                      <p className="mt-2 text-xs font-medium text-gray-500 lg:text-sm">
                        April 09, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Postview />
        <div className="main-function py-4">
          {/* contents */}
          <div className="relative">
            <section className="overflow-hidden">
              <h2 className="text-blue-400 font-bold py-4">
                CONTROL WORK PERFOMANCE
              </h2>
              <p className="font-bold py-5">
                With our products you can provide better perfomance
              </p>
              <div className="flex flex-col lg:flex-row lg:items-stretch">
                <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                  <div className="h-full px-4 sm:px-6 lg:px-24 lg:pt-20 lg:pb-14">
                    <div className="flex flex-col justify-between flex-1 h-full">
                      <div>
                        <h2 className="text-xl text-blue-300">WHY ?</h2>

                        <h2 className="text font-sm">
                          Through collaboration perse perspectives and strengths
                          are leveraged to create inclusive web with more
                          leverage to help environments to hangle challenges.
                        </h2>
                        <h2 className="font-light">
                          LD , We are happy to serve best Qualited Computer and
                          Its Cables and <br />
                          Headphone with great Beats and Preserve your Thought
                          and Encourage you in Work{" "}
                        </h2>
                        <b
                          className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400"
                          role="button"
                        >
                          Get started
                        </b>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
                  <div className="lg:absolute lg:bottom-0 lg:left-0">
                    <img
                      className="w-full p-8 object-cover"
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* end of contents */}
        </div>
      </div>
      <br />
    </>
  );
};

export default Dashboard;
