import React, { useState } from "react";
import NewC from "../../universal/about/NewC";
import { Link } from "react-router-dom";
import axios from "axios";
import FormInput from "../form/action/FormInput";

React;
export default function About() {
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
      alert('Oops sorry , There are some errors!')
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
      <div className="container">
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
                alt="LD"
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
                    <h2 className="title text-green-300 font-bold">MESSAGE</h2>
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
      </div>
      <br />
    </>
  );
}
