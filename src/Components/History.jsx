import React from "react";

const History = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 md:mt-28">
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
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] rounded-lg"
            src="https://i.ibb.co.com/v49dxRN5/exhibition-362163-1920-1-444x333.jpg"
            alt="Museum History"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-4 sm:gap-5">
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
              href="https://www.chittagong.gov.bd/en/site/tourist_spot/QcLS-%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%A4%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%BF%E0%A6%95-%E0%A6%9C%E0%A6%BE%E0%A6%A6%E0%A7%81%E0%A6%98%E0%A6%B0#:~:text=The%20museum%20was%20established%20on,of%20the%20museum%20in%201965."
              className="text-lg sm:text-xl md:text-[22px] hover:text-gray-500"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
