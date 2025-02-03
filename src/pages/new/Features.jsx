import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shop from "../../universal/marketPart/Shop";
import BlogP from "../products/BloggerProduct";
import image from "../../assets/images/1717742431.png";
import side from "../../assets/images/best-laptop-brands-20230420-3-medium.jpg";
import side1 from "../../assets/images/edifier-g5btcat-pink-1_bbf9a39e-dbac-4fb5-8a63-d9afa1210342.webp";
import side2 from "../../assets/images/GW54.0026-1-518x518.jpg";
import side3 from "../../assets/images/Watches-PCD_CO15_Sleep-Coaching_MO.webp";
import side4 from "../../assets/images/SEI_156640666.webp";
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
        <section className="py-24 bg-white relative xl:mr-0 lg:mr-0 mr-0 w-full xl:w-full lg:w-full">
          <h2 className="text-2xl py-3 font-bold  text-blue-600">FEATURES</h2>
          <p className="font-bold">
            Discover a wide selection of the latest laptops from top brands.
            Whether for work, gaming, or daily use, <br />
            find the perfect laptop that fits your needs
          </p>
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
                    src={image}
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
        <section className="relative py-12 bg-white sm:py-16 lg:py-20">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Helping developers to get their dream job
              </h3>
              <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">
                Kigali&apos; s top tech store, shop from us and enjoy the best
                services ... Computer. Computers. Dell. Desktops. Earbuds. Elite
                Book. Hardware.
              </p>

              <ul className="flex items-center justify-center mt-6 space-x-6 sm:space-x-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-xs font-bold text-gray-900 sm:text-sm">
                    Products
                  </p>
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-xs font-bold text-gray-900 sm:text-sm">
                    Join other 160+
                  </p>
                </li>
              </ul>
            </div>
          </div>

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
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
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
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
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
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
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
                      className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
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
        </section>
        <br />
        <BlogP />
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
                    fosters personal New Feature and achievement but also
                    strengthens the fabric of society.
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
                alt=""
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
        <div className="bg-white py-24 sm:py-32 w-full">
          <div className="mx-auto grid w-full gap-20 px-6 lg:px-8 lg:w-full xl:grid-cols-2">
            <div className="w-full">
              <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Meet Our Products
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </p>
            </div>
            <div className="w-full">
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 lg:grid-cols-3 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {people.map((person) => (
                  <li key={person.index}>
                    <div className="flex grid-cols-3 items-center gap-x-6">
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

export default Features;
