import React from "react";
React;
const BlogP = () => {
  return (
    <>
      <section className="bg-white pb-10 pt-20 dark:bg-dark w-full xl:w-full">
        <div className="w-full">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] w-full text-center lg:w-full">
                <h2 className="text-blue-400 font-bold p-3">
                  CATEGORY UPCOMMING PRODUCTS
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  Business identity verified Traditional Sourcing Brought
                  Online. Find Quality Products & Contact Verified Suppliers!
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              CardTitle="SMART WATCHES"
              CardDescription="Shop through a wide selection of Smart Watches at Amazon.com. Free shipping and free returns on eligible items."
              image="https://images.samsung.com/is/image/samsung/assets/us/2407/watches/Watches-PCD_CO15_Sleep-Coaching_MO.jpg?$624_624_JPG$"
            />
            <BlogCard
              CardTitle="SMART BLACERETES"
              CardDescription="Wearable Activity & Fitness Tracker for Multi-Sport Mode, All-Day Automatic Continuous Monitoring of Health Data, Improve Sleep, Stress & Wellness"
              image="https://play-lh.googleusercontent.com/r7jpJUzShrtPb6tJZy4ptr1CMQt_Vbaldn-7cWvLzga6zMhorcn8UybjeO4azY7Xv6g"
            />
            <BlogCard
              CardTitle="SMART PHONE"
              CardDescription="Smartphones have built-in cameras, GPS navigation, and support for various communication methods, including voice calls, text messaging, and internet-based."
              image="https://hips.hearstapps.com/hmg-prod/images/best-flip-phones-660d8b9ae2100.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=1120:*"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogP;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/3 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            <h3 className="mb-4 inline-block text-xl font-semibold text-dark hover:text-blue-bg-blue-400 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {CardTitle}
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
