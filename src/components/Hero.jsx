import React from "react";
import HeroSVG from "../assets/svgs/hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="h-auto md:h-screen flex flex-col md:flex-row justify-between items-center container p-4 text-black pt-16 md:pt-0">
      <div className="w-full md:w-1/2 md:pb-0 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl p-3 font-bold leading-tight">
          Kaam
          <span className="text-cyan-500 bg-white rounded-full px-4 py-1 md:text-5xl font-extrabold">
            Kaaj
          </span>
        </h1>
        <p className="text-base md:text-lg font-medium text-justify p-3">
          Powering up homes, fixing leaks, and making moments brighter. Your
          all-in-one destination for skilled electricians, expert plumbers, and
          more at Your Website Name.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <Lottie animationData={HeroSVG} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
