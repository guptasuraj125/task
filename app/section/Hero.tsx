import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="text-center mt-16 md:mt-24 px-4"
    >
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-700">
        This is a Demo Line
      </h1>

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-700 mt-3">
        This is a Line
      </h1>

      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-700 mt-3">
        This is a 3rd Line
      </h1>

      <img
        src="/boy.avif"
        alt="demo"
        className="mx-auto mt-8 w-60 sm:w-80 md:w-[500px]"
      />
    </div>
  );
};

export default Hero;