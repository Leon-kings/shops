import React from "react";
React;
import image from "../../../../../assets/images/best-laptop-brands-20230420-3-medium.jpg";
const Header = () => {
  return (
    <div className="w-full relative bg-gradient-to-b ">
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
                    Through collaboration perse perspectives and strengths are
                    leveraged to create inclusive web with more leverage to help
                    environments to hangle challenges.
                  </h2>
                  <h2 className="font-light">
                    LD , We are happy to serve best Qualited Computer and Its
                    Cables and <br />
                    Headphone with great Beats and Preserve your Thought and
                    Encourage you in Work{" "}
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
              <img className="w-full p-8 object-cover" src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Header;
