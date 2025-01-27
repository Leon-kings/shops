import React, { useState } from "react";
React;
import { HandRaisedIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import FormInput from "../../pages/form/action/FormInput";
import axios from "axios";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { PhoneIcon } from "@heroicons/react/16/solid";
export default function Footer() {
  const [values, setValues] = useState({
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Subscribe",
      errorMessage: "email should be valid and should incloude @ symbols",
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
      await axios.post("https://shopsnodejs.onrender.com/subscription", values);
      if (window.confirm("Thank you ! Your Subscription received !!")) {
        Navigate("/");
      } else {
        Navigate("/Register");
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
      <div className="relative isolate overflow-hidden bg-gray-800 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto w-full px-6 lg:px-8">
          <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 lg:w-full lg:grid-cols-2">
            <div className="w-full xl:w-full lg:w-full">
              <div className="w-full flex items-center justify-center  bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                  <form onSubmit={handleSubmit} className="mt-4">
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
                        <button className="button w-42 text-white">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <LinkIcon className="size-6 text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  WHO WE ARE
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  LD Computer Store Rwanda Limited is a Full-Service Technology
                  Services Provider also called the Top IT Consulting Company in
                  Kigali, Rwanda.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  CONTACT US
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  <EnvelopeIcon className="size-6 text-white" />{" "}
                  akingeneyeleon2002@gmail.com
                </dd>
                <dd className="mt-2 text-base/7 text-gray-400">
                  <PhoneIcon className="size-6 text-white" /> +250 787944577
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
      <div className="main">
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto flex flex-col items-center">
            <div className="flex mb-4">
              <a href="#" className="mr-4">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter size={24} />
              </a>
              <a href="#">
                <FaInstagram size={24} />
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} LD. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
