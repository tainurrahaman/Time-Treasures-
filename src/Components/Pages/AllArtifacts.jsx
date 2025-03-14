import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const AllArtifacts = () => {
  const loadedArtifact = useLoaderData();
  const [filteredArtifacts, setFilteredArtifacts] = useState(loadedArtifact);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Handle search and filter functionality
  const handleSearch = () => {
    let filtered = loadedArtifact;
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((data) =>
        data.artifacts_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredArtifacts(filtered);
  };

  const handleFilter = () => {
    let filtered = [...filteredArtifacts];
    if (selectedFilter === "discover") {
      filtered = filtered.sort(
        (a, b) => new Date(a.discover) - new Date(b.discover)
      );
    } else if (selectedFilter === "created_at") {
      filtered = filtered.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }
    setFilteredArtifacts(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-11/12 mx-auto my-4 pt-16 lg:pt-24">
      <Navbar></Navbar>

      {/* Search and Filter Section */}
      <div className="flex items-center justify-between">
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
            className="btn bg-[#A0153E] hover:bg-pink-950 text-white sm:ml-2"
          >
            Search
          </button>
        </div>
        <div className="flex justify-center mt-5 flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
          <select
            className="select select-bordered w-full sm:max-w-xs"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="discover">Sort by Discover Date</option>
            <option value="created_at">Sort by Created Date</option>
          </select>
          <button
            onClick={handleFilter}
            className="btn bg-[#A0153E] hover:bg-pink-950 text-white sm:ml-2"
          >
            Apply Filter
          </button>
        </div>
      </div>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 pt-4 sm:pt-6 md:pt-10">
        {filteredArtifacts.map((artifact) => (
          <div
            className="rounded-md bg-gray-100 shadow-sm hover:shadow-md transition-shadow "
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
                <p>Discovered: {artifact.discover}</p>
                <p>Created At: {artifact.created_at}</p>
              </div>
              <div className="flex justify-center items-center mt-3">
                <Link
                  to={`/allArtifacts/${artifact._id}`}
                  className="btn w-full bg-[#A0153E] hover:bg-pink-950 text-white text-xs sm:text-sm md:text-base"
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
