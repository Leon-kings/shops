import React from "react";
React;
import {
  FingerPrintIcon,
  ShoppingCartIcon,
  ServerIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import Card from "../category/Products";
const features = [
  {
    name: "Bought Products",
    description:
      "LD Computer Store Rwanda Limited is a Full-Service Technology Services Provider also called the Top IT Consulting Company in Kigali, Rwanda.",
    icon: ShoppingCartIcon,
  },
  {
    name: "Code Support",
    description:
      "We also provide guidance and Debugging for ReactJs , NodeJs , NextJs codes to debug the buggers.",
    icon: CodeBracketIcon,
  },
  {
    name: "IT Support",
    description:
      "We also help developer to develop best responsive web",
    icon: ServerIcon,
  },
  {
    name: "Advanced Security",
    description:
      "We Maintain Your Computer With Secure Means and Replace with Proper Accessories ",
    icon: FingerPrintIcon,
  },
];

export default function Services() {
  return (
    <>
      <div className="title"></div>  
      <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                    <div>
                        <img className="w-full max-w-md mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png" alt="" />
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow business with connections.</h2>
                        <p className="mt-6 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                        <a href="#" title="" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700" role="button"> Check all 1486 apps </a>
                    </div>
                </div>
            </div>
        </section>
      <br />
      <div className="main xl:mr-0 lg:mr-0 mr-0">
            <Card />
          </div>
          <br />
          <section className="bg-white xl:w-full lg:w-full md:w-full xl:mr-0 lg:mr-0 sm:mr-0 md:mr-0 mr-0 p-8">
          <div className="mx-auto py-12 w-full xl:w-full ">
          <h2 className="text-blue-400 font-bold py-4">EMPOWERING OTHERS</h2>
          <br/>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        aria-hidden="true"
                        className="size-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          </section>
          <br />
        {/*  */}
    </>
  );
}
