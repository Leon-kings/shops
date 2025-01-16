import React from "react";
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
React;
export default function Testimony() {
  const data = [
    {
      content: (
        <>
          Share a testimonial
          that hits some of your benefits from one of your popular
          customer.
        </>
      ),
      author: "Leon",
      title: "CEO Of LD",
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100",
    },
    {
      content: (
        <>
          Make sure you only pick the right sentence to
          keep it short and simple.
        </>
      ),
      author: "Dylan Ambrose",
      title: "Lead marketer at Netflix ",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&crop=faces&fit=crop&w=100&h=100&q=80",
    },
    {
      content: (
        <>
          This is an awesome landing page template Ive
          seen. I would use this for anything.
        </>
      ),
      author: "Gabrielle Winn",
      title: "Co-founder of Acme Inc",
      avatar:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&crop=faces&q=80",
    },
    {
      content: (
        <>
          This is an awesome landing page template Ive
          seen. I would use this for anything.
        </>
      ),
      author: " WinnGabrielle",
      title: " Co-founder ",
      avatar:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&crop=faces&q=80",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto w-full px-4 xl:w-full sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-blue-600">
          TESTIMONY
        </h2>
        <p className='font-medium p-4'>Don&apos; t miss to help Others by Give a Testimony !</p>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 xl:gap-x-8">
        <section className='slider'>
          <Swiper
            modules={[Autoplay, A11y]}
            spaceBetween={30} // Adjust the spacing as needed
            slidesPerView={1} // Show only one slide by default
            autoplay
          >
            <div className="container p-6 mx-auto mb-10 xl:px-0">
              <div className="grid gap-10 ">
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={
                        index === 0 ? "lg:col-span-2 xl:col-auto" : ""
                      }
                      key={index}>
                      <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                        <p className="text-2xl leading-normal">
                          {item.content}
                        </p>
                        <div className="flex items-center mt-8 space-x-3">
                          <div className="flex-shrink-0 overflow-hidden w-28 h-24">
                            <img
                              alt="LD"
                              src={item.avatar}
                              loading="lazy"
                             
                            />
                          </div>
                          <div>
                            <div className="text-lg font-medium">
                              {item.author}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </div>
          </Swiper>
        </section>
        </div>
      </div>
    </div>
  );
}
