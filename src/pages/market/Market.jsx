import React, { useEffect, useState } from "react";
import Shop from "../../universal/marketPart/Shop";
import App from "../../components/cart/appliances/App";
import AppComputer from "../../components/cart/computer/App";
import image from "../../assets/images/young-man-showing-his-friend-information-from-his-notes.jpg";
React;
const Market = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="title"></div>
      <div className="container">
        <section className="py-10 bg-white sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold leading-tight text-blue-400 sm:text-2xl lg:text-xl">
                HOW IT WORKS ?
              </h2>
              <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                Computer Accessories · Computer Batteries · Acer · Asus · Dell ·
                HP · Toshiba · Computer Cables · Computer Connectors · Display
                Connectors · Ethernet Connectors .
              </p>
            </div>

            <div className="relative mt-12 lg:mt-20">
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                  alt=""
                />
              </div>

              <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <p className="text-xl font-semibold text-gray-700">1</p>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Create a free account
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <p className="text-xl font-semibold text-gray-700">2</p>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Select product 
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <p className="text-xl font-semibold text-gray-700">3</p>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Pay
                  </h3>
                  <p className="mt-4 text-base text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <div className="bg-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
          <h2 className="text-xl font-bold py-3 tracking-tight text-blue-400 ">
            STORE
          </h2>
          <p className="font-bold p-4">
            Enjoy in-store pickup, top deals, and expert same-day tech support.
          </p>
          <Shop />
        </div>
        <br />
        <div className="relative py-12 bg-white sm:py-16 lg:py-20">
          <div className="absolute inset-0">
            <img
              className="object-cover object-right w-full h-full lg:object-center"
              src={image}
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-opacity-40"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
              <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
                Find the best office accessories in one tap
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">
              Shop Newegg today for all of your gaming, PC & technology needs. Don&apos; t miss today&apos; s best electronics deals with fast shipping & great customer service!
              </p>
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
        <br />
        <div className="bg-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
          <App />
        </div>
        <br />
        <div className="bg-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
          <AppComputer />
        </div>
        <div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              ↑
            </button>
          )}
        </div>
      </div>
      <br />
    </>
  );
};

export default Market;
