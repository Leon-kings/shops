import React from "react";
React;
export default function Card() {
  return (
    <>
      <div className="container">
      <br />
        <div className="relative py-12 bg-gray-700 sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
          <div className="absolute inset-0 hidden lg:block">
            <img
              className="object-cover object-right-bottom w-full h-full"
              src="https://media.istockphoto.com/id/629286010/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=yDR4ksPb7-wGl724xxEjbzpFbQd-DEdxwLiJicqNpcM="
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
              <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight">
                BEST COMPUTER TO COMPUTE CODES
              </h2>
              <h3 className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">
                CODES is a set of Instruction to compute set of action done by
                Computer.
              </h3>

              <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                <div className="grid gap-2 grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2">
                  <div className="main">
                    <img
                      src="https://www.shutterstock.com/image-photo/igniting-innovation-harnessing-power-coding-600nw-2425426569.jpg"
                      alt=""
                    />
                  </div>
                  <div className="main">
                    <img
                      src="https://www.shutterstock.com/image-photo/programmer-people-working-laptops-smartphones-600nw-2473384115.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:hidden">
            <img
              className="object-cover w-full h-full"
              src="https://media.istockphoto.com/id/629286010/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=yDR4ksPb7-wGl724xxEjbzpFbQd-DEdxwLiJicqNpcM="
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
