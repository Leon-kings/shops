import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../../../pages/form/action/FormInput";
React;

export default function CreateTestimony() {
  const [values, setValues] = useState({
    email: "",
    testimony: "",
    name: "",
  });
  const Navigate = useNavigate();

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
      name: "name",
      type: "name",
      placeholder: "name",
      errorMessage: "name should be same as those you use to register",
      label: "Name",
      required: true,
    },

    {
      id: 3,
      name: "testimony",
      type: "testimony",
      placeholder: "testimony",
      errorMessage: "testimony should be text",
      label: "testimony",
      required: true,
    },
  ];

  // fetching data from database
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post("https://shopsnodejs.onrender.com/testimony", values);
      if (window.confirm("Back to dashboard?")) {
        Navigate("/Dashboard");
      } else {
        Navigate("/Settings");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div>
        {/* Main Content */}
        <div className="title"></div>
        <div className="w-full xl:w-full lg:w-full md:w-full sm:w-full text-black">
          <div className=" flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
              <div className="Register">
                <form onSubmit={handleSubmit}>
                  <div className="head">
                    <h2 className="text-blue-400 font-bold py-4">
                      CREATE TESTIMONY
                    </h2>
                  </div>
                  <div className="contain">
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
                      <button className="btn w-44 text-white">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
