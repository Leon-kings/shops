import React, { useEffect, useState } from "react";
React;
import {
  FingerPrintIcon,
  ShoppingCartIcon,
  ServerIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/images/young-man-showing-his-friend-information-from-his-notes.jpg";
import { Link } from "react-router-dom";
import macbook from '../../assets/images/macbook-pro.avif'
import side1 from '../../assets/images/postdp-hero03.jpg.large.2x.jpg'
import side2 from '../../assets/images/student-with-laptop.jpg'
import side3 from '../../assets/images/best-laptop-brands-20230420-3-medium.jpg'
import side4 from '../../assets/images/laptopwok.jpg'
const features = [
  {
    name: "Bought Products",
    description:
      "LD Computer Store Rwanda Limited is a Full-Service Technology Services Provider also called the Top IT Consulting Company in Kigali, Rwanda.",
    icon: ShoppingCartIcon,
  },
  {
    name: "Code Support",
    description:
      "We also provide guidance and Debugging for ReactJs , NodeJs , NextJs codes to debug the buggers.",
    icon: CodeBracketIcon,
  },
  {
    name: "IT Support",
    description: "We also help developer to develop best responsive web",
    icon: ServerIcon,
  },
  {
    name: "Advanced Security",
    description:
      "We Maintain Your Computer With Secure Means and Replace with Proper Accessories ",
    icon: FingerPrintIcon,
  },
];

export default function Services() {
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
      <section className="py-12 w-full bg-white sm:py-16 lg:py-10 w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="px-4 mx-auto w-full sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold leading-tight text-blue-400 sm:text-xl xl:text-xl font-pj">
              OUR SERVICES
            </h2>
            <p className="mt-4 text-base font-bold leading-7 text-gray-600 sm:mt-8 font-pj">
              We&apos; re Happy To Help Society To Advance Means Of Life With
              Better Computers for Gaming , Coding and etc .{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Support
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We provide Support of Better Computers for Future IT and future
                Software Developers
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <svg
                className="mx-auto"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 27H19V45H27V27Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 37H1V45H9V37Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45 17H37V45H45V17Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 17L15 7L23 15L37 1"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 1H37V10"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Sales
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We Sell Gaming PCs , Coding PCs , Personal PCs , HeadSets ,
                Headphones [Cables / non Cabled].
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
              <svg
                className="mx-auto"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 1H1V41H41V1Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7H7V20H18V7Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 26H7V35H18V26Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 7H24V35H35V7Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Onboarding
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                We also provide guidance and Debugging for ReactJs , NodeJs ,
                NextJs codes to debug the buggers..
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
              <svg
                className="mx-auto"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                  fill="#D4D4D8"
                />
                <path
                  d="M9 9H33"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 17H33"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 25H13V31H29V25H41"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Product Labels
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Macbook , HP , Lenovo ,Beats ,...
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <svg
                className="mx-auto"
                width="46"
                height="42"
                viewBox="0 0 46 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Quality
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Better Quality We Serve.
              </p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
              <svg
                className="mx-auto"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
                  fill="#D4D4D8"
                  stroke="#161616"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
                Result
              </h3>
              <p className="mt-5 text-base text-gray-600 font-pj">
                Feedback is good.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* new section */}
      <br />
      {/* start */}
      <section className="relative bg-gray-900 w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white"></div>
        </div>

        <div className="relative mx-auto w-full lg:grid sm:grid-cols-1 lg:grid-cols-2">
          <div className="flex items-end px-4 pb-16 bg-white pt-28 sm:px-6 lg:px-8 lg:pb-24 xl:pr-12">
            <div className="w-full mx-auto lg:mx-0">
              <p className="text-5xl sm:text-6xl lg:text-7xl">
                <img src={logo} alt="" className="w-full" />
              </p>
              <h1 className="mt-10 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Electronics Store: Tech, PC Parts
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-500">
                Shop LD Center for electronics, PCs, laptops, Apple products,
                and much more. Enjoy in-store pickup, top deals, and expert
                same-day tech support.
              </p>
              <div className="relative inline-flex mt-10 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <Link to={"/Market"}>
                  <button className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Read Exclusive Post
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex items-end px-4 py-16 bg-gray-900 sm:px-6 lg:pb-24 lg:px-8 xl:pl-12">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <p className="text-lg font-bold text-white">Featured Post</p>

              <div className="mt-6 space-y-5">
                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cover"
                        src={side4}
                        alt=""
                      />
                      <div className="flex-1 ml-4 lg:ml-6">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          PC
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

                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                  
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                          src={side1}
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
                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
            
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                          src={side2}
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
                <div className="overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
               
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-30 rounded-xl object-cvoer"
                          src={side3}
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
        </div>
      </section>
      <br />
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <img
                className="w-full max-w-md mx-auto object-cover"
                src={macbook}
                alt=""
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Grow Bussiness Ideas With Better Computers.
              </h2>
              <p className="mt-6 text-base text-gray-600">
                LD , We are happy to serve best Qualited Computer and Its Cables
                and Headphone with great Beats and Preserve your Thought and
                Encourage you in Work .We Also bring you Delivery System , Where
                we could bring you what you Ordered.
              </p>
              <h2 className="font-bold p-4 text-blue-400">OUR STORY </h2>
              <p>
                {" "}
                Our achievement story is a testament to teamwork and
                perseverance. Together, we have overcome challenges, celebrated
                victories, and created a narrative of progress and success.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="bg-white xl:w-full lg:w-full md:w-full xl:mr-0 lg:mr-0 sm:mr-0 md:mr-0 mr-0 p-8">
        <div className="mx-auto py-12 w-full xl:w-full ">
          <h2 className="text-blue-400 font-bold py-6">EMPOWERING OTHERS</h2>
          <p className="font-bold p-4">
            We Glad To support and guide with best Quality Services.
          </p>
          <br />
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      {/*  */}
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
      <br />
      {/*  */}
    </>
  );
}
