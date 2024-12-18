import React, { useState } from "react"
React;
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import {useNavigate } from "react-router-dom";
import FormInput from "../../pages/form/action/FormInput";
import axios from "axios";

  export default function Footer() {
    const [values, setValues] = useState({
      email: ""
    });
  
    const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "email",
        errorMessage: "email should be valid and should incloude @ symbols",
        required: true,
      }
  
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
     <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full px-6 lg:px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl xl:w-full lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-300">
            To better illustrate this, let’s imagine a situation. Suppose you’re a customer who had just found an online store with cool tees. You take a look and decide to purchase one for yourself..
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
            <form onSubmit={handleSubmit} className="mt-4 rounded-2xl bg-white p-4">
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
                <button className="w-fit">Subscribe</button>
              </div>
            </div>
          </form>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
              This whole ordeal, however imagined, could have been easily avoided had the website been designed well enough — with a proper informative.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
              We’re going to talk a lot about useful elements today, and for a very good reason — there are just so many practical things you can put in.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
     </>
    )
  }
  


 


