import React from "react";
import { Disclosure } from "@headlessui/react";
React;
import { useEffect, useRef, useState } from "react";

export default function Fquestion(handler) {
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
  // Handler hook for when Outside click dropdown close
  let useClickOutside = () => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
    return domNode;
  };
  // Handler hook for when Outside click dropdown close End Code====>>

  const [videoOpen, setvideoOpen] = useState(false);

  let domNode = useClickOutside(() => {
    setvideoOpen(false);
  });

  const data = [

    {
      id: 2,
      question: "What methodologies are used?",
      answer: "Some common methodologies include Waterfall, Agile, Scrum, Lean, and Prototype. The best methodology depends on the company and team",
    },
    {
      id: 3,
      question: "What are the main activities in software development?",
      answer:
        "The main activities are specification, design and implementation, validation, and evolution",
    },
    {
      id: 4,
      question: "Do you offer technical support?",
      answer:
        "Yes, we do offer technical support for components.",
    },
    {
      id: 5,
      question: "Which Language do you offer?",
      answer:
        "Yes, we do offer javaScript [React + Nodejs and Nextjs] , PHP and JAVA.",
    },
    {
      id: 6,
      question: "What is Debugging?",
      answer:
        "Debugging is the process of identifying and resolving errors, or bugs, in a software system.",
    },
    {
      id: 7,
      question: "What are CASE Tools?",
      answer:
        "CASE stands for Computer-Aided Software Engineering. CASE tools are a set of automated software application programs, which are used to support, accelerate and smoothen the SDLC activities",
    },
    {
      id: 8,
      question: "What is Software Re-engineering?",
      answer:
        "Software re-engineering is the process of scanning, modifying, and reconfiguring a system in a new way.",
    },
    {
      id: 9,
      question: "What is Reverse Engineering?",
      answer:
        "Software Reverse Engineering is a process of recovering the design, requirement specifications, and functions of a product from an analysis of its code.",
    },
  ];

  return (
    <>
      <div className="title"></div>
      <div className="w-full py-5 bg-white md:w-full sm:w-full lg:w-full xl:w-full">
        <div className="flex flex-col items-center justify-center w-full p-8 mx-auto mt-4 text-center xl:px-0">
        <h2 className="text-blue-400 font-bold size-10 py-4">FAQ</h2>
          <p className="max-w-2xl py-4 text-lg leading-normal text-black lg:text-xl xl:text-xl dark:text-gray-300">
            Answer your customers possible questions here, it will increase the
            conversion rate as well as support or chat requests.
          </p>
        </div>

        <div className="container p-0 mx-auto xl:px-0">
          <div className="w-full max-w-2xl p-2 mx-auto bg-white rounded-2xl">
            <div>
              {data.map((item) => (
                <div className="mb-5" key={item.id}>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="flex items-center bg-white justify-between w-full px-4 py-4 text-lg text-left text-green-400 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-gray-800 dark:text-gray-200"
                          type="btn"
                        >
                          <h2 className="text-white">{item.question}</h2>
                          <svg
                            className={`w-5 h-5 text-amber-200 ${
                              !open ? "transform rotate-180" : ""
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 hover:bg-amber-100 rounded-2xl text-black dark:text-gray-300">
                          {item.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <br />
      <section className="w-full bg-white py-20 dark:bg-dark lg:py-[20px] md:w-full sm:w-full lg:w-full xl:w-full">
      <h2 className="text-blue-400 font-bold py-4">EXPLORE MORE</h2>
      <p className='font-medium p-4'>Don&apos; t miss today&apos; s best electronics deals !</p>
        <div ref={domNode} className="w-full">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div className="relative z-20 h-[300px] overflow-hidden rounded-lg md:h-[450px]">
                <div className="absolute left-0 top-0 h-full w-full">
                  <img
                    src="https://i.ibb.co/KbSwcWJ/image-01-1.jpg"
                    alt="......"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div
                  className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-opacity-90`}
                >
                  <a
                    onClick={() => setvideoOpen(true)}
                    className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary dark:bg-dark-2 dark:text-white md:h-[100px] md:w-[100px]"
                  >
                    <span className="absolute right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                    <svg
                      width="23"
                      height="27"
                      viewBox="0 0 23 27"
                      className="fill-current"
                    >
                      <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                    </svg>
                  </a>
                </div>

                <div>
                  <span className="absolute left-4 top-4 z-40">
                    <svg
                      width="50"
                      height="79"
                      viewBox="0 0 50 79"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="47.7119"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 47.7119 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="61.6385"
                        r="1.74121"
                        transform="rotate(180 47.7119 61.6385)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="46.3163"
                        r="1.74121"
                        transform="rotate(180 47.7119 46.3163)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="16.7159"
                        r="1.74121"
                        transform="rotate(180 47.7119 16.7159)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="31.3421"
                        r="1.74121"
                        transform="rotate(180 47.7119 31.3421)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 47.7119 1.74121)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 32.3916 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 32.3877 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 32.3916 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 32.3916 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 32.3877 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 32.3916 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 17.0674 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 17.0674 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 17.0674 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 17.0674 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 17.0674 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 17.0674 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 1.74316 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 1.74316 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 1.74316 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 1.74316 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 1.74316 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 1.74316 1.74145)"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="absolute bottom-4 right-4 z-40">
                    <svg
                      width="50"
                      height="79"
                      viewBox="0 0 50 79"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="47.7119"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 47.7119 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="61.6385"
                        r="1.74121"
                        transform="rotate(180 47.7119 61.6385)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="46.3163"
                        r="1.74121"
                        transform="rotate(180 47.7119 46.3163)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="16.7159"
                        r="1.74121"
                        transform="rotate(180 47.7119 16.7159)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="31.3421"
                        r="1.74121"
                        transform="rotate(180 47.7119 31.3421)"
                        fill="white"
                      />
                      <circle
                        cx="47.7119"
                        cy="1.74121"
                        r="1.74121"
                        transform="rotate(180 47.7119 1.74121)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 32.3916 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 32.3877 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 32.3916 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 32.3916 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="32.3877"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 32.3877 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="32.3916"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 32.3916 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 17.0674 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 17.0674 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 17.0674 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 17.0674 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 17.0674 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="17.0674"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 17.0674 1.74145)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="76.9617"
                        r="1.74121"
                        transform="rotate(180 1.74316 76.9617)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="61.6384"
                        r="1.74121"
                        transform="rotate(180 1.74316 61.6384)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="46.3162"
                        r="1.74121"
                        transform="rotate(180 1.74316 46.3162)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="16.7161"
                        r="1.74121"
                        transform="rotate(180 1.74316 16.7161)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="31.342"
                        r="1.74121"
                        transform="rotate(180 1.74316 31.342)"
                        fill="white"
                      />
                      <circle
                        cx="1.74316"
                        cy="1.74145"
                        r="1.74121"
                        transform="rotate(180 1.74316 1.74145)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {videoOpen && (
          <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70">
            <div className="mx-auto w-full bg-white">
              <>
                <iframe
                  className="h-[320px] w-full"
                  src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
                />
              </>
            </div>

            <button
              onClick={() => setvideoOpen(false)}
              className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
            >
              <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
                <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
              </svg>
            </button>
          </div>
        )}
      </section>
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
    </>
  );
}
