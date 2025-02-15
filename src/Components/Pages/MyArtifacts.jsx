// import { toast, ToastContainer } from "react-toastify";
// import Navbar from "../Shared/Navbar";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import UserAddedArtifactPage from "./UserAddedArtifactPage";

// const MyArtifacts = () => {
//   const { user } = useContext(AuthContext);
//   const [loading, setLoading] = useState(true);
//   const [artifacts, setartifacts] = useState([]);
//   const [filteredartifacts, setFilteredartifacts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     fetch(`http://localhost:5000/artifacts?email=${user.email}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setartifacts(data);
//         setFilteredartifacts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         toast("Error fetching visa data:", error);
//         setLoading(false);
//       });
//   }, [user.email]);

//   // Handle search functionality
//   const handleSearch = () => {
//     if (searchQuery.trim() === "") {
//       setFilteredartifacts(artifacts);
//     } else {
//       const filtered = artifacts.filter((data) =>
//         data.artifacts_name.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilteredartifacts(filtered);
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="w-11/12 mx-auto my-4">
//       <Navbar></Navbar>
//       <div className="p-5">
//         <h2 className="font-bold text-xl md:text-3xl my-3 md:my-5">
//           Total Artifacts added: {filteredartifacts.length}
//         </h2>

//         {/* Search Input and Button */}
//         <div className="flex gap-3 mb-5">
//           <input
//             type="text"
//             placeholder="Search by artifacts name..."
//             className="input input-bordered w-full max-w-xs"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//           <button
//             onClick={handleSearch}
//             className="btn bg-[#A0153E] hover:bg-pink-950 text-white"
//           >
//             Search
//           </button>
//         </div>

//         {/* Visa Application Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
//           {filteredartifacts.map((data) => (
//             <UserAddedArtifactPage
//               key={data._id}
//               artifacts={artifacts}
//               setartifacts={setartifacts}
//               data={data}
//             ></UserAddedArtifactPage>
//           ))}
//         </div>
//       </div>
//       <ToastContainer></ToastContainer>
//     </div>
//   );
// };

// export default MyArtifacts;

import { toast, ToastContainer } from "react-toastify";
import Navbar from "../Shared/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UserAddedArtifactPage from "./UserAddedArtifactPage";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [artifacts, setartifacts] = useState([]);
  const [filteredartifacts, setFilteredartifacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/artifacts?email=${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        setartifacts(data);
        setFilteredartifacts(data);
        setLoading(false);
      })
      .catch((error) => {
        toast("Error fetching visa data:", error);
        setLoading(false);
      });
  }, [user.email]);

  // Handle search functionality
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredartifacts(artifacts);
    } else {
      const filtered = artifacts.filter((data) =>
        data.artifacts_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredartifacts(filtered);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-11/12 mx-auto my-4 sm:my-6 md:my-8">
      <Navbar></Navbar>
      <div className="p-4 sm:p-6 md:p-8">
        {/* Heading */}
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-8">
          Total Artifacts added: {filteredartifacts.length}
        </h2>

        {/* Search Input and Button */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
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

        {/* Artifact Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredartifacts.map((data) => (
            <UserAddedArtifactPage
              key={data._id}
              artifacts={artifacts}
              setartifacts={setartifacts}
              data={data}
            ></UserAddedArtifactPage>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MyArtifacts;
