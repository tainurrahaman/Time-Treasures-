import React from "react";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div className="px-8 mt-28">
      <div className="w-1/2 text-center text-5xl mx-auto">
        {" "}
        <h2 className="font-bold  my-10"> Our Museum History.</h2>
      </div>
      <div className="flex  mt-20 gap-10">
        <div className="w-2/5">
          <img
            className="max-w-[400px]"
            src="https://i.ibb.co.com/v49dxRN5/exhibition-362163-1920-1-444x333.jpg"
            alt=""
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-5">
          <h4 className="font-bold text-3xl">The Great Beginning</h4>
          <p className="text-gray-300 text-[16px] pr-5">
            The MooM Art Collections is founded by a group of artists and
            patrons prompted by the government's inadequate museum funding. By
            its first meeting it has 308 members and $700 in funds.
          </p>
          <button className="flex justify-start font-pacifico ">
            <a
              target="_blank"
              href="https://www.chittagong.gov.bd/en/site/tourist_spot/QcLS-%E0%A6%9C%E0%A6%BE%E0%A6%A4%E0%A6%BF%E0%A6%A4%E0%A6%BE%E0%A6%A4%E0%A7%8D%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%BF%E0%A6%95-%E0%A6%9C%E0%A6%BE%E0%A6%A6%E0%A7%81%E0%A6%98%E0%A6%B0#:~:text=The%20museum%20was%20established%20on,of%20the%20museum%20in%201965."
              className="text-[22px] hover:text-gray-500"
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
