import React, { useState } from "react";
import NewC from "../../universal/about/NewC";
import { Link, useNavigate } from "react-router-dom";
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
      errorMessage:
        "passworx should be 8-12 characters include at least 1 letter and 1 symbol",
      label: "Message",

      required: true,
    },
  ];
  const Navigate = useNavigate();
  // fetching data from database
  // handleSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      await axios.post(
        "https://backendproject-8m9r.onrender.com/users/auth",
        values
      );
      if (window.confirm("Do you really want to move?")) {
        Navigate("/833 103.803C182.209 103");
      } else {
        Navigate("/");
      }
    } catch (err) {
      console.log(err);

      if (err.response && err.response.status === 401) {
        alert("Invalid credentials. Please try again.");
      } else {
        alert("An error occurred. Please try again later.");
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
      <div className="bg-white">
        {/*  */}
        <NewC />
        <section className="py-24 relative">
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

        {/* form pages */}
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Building Smartness
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
                  <button className="px-1.5 text-white text-sm font-medium leading-6">
                    <Link to={"/Market"}>Get Started</Link>
                  </button>
                </button>
              </div>
              {/*  */}
              <div className="container flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                  <form onSubmit={handleSubmit} className="mt-4">
                    <h2 className="title">Message</h2>
                    <div className="container lg:">
                      {inputs.map((input) => (
                        <FormInput
                          key={input.id}
                          className="p-3"
                          {...input}
                          value={values[input.name]}
                          onChange={onChange}
                        />
                      ))}
                      <div className="head">
                        <button className="w-30 bg-blue-200">Submit</button>
                        <p className="p-4">
                          If you don`t have an account
                          <Link to="/Register">
                            <b>
                              <button className="p-3 bg-blue-500">
                                {" "}
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

              {/*  */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
