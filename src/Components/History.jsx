import React from "react";
import { Fade } from "react-awesome-reveal";

const History = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-14 sm:mt-24 md:mt-28">
      {/* Heading Section */}
      <div className="w-full md:w-2/3 lg:w-1/2 text-center mx-auto">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl my-6 sm:my-8 md:my-10">
          Our Museum History
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row mt-10 sm:mt-16 md:mt-20 gap-6 sm:gap-8 md:gap-10">
        {/* Image Section */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] rounded-lg hover:shadow:[4px_4px_0_0] hover:-translate-1 duration-500 cursor-pointer"
            src="https://i.ibb.co.com/v49dxRN5/exhibition-362163-1920-1-444x333.jpg"
            alt="Museum History"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-4 sm:gap-5">
          <Fade direction="right">
            <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl">
              The Great Beginning
            </h4>
            <p className=" text-sm sm:text-base md:text-[16px] pr-0 sm:pr-4 md:pr-5">
              The MooM Art Collections is founded by a group of artists and
              patrons prompted by the government's inadequate museum funding. By
              its first meeting, it has 308 members and $700 in funds.
            </p>
            <button className="flex justify-start font-pacifico">
              <a
                target="_blank"
                href="https://www.britishmuseum.org/visit?gad_source=1&gclid=Cj0KCQjwhMq-BhCFARIsAGvo0KfWO3dFB-kCUP-Fg0EQ0Ry8-Nu3141OxilaVFTEm6O37WzeqyQS2nwaAphjEALw_wcB"
                className="text-lg sm:text-xl md:text-[22px] hover:text-pink-900"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default History;
