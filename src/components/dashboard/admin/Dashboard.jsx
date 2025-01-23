import React from "react";
import Sidebar from "./components/sidebar/Side";
import Postview from "./components/postview/Postview";
import CreateMessage from "./components/message/CreateMessage";
import Messageview from "./components/messageview/Messageview";
import CreateTestimony from "./components/testmony/Testimony";
import Userview from "./components/userview/Userview";
import image from "../../../assets/images/best-laptop-brands-20230420-3-medium.jpg";
React;
const Dashboard = () => {
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
  return (
    <>
      <div className="title"></div>
      <div className=" w-full bg-white md:w-full lg:w-full xl:w-full">
        <h3 className="text-center py-5 text-blue-400 font-bold">DASHBOARD</h3>
        <Sidebar />
        <br />
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3">
          <div className="main">
            <CreateMessage />
          </div>
          <div className="main">
            <Messageview />
          </div>
          <div className="main">
            <CreateTestimony />
          </div>
        </div>
        <div className="grid">
          <Userview />
        </div>
        <main className="bg-indigo-300 rounded-lg shadow-lg mt-10 py-20">
          <section className=" justify-between items-center p-10 ">
            <div className="space-y-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-6">
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
