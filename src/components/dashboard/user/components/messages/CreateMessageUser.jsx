import React, { useState } from "react";
import FormInput from "../../../../../pages/form/action/FormInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
React;
export default function CreateMessageUser() {
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
      type: "text",
      placeholder: "Meassages",
      errorMessage: "Message needed to send to admin",
      label: "Your Message",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post("https://shopsnodejs.onrender.com/messages", values);
      if (window.confirm("message received, Continue ?")) {
        Navigate("/302010/Settings");
      } else {
        Navigate("/Udashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const Navigate = useNavigate();
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="title"></div>
      <div className="w-full xl:w-full lg:w-full md:w-full sm:w-full text-black">
        <div className=" flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
            <div className="Register">
              <form onSubmit={handleSubmit}>
                <h2 className="text-blue-400 font-bold">CREATE MESSAGES</h2>
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
                    <button className="btn w-44 text-white">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
