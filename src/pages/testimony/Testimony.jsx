import React, { useEffect, useState } from "react";
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import axios from "axios";
import { BiMessage } from "react-icons/bi";
React;
export default function Testimony() {
    const [testimonies, setTestimonies] = useState([]);
  // Fetch testimonies from API
  useEffect(() => {
    const fetchTestimonies = async () => {
      try {
        const response = await axios.get(
          "https://shopsnodejs.onrender.com/testimony"
        );
        setTestimonies(response.data.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };
    fetchTestimonies();
  }, []);

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
                {testimonies&&testimonies.map((item, index) => (
                  <SwiperSlide key={item._id}>
                    <div
                      className={
                        index === 0 ? "lg:col-span-2 xl:col-auto" : ""
                      }
                      key={index}>
                      <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                        <p className="text-2xl max-w-full leading-normal">
                          {item.testimony}
                        </p>
                        <div className="flex items-center mt-8 space-x-3">
                          <div className="flex-shrink-0 overflow-hidden w-28 h-24">
                            {/* <img
                              alt=""
                              src={item.avatar}
                              loading="lazy"
                              className="w-full object-cover mx-auto rounded-2xl"
                             
                            /> */}
                            <BiMessage className="w-28 h-24 text-white"/>
                          </div>
                          <div>
                            <div className="text-lg font-medium">
                              {item.name}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                              {item.email}
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
