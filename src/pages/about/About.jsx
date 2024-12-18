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
  const data = [
    {
      content: (
        <>
          Share my <b> Profile</b>
          to hits some of your benefits from one of your popular customer.
        </>
      ),
      author: "Leon",
      title: "Private Soft Developer",
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100",
    },
    {
      content: (
        <>
          Make sure you only pick the <b>right way</b> to keep it short and
          simple.
        </>
      ),
      author: "Loen",
      title: "Lead marketer at Netflix ",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&crop=faces&fit=crop&w=100&h=100&q=80",
    },
    {
      content: (
        <>
          This is an <b>awesome</b> landing page template Ive seen. I would use
          this for anything.
        </>
      ),
      author: "Gabrielle Winn",
      title: "Co-founder of Acme Inc",
      avatar:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&crop=faces&q=80",
    },
  ];

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
        <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
          <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
            Our Technical Team
          </div>
          <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-300 lg:leading-tight lg:text-4xl dark:text-white">
            Our Board directors
          </h2>
        </div>

        <div className="container p-6 mx-auto mb-10 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {data.map((item, index) => (
              <div
                className={index === 0 ? "lg:col-span-2 xl:col-auto" : ""}
                key={index}
              >
                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                  <p className="text-2xl leading-normal">{item.content}</p>
                  <div className="flex items-center mt-8 space-x-3">
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-18 h-15">
                      <img alt="Avatar" src={item.avatar} loading="lazy" />
                    </div>
                    <div>
                      <div className="text-lg font-medium">{item.author}</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* form pages */}
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
