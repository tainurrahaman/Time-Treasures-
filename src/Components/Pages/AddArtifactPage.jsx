import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddArtifactPage = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const name = user?.displayName;
  const navigate = useNavigate();

  const ArtifactsTypes = [
    "Writings",
    "Documents",
    "Weapons",
    "Tools",
    "Sculpture",
  ];

  const handleAddArtifacts = (e) => {
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

    const newArtifacts = {
      artifacts_name,
      email,
      name,
      photo,
      type,
      create,
      description,
      discover,
      discover_by,
      location,
    };

    fetch("https://time-treasures-server.vercel.app/artifacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtifacts),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("New Artifacts added Successfully");
        }
      });
    navigate("/");
  };

  return (
    <div className="w-11/12 mx-auto my-4 font-roboto pt-20">
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full md:w-3/4 lg:w-1/2 max-w-4xl shadow-xl bg-white rounded-2xl p-4 sm:p-6 md:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bebas-neue text-center font-bold mb-6 sm:mb-8">
            Add Artifacts
          </h1>
          <form onSubmit={handleAddArtifacts} className="space-y-4">
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Artifacts Image URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Artifacts image URL"
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
                placeholder="Enter Artifacts name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Artifacts Type
              </label>
              <select name="type" className="select select-bordered w-full">
                <option value="">Select Artifacts Type</option>
                {ArtifactsTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Created At
              </label>
              <input
                type="text"
                name="create"
                placeholder="Enter created time"
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
                placeholder="Enter discovered time"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Historical Context
              </label>
              <textarea
                name="description"
                placeholder="Enter historical description"
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
                placeholder="Enter discovered men name"
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
                placeholder="Enter present location"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-1">
                Artifact adder Name
              </label>
              <input
                type="text"
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
                readOnly
                defaultValue={user?.email}
                className="input input-bordered w-full"
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#A0153E] text-white font-assistant text-xs sm:text-sm md:text-base hover:bg-pink-950 w-full mb-5"
            >
              Add Artifact
            </button>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddArtifactPage;
