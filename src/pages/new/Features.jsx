import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shop from "../../universal/marketPart/Shop";
import BlogP from "../products/BloggerProduct";
React;
const Features = () => {
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
  const people = [
    {

      imageUrl:
        "https://www.lawdonut.co.uk/business/sites/lawdonut-business/files/production/image/computershop_0.jpg",
    },
    {

      imageUrl:
        "https://i0.wp.com/pctechmag.com/wp-content/uploads/2018/06/buying-laptop.jpg?fit=640%2C360&ssl=1",
    },
    {

      imageUrl:
        "https://img.freepik.com/free-photo/young-attractive-girl-electronics-store-stands-desk-tests-phone_78826-3427.jpg",
    },
    {

      imageUrl:
        "https://img.freepik.com/free-photo/portrait-relaxed-freelance-worker-listening-music-headphones-working-with-laptop-portrait-young-specialists-international-corporation-spending-time-light-cozy-office_197531-3785.jpg",
    },
    {

      imageUrl:
        "https://img.freepik.com/free-photo/romantic-african-woman-with-trendy-hairstyle-sitting-her-workplace-analysing-data-indoor-portrait-black-female-student-working-with-laptop-before-exam_197531-3782.jpg",
    },
    {

      imageUrl:
        "https://img.kentfaith.com/cache/catalog/products/us/GW54.0026/GW54.0026-1-518x518.jpg",
    },
  ];
  return (
    <>
      <div className="title"></div>
      <div className=" w-full">
        <br />
        <section className="py-24 bg-white relative xl:mr-0 lg:mr-0 mr-0 w-full xl:w-full lg:w-full">
          <h2 className="text-2xl py-3 font-bold tracking-tight text-blue-600">
            FEATURES
          </h2>
          <h2 className="text-blue-400 font-bold py-4">EMPOWERING OTHERS</h2>
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        The Tale of Our Achievement Story
                      </h2>
                      <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                        Our achievement story is a testament to teamwork and
                        perseverance. Together, we have overcome challenges,
                        celebrated victories, and created a narrative of
                        progress and success.
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex-col justify-center items-start gap-6 flex">
                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          3+ Years
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Influencing Digital Landscapes Together
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          5+ Projects
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Excellence Achieved Through Success
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                      <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          2+ Awards
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Our Dedication to Innovation Wins Understanding
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          99% Happy Clients
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Mirrors our Focus on Client Satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                  <button className="px-1.5  text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                    <Link to={"/"}>Read More</Link>
                  </button>
                  <b className="text-green-400">
                    <svg
                      className="group-hover:translate-x-0.5 text-green-400 transition-all duration-700 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                        stroke="#4F46E5"
                        className="text-green-400"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </b>
                </button>
              </div>
              <div className="w-full lg:justify-start justify-center items-start flex">
                <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                  <img
                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                    src="https://pagedone.io/asset/uploads/1717742431.png"
                    alt="LD"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        <br />
        <BlogP/>
         <br />
        <section className="py-24 relative w-full bg-white xl:w-full">
          <h2 className="text-blue-400 font-bold py-4">BUILD YOUR NETWORK</h2>
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Building Stronger Communities through Collaboration and
                    Empowerment
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Through collaboration perse perspectives and strengths are
                    leveraged to create inclusive environments where everyone
                    has the opportunity to thrive. This approach not only
                    fosters personal growth and achievement but also strengthens
                    the fabric of society.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <p className="px-1.5 text-white text-sm font-medium leading-6">
                    <Link to={"/"}>
                      <button className="text-white">Get Started</button>
                    </Link>
                  </p>
                </button>
              </div>
              <img
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717751272.png"
                alt="LD"
              />
            </div>
          </div>
        </section>
        <br />
        {/*  */}
        <div className="w-full xl:w-full sm:w-full bg-white">
          <h2 className="text-blue-400 font-bold py-4">
            WHAT WE HAVE IN THE STORE
          </h2>
          <p className="p-4">We happy to serve you better Accessories</p>
          <Shop />
        </div>
        <br />
        {/*  */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-xl">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Meet Our Products
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      alt=""
                      src={person.imageUrl}
                      className="w-full rounded-sm"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
        <br />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          ↑
        </button>
      )}
      </div>
        {/*  */}
      </div>
      <br />
    </>
  );
};

export default Features;
