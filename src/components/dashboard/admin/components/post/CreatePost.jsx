import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../../../../../pages/form/action/FormInput";
React;
export default function CreatePost() {
  const [values, setValues] = useState({
    email: "",
    description: "",
    name: "",
    price: "",
    image: "",
  });
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Names",
      errorMessage: "Names needed ",
      label: "Your Product Names",
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
      name: "price",
      type: "currency",
      placeholder: "28.7$",
      errorMessage: "price should be in float",
      label: "Price",
      required: true,
    },

    {
      id: 4,
      name: "description",
      type: "description",
      placeholder: "Macbook RAM 8GB 320GB SSD",
      errorMessage: "description of your product /more info",
      label: "Description",
      required: true,
    },
    {
      id: 6,
      name: "image",
      type: "file",
      errorMessage: "Image requires are jpg, jpeg and png",
      label: "Image",
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post("https://shopsnodejs.onrender.com/posts", values);
      if (window.confirm("Thank you!!")) {
        Navigate("/Dashboard");
      } else {
        Navigate("/Settings");
      }
    } catch (err) {
      console.log(err);
      alert('error in posting products!',err)
    }
  };
  const Navigate = useNavigate();
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="title"></div>
      <div className="items-center w-full xl:w-full lg:w-full md:w-full text-black">
        <div className=" flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
            <div className="Register">
              <form onSubmit={handleSubmit}>
                <h2 className="text-blue-400 font-bold py-4">CREATE POST</h2>
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
      <br />
    </>
  );
}
