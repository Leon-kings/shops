import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
React;
export default function About() {
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
  const tiers = [
    {
      name: "PERSONAL COMPUTERS",
      id: "1",
      href: "/Market",
      featured: false,
    },
    {
      name: "COMPUTER ACCESSORIES",
      id: "2",
      href: "/Market",
      featured: true,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="title"></div>
      <div className="bg-white">
        {/*  */}
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
          <div className="text-2xl">
            <h2 className="text-blue-500 p-10">ABOUT US</h2>
            <p className="text p-2.5">
              We mostly Happy to bring you new Technological Market online , You
              can Order Anythoing You want And Our Special Delivery Team Deliver
              It Safely.{" "}
            </p>
            <div className="title"></div>
            <div className="grid gap-10 px-4 lg:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2">
              <div className="contacts">
                <h2 className="text-green-400 ">+250-7879-445-77</h2>
                <h2 className="text">KG073 Ave</h2>
                <h2 className="text-blue-400 ">kingsleon250@gmail.com</h2>
                <h2 className="text ">https://ld.vercel.app</h2>
              </div>
              <div className="icon">
                <PhoneIcon className="w-8 p-2" />
                <ArrowLeftOnRectangleIcon className="w-8 p-2" />
                <EnvelopeIcon className="w-8 p-2" />
                <GlobeAltIcon className="w-8 p-2" />
              </div>
            </div>
          </div>
          <div className="text-2xl">
            <BuildingStorefrontIcon />
          </div>
        </div>
        {/*  */}
        <div className="relative isolate bg-white px-6  ">
          <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
            <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
              products
            </div>
            <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-300 lg:leading-tight lg:text-4xl dark:text-white">
              Choose Now
            </h2>
          </div>
          <div className="mx-auto grid max-w-lg grid-cols-1 items-center sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "relative bg-gray-900 shadow-2xl"
                    : "bg-green-100 sm:mx-8 lg:mx-0",
                  tier.featured
                    ? ""
                    : tierIdx === 0
                    ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                    : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
                  "rounded-3xl ring-1 ring-gray-900/10 sm:p-12"
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-indigo-400" : "text-indigo-600",
                    "text-base/7 font-semibold"
                  )}
                >
                  {tier.name}
                </h3>

                <p
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-6 text-base/7"
                  )}
                >
                  PRODUCTS
                </p>
                <h2 className="text-xl text-blue-400">BUY YOURS NOW</h2>
                <Link to={tier.href}>
                  <button
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.featured
                        ? "bg-indigo-500 shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
                        : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                      "mt-8 block rounded-md px-3.5  text-center text-sm font-semibold focus-visible:outline-offset-2 sm:mt-10"
                    )}
                  >
                    Get started today
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
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
                    <div className="flex-shrink-0 overflow-hidden rounded-full w-24 h-14">
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
      </div>
    </>
  );
}
