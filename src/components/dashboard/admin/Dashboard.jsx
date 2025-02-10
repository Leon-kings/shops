import React from "react";
import Sidebar from "./components/sidebar/Side";
import Postview from "./components/postview/Postview";

import image from "../../../assets/images/best-laptop-brands-20230420-3-medium.jpg";
import side from "../../../assets/images/Watches-PCD_CO15_Sleep-Coaching_MO.webp";
import side1 from "../../../assets/images/student-with-laptop.jpg";
import side2 from "../../../assets/images/romantic-african-woman-with-trendy-hairstyle-sitting-her-workplace-analysing-data-indoor-portrait-black-female-student-working-with-laptop-before-exam_197531-3782.avif";
import side3 from "../../../assets/images/programmer-people-working-laptops-smartphones-600nw-2473384115.webp";
import side4 from "../../../assets/images/postdp-hero03.jpg.large.2x.jpg";

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
                        Rwanda&lsquo; s Shop for mobiles, Electronics, perfumes,
                        Laptops.
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
                        Buy genuine products at the best prices. Apple, Samsung,
                        HP.
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
                        Razer BlackShark V2 X Gaming Headset: 7.1 Surround Sound
                        - 50mm.
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
                        Shop through a wide selection of Smart Watches with Free
                        shipping .
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
                        Navigation, 3.53 cm HD Display & BT Calling Smartwatch.
                        82%.
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
