import React from "react";

const features = [
  { name: "Origin", description: "Designed by LD.Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '16.25" x 10.55" x 3.15"' },
  {
    name: "Assistance",
    description: "We provide assistance for Reactjs and Nodejs",
  },
  { name: "Languages", description: "React and Node js and Next js." },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
React;
export default function NewTool() {
  return (
    <>
      <div className="bg-white">
        <h2 className="text-blue-400 font-bold py-12">TECHNICAL SPECIALIST</h2>
        <p className="text-center font-bold">
          We Offer more respectfull products for various domain Gaming , Coding
          and Graphical Designing and Other Job.{" "}
        </p>
        <div className="mx-auto grid w-full grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:w-full lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mt-4 text-gray-600">
              The new tech gadgets and product releases across several different
              categories, including AI, gaming etc. curated by the Gadget Flow
              team.
            </p>
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              alt=""
              src="https://t4.ftcdn.net/jpg/06/87/55/51/360_F_687555127_cjbaJXPyIpkhsLF0U74kH5mJT1B54wOs.jpg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt=""
              src="https://computerstoreskitchener.weebly.com/uploads/1/1/2/4/112427265/computer-stores-kitchener_orig.jpg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt=""
              src="https://franchisemanila.com/wp-content/uploads/2015/09/mineski.jpg"
              className="rounded-lg bg-gray-100"
            />
            <img
              alt=""
              src="https://media.istockphoto.com/id/538780817/photo/woman-buying-desktop-in-store.jpg?s=612x612&w=0&k=20&c=jsKq9MKEPvduNEeCOF_b-X6gKd0v62Bp1HA2T0KIlag="
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </>
  );
}
