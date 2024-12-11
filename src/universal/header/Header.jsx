import React from "react";

const FullWidthBackground = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')",
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website</h1>
        <p className="text-lg md:text-xl mt-4">
          A responsive full-width section with a background image
        </p>
      </div>
    </div>
  );
};

export default FullWidthBackground;
