import React from "react";
import { Fade } from "react-awesome-reveal";

const Subscribe = () => {
  return (
    <div className="my-16 sm:my-20 md:my-28 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10">
        {/* Image Section */}
        <div className="hidden md:block w-full md:w-1/2 rounded-lg hover:shadow-gray-200 hover:-translate-1 duration-500">
          <img
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg object-cover"
            src="https://i.ibb.co.com/RphFY2yn/dannci-a-horde-of-barbarians-at-the-gate-of-constantinople-in-41959732-61d4-4c9a-93de-0c5104d76bac-6.png"
            alt="Subscribe Banner"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center  gap-4 sm:gap-5 px-4 sm:px-6 md:px-10">
          <Fade direction="right">
            <h2 className="text-3xl lg:text-5xl font-bebas-neue">
              Subscribe to our Newsletter
            </h2>
            <p className="text-base sm:text-lg md:text-xl">
              Get the latest history news and content tailored to your
              interests.
            </p>
            {/* Email Input and Button */}
            <div className="flex flex-col sm:flex-row gap-3 mb-2 md:mb-3 lg:mb-5">
              <input
                className="font-semibold lg:font-bold px-3 py-2 sm:py-3 rounded-lg sm:rounded-l-lg w-full md:w-3/5 lg:w-3/4 border-2 border-gray-100"
                type="email"
                placeholder="Email Address"
              />
              <button className="w-full md:w-2/5 lg:w-1/4 btn px-3 py-3  md:py-6 bg-[#A0153E] text-white hover:bg-pink-900 font-semibold lg:font-bold font-assistant">
                SIGN UP
              </button>
            </div>
            <p className="text-sm sm:text-base">
              Every week we'll send you the latest articles, videos, and
              podcasts from the HistoryPress team straight into your inbox.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
