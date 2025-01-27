import React from "react";
React;
import image from "../../assets/images/macbook-pro.avif";
import image1 from "../../assets/images/student-with-laptop.jpg";
import image2 from "../../assets/images/buying-laptops-in-ireland-in-2023-min-1678291071660_a842ec16-4d68-4ab9-ade7-3a46f6e4efcf_1600x.webp";
import image3 from "../../assets/images/laptopwok.jpg";
import image4 from "../../assets/images/postdp-hero03.jpg.large.2x.jpg";
import image5 from "../../assets/images/young-man-showing-his-friend-information-from-his-notes.jpg";
import image6 from "../../assets/images/best-laptop-brands-20230420-3-medium.jpg";
export default function Head() {
  return (
    <>
      <div className="w-full">
        <div className="xl:mr-0 lg:mr-0 mr-0 w-full xl:w-full lg:w-full">
          <div className="relative overflow-hidden bg-white w-full xl:w-full md:w-full sm:w-full">
            <h2 className="text-blue-400 font-bold py-4">BUY YOUR DEVICES</h2>
            <p className="font-medium">
              Don&apos; t miss today&apos; s best electronics deals with fast
              shipping & great customer service!
            </p>
            <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    LD Tech is Finally Here
                  </h1>
                  <p className="mt-4 text-xl text-gray-500">
                    This year, our new summer collection will shelter you the
                    best magnificient Computers To advance technology Here in
                    Rwanda.
                  </p>
                  <br />
                  <p className="mt-4 text-xl text-gray-500">
                    Check It out for Your best Wants.We glad to Offer you
                    Qualited Products
                  </p>
                </div>
                <div>
                  <div className="mt-10">
                    {/* Decorative image grid */}
                    <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                      <div className="absolute transform sm:top-0 md:left-1/2 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                          <div className="grid shrink-0 grid-cols-1 ">
                            <div className="h-44 w-40 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                              <img
                                src={image}
                                className="size-fit object-cover"
                              />
                            </div>
                            <div className="h-44 w-40 overflow-hidden rounded-lg">
                              <img
                                src={image1}
                                className="size-fit object-cover"
                              />
                            </div>
                          </div>
                          <div className="grid shrink-0 grid-cols-1 ">
                            <div className="h-44 w-40 overflow-hidden rounded-lg">
                              <img
                                src={image2}
                                className="size-fit object-cover"
                              />
                            </div>
                            <div className="h-44 w-40 overflow-hidden rounded-lg">
                              <img
                                src={image3}
                                className="size-fit object-cover"
                              />
                            </div>
                            <div className="h-44 w-40 overflow-hidden rounded-lg">
                              <img
                                src={image4}
                                className="size-fit object-cover"
                              />
                            </div>
                          </div>
                          <div className="grid shrink-0 grid-cols-1 ">
                            <div className="h-44 w-40 overflow-hidden rounded-lg">
                              <img
                                src={image5}
                                className="size-fit object-cover"
                              />
                            </div>
                            <div className="h-44 w-40 overflow-hidden rounded-lg">
                              <img
                                src={image6}
                                className="size-fit object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
