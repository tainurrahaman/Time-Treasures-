import { useContext, useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiLike } from "react-icons/bi";

const ArtifactDetails = () => {
  const { loading } = useContext(AuthContext);
  const { id } = useParams();
  const [artifact, setArtifact] = useState(null);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetch(`https://time-treasures-server.vercel.app/artifacts/all/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArtifact(data);
      });
  }, [id]);

  const handleLikeCount = () => {
    const count = artifact?.totalLikeCount + 1;
    const updateCount = { count };

    fetch(`https://time-treasures-server.vercel.app/artifacts/all/${id}/like`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCount),
    })
      .then((res) => res.json())
      .then((data) => {
        setLikeCount(count);
      });

    // setLikeCount(updateCount);
  };

  if (!artifact) {
    return loading;
  }

  return (
    <div className="w-11/12 mx-auto my-4 pt-20">
      <Navbar></Navbar>
      <div className="p-4 sm:p-6 rounded-md">
        {artifact?.email ? (
          <div className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-gray-100 p-2 sm:p-4 md:p-5 rounded-lg border border-gray-400 hover:shadow-[4px_4px_0_0] duration-500 hover:-translate-1">
            <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg gap-4 p-3 sm:p-4 md:p-5">
              {/* Image Section */}
              <div className="w-full md:w-2/4 mx-auto">
                <img
                  className="w-full h-[200px] md:h-50vh rounded-md object-center md:object-cover"
                  src={artifact.photo}
                  alt={`${artifact.artifacts_name} artifact`}
                />
              </div>
              {/* Details Section */}
              <div className="w-full md:w-2/4 px-2 ">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4">
                  {artifact.artifacts_name}
                </h2>
                <p className="text-gray-600">
                  <span className="font-semibold">Discover_By:</span>{" "}
                  {artifact.discover_by}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Artifact Type:</span>{" "}
                  {artifact.type}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Present Location:</span>{" "}
                  {artifact.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Description:</span>{" "}
                  {artifact.description}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Created At:</span>{" "}
                  {artifact.create} years
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Discovered At:</span>{" "}
                  {artifact.discover}
                </p>
                <div className="flex rounded-md justify-center bg-[#A0153E]  mt-5">
                  <button
                    onClick={handleLikeCount}
                    className="flex items-center justify-between w-full bg-[#A0153E] border-none btn text-white gap-1 text-[18px] font-bold hover:bg-[#f787a8ce] hover:text-black"
                  >
                    <div className="flex items-center ">
                      <BiLike></BiLike>
                      <span>Like</span>
                    </div>
                    <span className="pl-5">{artifact?.totalLikeCount}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No details available. Please go back and select an artifact.
          </p>
        )}
      </div>
    </div>
  );
};

export default ArtifactDetails;
