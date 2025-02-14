import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const AllArtifacts = () => {
  const loadedArtifact = useLoaderData();
  const [filteredArtifacts, setfilteredArtifacts] = useState(loadedArtifact);
  const [selectedType, setSelectedType] = useState("all");

  const handleFilterChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);

    if (type === "all") {
      setfilteredArtifacts(loadedArtifact);
    } else {
      const filtered = loadedArtifact.filter(
        (artifact) => artifact.type === type
      );
      setfilteredArtifacts(filtered);
    }
  };

  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      {/* Filter Dropdown */}
      <div className="my-4">
        <label htmlFor="artifact-type-filter" className="mr-4 font-semibold">
          Filter by Artifact Type:
        </label>
        <select
          id="artifact-type-filter"
          className="select select-bordered"
          value={selectedType}
          onChange={handleFilterChange}
        >
          <option value="all">All Artifact</option>
          <option value="Writings">Writings</option>
          <option value="Tools">Tools</option>
          <option value="Documents">Document</option>
          <option value="Weapons">Weapons</option>
        </select>
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
