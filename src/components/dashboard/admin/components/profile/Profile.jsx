import React, { useState } from "react";
React;
import logo from "../../../../../assets/images/360_F_288921356_krHC3KV1lJ2jAGnaep6NXZX6Fkv4FF9q.jpg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../../../../pages/form/action/FormInput";

export default function Profile() {
  const [values, setValues] = useState({
    email: "",
    file: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "email",
      required: true,
    },

    {
      id: 2,
      name: "file",
      type: "file",
      label: "file",
      required: true,
    },
  ];
  const Navigate = useNavigate();
  // fetching data from database
  // handleSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    if (values.email === "admin@gmail.com" && values.file === "admin") {
      if (window.confirm("Do you really want to continue to dashboard?")) {
        Navigate("/Dashboard");
      } else {
        Navigate("/");
      }
      return;
    }

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
  return (
    <div>
      <section className="py-24 bg-white relative rounded shadow-md">
        <div className="w-full max-w-7xl md:px-5 lg:px-5 mx-auto">
        <div className="head">
            <h2 className="text-center items-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente vel, id labore placeat architecto temporibus deleniti 
                non ullam odio iusto rerum consequatur, incidunt vitae molestiae 
                quam cumque natus numquam praesentium!
            </h2>
            <br />
        </div>
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full bg-amber-50 flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="flex size-fit p-4 items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 ">
                        <div className="h-24 w-24 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src={logo}
                            className="size-fit object-cover"
                          />
                        </div>
                        <div className="h-24 w-24 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={logo}
                            className="size-fit object-cover"
                          />
                        </div>
                        
                      </div>
                      <div className="grid shrink-0 grid-cols-1 ">
                        <div className="h-24 w-24 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={logo}
                            className="size-fit object-cover"
                          />
                        </div>
                        <div className="h-24 w-24 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={logo}
                            className="size-fit object-cover"
                          />
                        </div>
                        <div className="h-24 w-24 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={logo}
                            className="size-fit object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 ">
                        <div className="h-24 w-24 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={logo}
                            className="size-fit object-cover"
                          />
                        </div>
                        <div className="h-24 w-24 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={logo}
                            className="size-fit object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="title"></div>
            </div>
            {/*  */}
            <div className="container bg-amber-50 flex items-center justify-center min-h-screen">
              <div className="w-full max-w-md p-3 lg:p-8 xl:p-8  rounded shadow-md">
                {/*  */}
                <form onSubmit={handleSubmit} className="mt-4 p-4 bg-white">
                  <h2 className="title text-green-400 text-2xl py-4">
                    Profile
                  </h2>
                  <div className="container">
                    {inputs.map((input) => (
                      <FormInput
                        key={input.id}
                        className="p-3 w-50"
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                      />
                    ))}
                    <div className="head">
                      <button className="button w-42 text-white">Submit</button>
                      <p className="p-4">
                        If you don`t have an account
                        <Link to="/Register">
                          <b>
                            <button className="p-3 bg-blue-500 hover:text-green-300 ">
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
  );
}
