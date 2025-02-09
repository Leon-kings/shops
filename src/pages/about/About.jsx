import React, { useEffect, useState } from "react";
import NewC from "../../universal/about/NewC";
import { Link } from "react-router-dom";
import axios from "axios";
import FormInput from "../form/action/FormInput";
import image from "../../assets/images/356202168_1515581109215839_7191836832866658358_n.jpg";

React;
export default function About() {
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
  // form data
  const [values, setValues] = useState({
    email: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "Email",
      required: true,
    },

    {
      id: 2,
      name: "message",
      type: "message",
      placeholder: "message",
      errorMessage: "message needed",
      label: "Message",

      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      await axios.post("https://shopsnodejs.onrender.com/messages", values);
      alert("Message received");
    } catch (err) {
      console.log(err);
      alert("Oops sorry , There are some errors!");
      if (err.response && err.response.status === 401) {
        alert("Invalid credentials. Please try again.");
      }
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  //

  return (
    <>
      <div className="title"></div>
      <div className="w-full">
        <section className="pt-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          <h2 className="text-2xl py-3 font-bold tracking-tight text-blue-600">
            ABOUT
          </h2>
          <p className="p-4 font-medium ">
            {" "}
            We are <b className="text-blue-500">LD</b> . Together, weve not only
            constructed buildings but also built enduring connections that
            define our success story
          </p>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
              <div className="self-center lg:col-span-4">
                <h2 className="text-xl font-bold text-gray-900 sm:text-4xl xl:text-3xl">
                  LD
                </h2>
                <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                  LD Computer Store Rwanda Limited is a Full-Service Technology
                  Services Provider also called the Top IT Consulting Company in
                  Kigali, Rwanda.
                </p>
                <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                  Leon is happy to Serve you Your Favourite Computers. Choose
                  the Best PC and Also If You want to Buy Your repairment Kits.
                </p>
                <div className="relative inline-flex mt-9 group">
                  <Link to={"/Market"}>
                    <button>BUY NOW</button>
                  </Link>
                </div>
              </div>

              <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
                <p className="text-lg font-bold tracking-widest text-gray-500 uppercase">
                  ⚡️ Latest Picks
                </p>

                <div className="mt-6 space-y-6 lg:space-y-8">
                  <div className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-22 h-18 rounded-lg shrink-0"
                        src="https://www.hp.com/gb-en/shop/Html/Merch/Images/c09014144_390x286.jpg"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        Windows 11 Home in S modeAMD Ryzen™ 3 7320U8 GB RAM256
                        GB SSD14 FHD
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-22 h-18 rounded-lg shrink-0"
                        src="https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1024"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        8GB unified memory 256GB SSD storage 13-inch Retina
                        display with True Tone Touch Bar and Touch ID
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="flex items-start lg:items-center">
                      <img
                        className="object-cover w-22 h-18 rounded-lg shrink-0"
                        src="https://i.ebayimg.com/images/g/6iIAAOSw13ZlvUkz/s-l1200.jpg"
                        alt=""
                      />
                      <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                        Beats Studio Pro Wireless Bluetooth Noise Cancelling
                        Headphones - Excellent
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-end lg:col-span-5">
                <img className="w-full object-cover p-5" src={image} alt="" />
              </div>
            </div>
          </div>
        </section>
        <br />
        {/*  */}
        <NewC />
        <br />
        <section className="py-24 relative bg-white ">
          <h2 className="text-blue-400 font-bold py-4">BUILD YOUR NETWORK</h2>
          <br />
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Building Stronger Communities through Collaboration and
                    Empowerment
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Through collaborationperse perspectives and strengths are
                    leveraged to create inclusive environments where everyone
                    has the opportunity to thrive. This approach not only
                    fosters personal growth and achievement but also strengthens
                    the fabric of society.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <button className="px-1.5 text-white text-sm font-medium leading-6">
                    <Link to={"/Market"}>Get Started</Link>
                  </button>
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
        {/*  */}
        {/*  */}
        <br />
        {/* form pages */}
        <section className="py-24 relative w-full xl:w-full bg-white md:w-full sm:w-full">
          <h2 className="text-blue-400 font-bold py-6">
            MESSAGE US TO ASSIST YOU
          </h2>
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Building Smartness Web
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Through collaboration perse perspectives and strengths are
                    leveraged to create inclusive web with more leverage to help
                    environments to hangle challenges.
                  </p>
                </div>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <button className="px-1.5 text-white text-sm font-medium leading-6">
                    <Link to={"/Market"}>Get Started</Link>
                  </button>
                </button>
              </div>
              {/*  */}
              <div className="container flex items-center justify-center min-h-screen bg-gray-100 text-black">
                <div className="w-full max-w-md p-3 lg:p-8 xl:p-8 bg-white rounded shadow-md">
                  <form onSubmit={handleSubmit} className="mt-4">
                    <h2 className="title text-blue-400 font-bold">MESSAGE</h2>
                    <div className="p-0">
                      {inputs.map((input) => (
                        <FormInput
                          key={input.id}
                          className="p-3 w-full"
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                        />
                      ))}
                      <div className="head">
                        <button className="w-30 bg-blue-200">Send </button>
                        <p className="p-4">
                          If you don`t have an account
                          <Link to="/Register">
                            <b>
                              <button className="p-3 bg-blue-500">
                                Register
                              </button>
                            </b>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
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
      </div>
      <br />
    </>
  );
}
