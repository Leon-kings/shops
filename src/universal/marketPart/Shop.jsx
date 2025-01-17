import React, { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import { FiArrowRight } from "react-icons/fi";
React;
const Shop = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://www.shutterstock.com/image-photo/professional-female-backend-software-developer-600nw-2216535609.jpg",
      headline: "Make Yourself Codefull",
      subheadline: "Exclusive Discounts on New Arrivals",
      tagline: "Make Your Job Simply Easier"
    },
    {
      image: "https://s3.envato.com/files/447548803/Trader%20programmer%20(25%20of%2028).jpg",
      headline: "Collaboration perse perspectives",
      subheadline: "Up to 40% Off on Selected Items",
      tagline: "Elevate your style with our exclusive pieces"
    },
    {
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/12/portablemonitors-2048px-7.jpg.jpg",
      headline: "Luxury Essentials",
      subheadline: "Free Shipping on Orders Over $100",
      tagline: "Timeless pieces for the modern wardrobe"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[450px] rounded-2xl w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8";
              }}
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.headline}
                </h1>
                <h2 className="text-xl md:text-2xl text-white mb-6 animate-fade-in delay-200">
                  {slide.subheadline}
                </h2>
                <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto animate-fade-in delay-400">
                  {slide.tagline}
                </p>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center mx-auto space-x-2 group">
                  <button><BiCart className="text-white size-6"/> </button>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-green-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;