import React, { useState } from "react";
import FormInput from "../action/FormInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
React;
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
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
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "password should be 8-12 characters include at least 1 letter and 1 symbol",
      label: "password",
      required: true,
    },
  ];
  const Navigate = useNavigate();
  // fetching data from database
  // handleSubmit

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    if (values.email === "admin@gmail.com" && values.password === "admin") {
      if (window.confirm("Do you really want to continue to dashboard?")) {
        Navigate("/Dashboard");
      } else {
        Navigate("/");
      }
      return;
    }

    try {
      await axios.post(
        "https://shopsnodejs.onrender.com/users/auth",
        values
      );
      if (window.confirm("Do you really want to move?")) {
        Navigate("/Udashboard");
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
    <>
      <div className="title"></div>
      <br />
      <div className="container flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
          <form onSubmit={handleSubmit} className="mt-4">
            <h2 className="title text-blue-400 font-bold py-4">LOG IN</h2>
            <div className="container">
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
                <button className="button w-42 text-white">Submit</button>
                <p className="p-4 text-black">
                  If you don`t have an account
                  <Link to="/Register">
                    <b>
                      <button className="p-3 bg-blue-500 hover:text-green-300 ">
                       
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
    </>
  );
};
export default Login;
