import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../pages/form/action/FormInput";
React;
export default function CheckOut() {
  const [values, setValues] = useState({
    email: "",
    card: "",
    fullname: "",
    phone: "",
    frw:""
  });
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Names",
      errorMessage: "Names needed ",
      label: "Your Names",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "+250787944577",
      errorMessage: "Phone should start with country code +250",
      label: "Telephone",
      required: true,
    },

    {
      id: 4,
      name: "card",
      type: "card",
      placeholder: "1234 - 2345 - 2345 - 23",
      errorMessage:
        "card should be 8-16 characters",
      label: "Card-Numbers",
      required: true,
    },
    {
      id: 5,
      name: "frw",
      type: "text",
      placeholder: " 1234 $",
      errorMessage:
        "Currency should be in $",
      label: "Money - Paid",
      required: true,
    },
  ];

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post("", values);
      if (window.confirm("Do you really want to continue to login?")) {
        Navigate("/login");
      } else {
        Navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
    <div>
      <div className="title"></div>
      <div className="font-sans bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
              Checkout
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-300">01</h3>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">
                    Personal Details
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <form>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {inputs.map((input) => (
                        <FormInput
                          key={input.id}
                          className="p-3"
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-end gap-4 mt-12">
              <button
                  type="button"
                  className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Pay now
                </button> 

              </div>
                  </form>
                </div>
              </div>

              <h2 className="text-xl text-black">
                    Secured & safe online payment
                  </h2>
            </div>
          </form>
        </div>
      </div>
      <br />
      {/* new section */}
      <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
        <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
          <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
            <img
              className="hidden w-full lg:block"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png"
              alt=""
            />
            <img
              className="block w-full lg:hidden"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png"
              alt=""
            />
          </div>

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="text-4xl font-bold sm:text-6xl">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                  {" "}
                  Simplified credit cards for students{" "}
                </h2>
              </h1>
              <h4 className="mt-5 text-base text-white sm:text-xl">
                No more hassle taking loans and making payments. Try Postcrats
                credit card, make your life simple.
              </h4>
              
              <h5 className="text-white py-10">When choosing a computer for coding, you can consider things like the amount of RAM, 
                the screen size, and the processor. <br /> You can also consider whether you want a laptop 
                or a more compact device.</h5>
              <button
                href="#"
                title=""
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                BUY YOURS
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              <div className="grid grid-cols-1 px-20 mt-12 text-left gap-x-12 gap-y-8 sm:grid-cols-3 sm:px-0">
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0"
                    width="31"
                    height="25"
                    viewBox="0 0 31 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.1667 14.187H20.3333C17.6637 14.187 15.5 16.3507 15.5 19.0203V19.8258C15.5 19.8258 18.0174 20.6314 22.75 20.6314C27.4826 20.6314 30 19.8258 30 19.8258V19.0203C30 16.3507 27.8363 14.187 25.1667 14.187Z"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.7227 6.9369C18.7227 4.71276 20.5263 2.90912 22.7504 2.90912C24.9746 2.90912 26.7782 4.71276 26.7782 6.9369C26.7782 9.16104 24.9746 11.7702 22.7504 11.7702C20.5263 11.7702 18.7227 9.16104 18.7227 6.9369Z"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.2231 15.8512H7.11157C3.73595 15.8512 1 18.5871 1 21.9628V22.9814C1 22.9814 4.18311 24 10.1674 24C16.1516 24 19.3347 22.9814 19.3347 22.9814V21.9628C19.3347 18.5871 16.5988 15.8512 13.2231 15.8512Z"
                      fill="#0B1715"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.07422 6.68386C5.07422 3.87152 7.35485 1.59088 10.1672 1.59088C12.9795 1.59088 15.2602 3.87152 15.2602 6.68386C15.2602 9.4962 12.9795 12.7954 10.1672 12.7954C7.35485 12.7954 5.07422 9.4962 5.07422 6.68386Z"
                      fill="#0B1715"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-white">
                    Over 12,000 Users View
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.8335 21.9166H3.16683C2.6143 21.9166 2.08439 21.6972 1.69369 21.3065C1.30299 20.9158 1.0835 20.3858 1.0835 19.8333V3.16665C1.0835 2.61411 1.30299 2.08421 1.69369 1.69351C2.08439 1.30281 2.6143 1.08331 3.16683 1.08331H19.8335C20.386 1.08331 20.9159 1.30281 21.3066 1.69351C21.6973 2.08421 21.9168 2.61411 21.9168 3.16665V19.8333C21.9168 20.3858 21.6973 20.9158 21.3066 21.3065C20.9159 21.6972 20.386 21.9166 19.8335 21.9166Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 12.6667L9.25 15L16 8"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-white">
                    No yearly charges, maximum limits
                  </p>
                </div>

                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0"
                    width="20"
                    height="24"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 11H3C1.89543 11 1 11.8954 1 13V21C1 22.1046 1.89543 23 3 23H17C18.1046 23 19 22.1046 19 21V13C19 11.8954 18.1046 11 17 11Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 19C11.1046 19 12 18.1046 12 17C12 15.8954 11.1046 15 10 15C8.89543 15 8 15.8954 8 17C8 18.1046 8.89543 19 10 19Z"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 7V6C15.0131 4.68724 14.5042 3.42303 13.5853 2.48539C12.6664 1.54776 11.4128 1.01346 10.1 1H10C8.68724 0.986939 7.42303 1.4958 6.48539 2.41469C5.54776 3.33357 5.01346 4.58724 5 5.9V7"
                      stroke="#28CC9D"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-white">
                    Security Issues, maximum limits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <br />
    </>
  );
}
