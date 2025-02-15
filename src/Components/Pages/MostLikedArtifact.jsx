import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const MostLikedArtifact = () => {
  const [mostLiked, setMostLiked] = useState([]);
  useEffect(() => {
    fetch("https://time-treasures-server.vercel.app/artifacts/mostLiked")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMostLiked(data);
      });
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-20">
      <Fade cascade>
        <div className="text-center w-full md:w-2/3 mx-auto pb-5 pt-5 md:pt-10">
          <h2 className="text-2xl sm:text-2xl font-bebas-neue md:text-5xl font-bold">
            Explore the Most Liked Artifacts
          </h2>
          <p className="font-normal text-base sm:text-lg md:text-2xl p-0 md:p-4 pt-2 md:pt-8">
            Discover the Top-Rated Artifacts Loved by Our Community, and explore
            the fascinating history and stories behind these cherished
            treasures.
          </p>
        </div>

        {/* Artifact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 px-4 sm:px-6 lg:px-8 mt-10">
          {mostLiked.map((visa) => (
            <div
              className="rounded-md bg-gray-100 hover:shadow-lg transition-shadow duration-300"
              key={visa._id}
            >
              {/* Artifact Image */}
              <div className="mb-3">
                <img
                  className="w-full rounded-t-md h-40 md:h-48 lg:h-60"
                  src={visa.photo}
                  alt="Country Photo"
                />
              </div>

              {/* Artifact Details */}
              <div className="text-gray-700 p-3 md:p-5 text-sm sm:text-base  space-y-2">
                <p>Name: {visa.artifacts_name}</p>
                <p>Artifact Type: {visa.type}</p>
                <p>Discover_By: {visa.discover_by}</p>
              </div>

              {/* See Details Button */}
              <div className="flex justify-center items-center mt-3">
                <Link
                  to={`/allArtifacts/${visa._id}`}
                  state={visa}
                  className="btn bg-[#A0153E] text-gray-200 w-full hover:bg-gray-700 text-xs sm:text-sm md:text-base"
                >
                  See Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* All Visas Link */}
        <div className="flex justify-center items-center mt-10">
          <p className="font-semibold text-lg sm:text-xl md:text-2xl">
            If you want to see all the Artifact's, Click{" "}
            <Link
              to="/allArtifacts"
              className="btn bg-[#034833] text-gray-100 hover:bg-gray-700 text-xs sm:text-sm md:text-base"
            >
              All Artifact
            </Link>
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default MostLikedArtifact;
