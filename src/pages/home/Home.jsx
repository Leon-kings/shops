import React, { useEffect, useState } from "react";
import Head from "../../universal/head/Head";
import Header from "../../universal/header/Header";
import Package from "../../universal/packages/Package";
import Product from "../products/Product";
import Fquestion from "../fquestion/Fquestion";
import About from "../about/About";
import Services from "../services/Services";
import Testimony from "../testimony/Testimony";
import IT from "../information/IT";
import WhyUs from "../../universal/whyus/WhyUs";
import { BiLogIn } from "react-icons/bi";
import { BsInfo, BsQuestion } from "react-icons/bs";
import { TbSettingsExclamation } from "react-icons/tb";
import { Link } from "react-router-dom";
import NewTool from "../../universal/products/3d";
import Show from "../../universal/sliderproducts/Sslider";
import BlogP from "../products/BloggerProduct";
import Card from "../category/Products";

React;
const Home = () => {
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
      {/* Body space */}
      <div className="w-full">
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="w-full">
            <div className="w-full" id="top">
              <Header />
            </div>
          </div>
        </div>
        {/* end of Header part */}
        {/*  */}
        {/* head components start*/}
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="main">
            <div className="main">
              <Head />
            </div>
          </div>
        </div>
        {/*  */}
        {/* Card components start*/}
        <div className="head w-full lg:w-full xl:w-full">
          <div className="main">
            <div className="main">
              <Card />
            </div>
          </div>
        </div>
        {/* Card components ends */}
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="heading">
            <div className="header">
              <Product />
            </div>
          </div>
        </div>
        {/* end of head */}
        {/*  */}
        {/*  */}
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="main">
            <div className="main ">
              <Package />
            </div>
          </div>
        </div>
        <div className="head w-full lg:w-full xl:w-full" id="fQ">
          {/* Header Video components*/}
          <div className="main">
            <div className="main ">
              <Fquestion />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="main">
            <div className="main ">
              <Testimony />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="head lg:w-full xl:w-full" id="about">
          {/* Header Video components*/}
          <div className="main">
            <div className="main ">
              <About />
            </div>
          </div>
        </div>
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="main">
            <div className="main ">
              <WhyUs />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="main">
            <div className="main ">
              <IT />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="head lg:w-full xl:w-full" id="service">
          {/* Header Video components*/}
          <div className="header">
            <div className="header">
              <Services />
            </div>
          </div>
        </div>
        <br />
        <div className="head lg:w-full xl:w-full" >
          {/* Header Video components*/}
          <div className="header">
            <div className="header">
              <NewTool />
            </div>
          </div>
        </div>
        <br />
        <div className="head lg:w-full xl:w-full" >
          {/* Header Video components*/}
          <div className="header">
            <div className="header">
              <Show />
            </div>
          </div>
        </div>
        <br />
        <div className="head lg:w-full xl:w-full">
          {/* Header Video components*/}
          <div className="header">
            <div className="header">
              <BlogP />
            </div>
          </div>
        </div>
        {/* button back to top */}

        <div className="head lg:w-full xl:w-full">
          <div>
            <br />
            {isVisible && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
               &#8593;
              </button>
            )}
          </div>

          {/* back to tops */}
          <div className="grid bg-white py-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
            <div className="bg-blue-200 text-white p-4 text-center">
              {" "}
              <Link to={"/Register"}>
                <button>
                  <BiLogIn />{" "}
                </button>{" "}
              </Link>
            </div>
            <div className="bg-green-200 text-white p-4 text-center">
              <a href="#service" title="Services">
                <button>
                  <TbSettingsExclamation />{" "}
                </button>{" "}
              </a>
            </div>
            <div className="bg-red-200 text-white p-4 text-center">
              <a href="#fQ" title="Question">
                <button>
                  <BsQuestion />{" "}
                </button>{" "}
              </a>
            </div>
            <div className="bg-yellow-200 text-white p-4 text-center">
              <a href="#about" title="About">
                <button>
                  <BsInfo />{" "}
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
