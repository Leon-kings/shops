import React, { useEffect, useState } from "react";
import Shop from "../../universal/marketPart/Shop";
import App from "../../components/cart/appliances/App";
import AppComputer from "../../components/cart/computer/App";
import image from '../../assets/images/young-man-showing-his-friend-information-from-his-notes.jpg' 
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
      <div className="bg-white w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <h2 className="text-2xl font-bold py-3 tracking-tight text-blue-600 ">
          SHOP
        </h2>
        <Shop />
        </div>
        <br />
        <div className="relative py-12 bg-white sm:py-16 lg:py-20">
        <div className="absolute inset-0">
            <img className="object-cover object-right w-full h-full lg:object-center" src={image} alt="" />
        </div>

        <div className="absolute inset-0 bg-opacity-40"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-lg mx-auto text-center xl:max-w-2xl">
                <h1 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">Find the best office accessories in one tap</h1>
                <p className="max-w-lg mx-auto mt-6 text-base font-normal leading-7 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nisl eu consectetur. Mi massa elementum odio eu viverra amet.</p>

                <form action="#" className="max-w-xl mx-auto mt-10">
                    <div>
                        <label htmlFor="" className="sr-only"> Search </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input type="text" name="" id="" placeholder="Try Desk, Chair, Webcam etc..." className="block w-full py-3 pl-10 pr-4 text-base font-normal leading-7 text-gray-900 placeholder-gray-500 bg-white border border-white focus:ring-white focus:border-white focus:ring-offset-2" />
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
                        <p className="mt-2 text-sm font-medium text-gray-300">Order Delivered</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold text-white">14,344</p>
                        <p className="mt-2 text-sm font-medium text-gray-300">Registered Customers</p>
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
