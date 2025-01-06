import React from "react";
React;
const Card = () => {
  return (
    <>
      <section className="bg-white w-full lg:w-full xl:w-full dark:bg-dark">
        <h2 className="text-2xl py-6 font-bold tracking-tight text-blue-600">
          SERVICES
        </h2>
        <div className="mx-auto w-full lg:text-center">
          <p className="mt-6 text-lg/8 text-gray-600">
            LD is Mostly Happy To Serve You Better Electronics Appliances With
            Best Quality From Dubai ,<br /> and Also Allow And Provide Support
            In IT
          </p>
        </div>
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://www.cnet.com/a/img/resize/749c306c97f14076499981fc018dace33d0e367d/hub/2018/02/13/517fda12-de2a-4c3f-bee5-05daaf870537/01laptops-with-longest-battery-life-2018-feb.jpg?auto=webp&width=1200"
              CardTitle="Best PC Store"
              CardDescription="We are glad to serve you Better Products with Best Quality From Orginal Industry."
              Button="View Details"
              btnHref="/Market"
            />
            <SingleCard
              image="https://media.istockphoto.com/id/1306977961/vector/js-coding-website-background.jpg?s=612x612&w=0&k=20&c=FK-XxRWdnbIqlAkhq5lpAke8s1XMQsApMUdyrAe7Lks="
              CardTitle="Best Guidance / Debugging"
              CardDescription="We are also hapy to help and debug ReactJs,NextJs and NodeJs Application."
              Button="View Details"
            />
            <SingleCard
              image="https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"
              CardTitle="HeadPhones"
              CardDescription="We are also Glad to Give Headphone for better fucusing with straight Musics"
              Button="View Details"
              btnHref="/Market"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({ image, Button, CardDescription, CardTitle, btnHref }) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-amber-50 shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <p className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              {CardTitle}
            </p>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <button
              href={btnHref ? btnHref : "/Market"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </button>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
