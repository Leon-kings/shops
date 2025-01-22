import React from "react";
import Sidebar from "./components/sidebar/Side";
import Postview from "./components/postview/Postview";
import CreateMessage from "./components/message/CreateMessage";
import Messageview from "./components/messageview/Messageview";
import CreateTestimony from "./components/testmony/Testimony";
import Userview from "./components/userview/Userview";

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
            <CreateMessage/>
          </div>
          <div className="main">
            <Messageview/>
          </div>
          <div className="main">
            <CreateTestimony/>
          </div>
        </div>
        <div className="grid">
          <Userview/>
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
      </div>
      <br />
    </>
  );
};

export default Dashboard;
