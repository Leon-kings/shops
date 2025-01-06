import React from "react";
import { Link } from "react-router-dom";
React;
const NewC = () => {
  return (
    <div>
      <section className="relative bg-white p-4">
        <h2 className="text-2xl py-3 font-bold tracking-tight text-blue-600">
          ABOUT
        </h2>
        <h3 className="p-3 font-bold">
          Look who we are and We Empower Other Young Generation.
        </h3>
        <h2 className="text-blue-400 font-bold py-4">EMPOWERING OTHERS</h2>
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className=" rounded-xl object-cover"
                  src="https://img.freepik.com/free-photo/young-attractive-girls-electronics-store-use-laptop-exhibition-concept-buying-gadgets_78826-3142.jpg"
                  alt="LD"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://media.istockphoto.com/id/1191418270/photo/3d-render-of-computer-shop.jpg?s=612x612&w=0&k=20&c=-uUx4m4IB7Lysqsm_JH4DGT0rKx4eVR2-4DTYZIKKis="
                alt="LD"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Empowering Each Other to Succeed
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Every project weve undertaken has been a collaborative
                    effort, where every person involved has left their mark.
                    Together, weve not only constructed buildings but also built
                    enduring connections that define our success story.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      3+
                    </h3>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      6+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                      2+
                    </h4>
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <button className="px-1.5 text-white text-sm font-medium leading-6">
                  <Link to={"/Dashboard"}>Read More</Link>
                </button>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewC;
