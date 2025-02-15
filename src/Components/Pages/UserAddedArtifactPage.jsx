import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UserAddedArtifactPage = ({ data, artifacts, setartifacts }) => {
  const navigate = useNavigate();

  const handleUpdateArtifact = () => {
    navigate("/artifactUpdatePage".trim(), { state: data });
  };

  const deleteArtifact = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/artifacts/all/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "This artifacts has been deleted.",
                icon: "success",
              });
            }
            const remainingartifacts = artifacts.filter(
              (artifact) => artifact._id !== id
            );
            setartifacts(remainingartifacts);
            navigate("/allArtifacts");
          });
      }
    });
  };

  return (
    <div className="rounded-md bg-gray-100 mt-5 md:10">
      <div className="mb-3 w-full">
        <img
          className="w-full object-cover rounded-t-md h-36 md:h-48 lg:h-60"
          src={data.photo}
          alt="Country Photo"
        />
      </div>
      <div className="p-2 md:p-5 ">
        {" "}
        <div className="font-semibold text-[12px] md:text-[16px] text-gray-700">
          <p>Artifacts Name: {data.name}</p>
          <p>DiscoveredBy: {data.discover_by}</p>
          <p>Created At: {data.create}</p>
          <p>Discovered At: {data.discover}</p>
        </div>
        <div className="flex justify-between mt-3">
          <button
            onClick={handleUpdateArtifact}
            className="btn bg-[#A0153E] text-white hover:bg-pink-950"
          >
            Update
          </button>
          <button
            onClick={() => deleteArtifact(data._id)}
            className="btn rounded-md bg-[#A0153E] text-white hover:bg-pink-950 text-[12px] md:text-[14px]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAddedArtifactPage;
