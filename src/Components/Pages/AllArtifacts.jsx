import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const AllArtifacts = () => {
  const loadedArtifact = useLoaderData();
  const [filteredArtifacts, setfilteredArtifacts] = useState(loadedArtifact);
  const [selectedType, setSelectedType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search functionality
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setfilteredArtifacts(loadedArtifact);
    } else {
      const filtered = loadedArtifact.filter((data) =>
        data.artifacts_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setfilteredArtifacts(filtered);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>

      {/* Search Input and Button */}
      <div className="flex justify-center mt-5 flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
        <input
          type="text"
          placeholder="Search by artifacts name..."
          className="input input-bordered w-full sm:max-w-xs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="btn bg-[#A0153E] hover:bg-pink-950 text-white"
        >
          Search
        </button>
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-10">
        {filteredArtifacts.map((artifact) => (
          <div
            className="rounded-md bg-gray-100 shadow-sm hover:shadow-md transition-shadow"
            key={artifact._id}
          >
            <div className="mb-3">
              <img
                className="w-full rounded-t-md h-32 sm:h-40 md:h-48 object-center"
                src={artifact.photo}
                alt="Artifact Photo"
              />
            </div>
            <div className="p-3 sm:p-4 md:p-5">
              <div className="font-semibold text-xs sm:text-sm md:text-base text-gray-700">
                <p>Name: {artifact.artifacts_name}</p>
                <p>Present Location: {artifact.location}</p>
                <p>Type: {artifact.type}</p>
              </div>
              <div className="flex justify-center items-center mt-3">
                <Link
                  to={`/allArtifacts/${artifact._id}`}
                  //   artifact={artifact}
                  className="btn w-full bg-[#A0153E] text-white hover:bg-gray-700 text-xs sm:text-sm md:text-base"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
