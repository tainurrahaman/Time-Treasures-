import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ArtifactUpdatePage = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const artifactData = location.state;
  const navigate = useNavigate();
  console.log(artifactData);

  const ArtifactsTypes = [
    "Writings",
    "Documents",
    "Weapons",
    "Tools",
    "Sculpture",
  ];

  const handleUpdateArtifact = (e) => {
    e.preventDefault();
    const form = e.target;
    const artifacts_name = form.artifacts_name.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const create = form.create.value;
    const discover = form.discover.value;
    const description = form.description.value;
    const discover_by = form.discover_by.value;
    const location = form.location.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;

    const newArtifacts = {
      artifacts_name,
      user_email,
      user_name,
      photo,
      type,
      create,
      description,
      discover,
      discover_by,
      location,
    };
    console.log(newArtifacts);

    fetch(`http://localhost:5000/artifacts/all/${artifactData._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtifacts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Artifact Updated Successfully!",
            icon: "success",
            draggable: true,
          });
        }
        navigate("/allArtifacts");
      });
  };

  return (
    <div className="w-11/12 mx-auto my-4 font-roboto">
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full md:w-3/4 lg:w-1/2 max-w-4xl shadow-xl bg-white rounded-2xl p-4 sm:p-6 md:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bebas-neue text-center font-bold mb-6 sm:mb-8">
            Update Artifact
          </h1>
          <form onSubmit={handleUpdateArtifact} className="space-y-4">
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Artifacts Image URL
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={artifactData.photo}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Artifacts Name
              </label>
              <input
                type="text"
                name="artifacts_name"
                defaultValue={artifactData.artifacts_name}
                className="input input-bordered w-full"
              />
            </div>
            <select
              name="type"
              className="select select-bordered w-full"
              defaultValue={artifactData.type}
            >
              <option value="default" disabled>
                Select Artifacts Type
              </option>
              {ArtifactsTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Created At
              </label>
              <input
                type="text"
                name="create"
                defaultValue={artifactData.create}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Discovered At
              </label>
              <input
                type="text"
                name="discover"
                defaultValue={artifactData.discover}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Historical Context
              </label>
              <textarea
                name="description"
                defaultValue={artifactData.description}
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Discovered By
              </label>
              <input
                type="text"
                name="discover_by"
                defaultValue={artifactData.discover_by}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Present Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={artifactData.location}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Artifact adder Name
              </label>
              <input
                type="text"
                name="user_name"
                readOnly
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Artifact adder Email
              </label>
              <input
                type="text"
                name="user_email"
                readOnly
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#A0153E] hover:bg-pink-950 text-white w-full mb-5"
            >
              Update Artifact
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default ArtifactUpdatePage;
