import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast("Successfully Logout");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded font-medium ${
              isActive ? "bg-[#A0153E] text-white" : " text-black"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allArtifacts"
          className={({ isActive }) =>
            `px-4 py-2 rounded font-medium ${
              isActive ? "bg-[#A0153E] text-white" : " text-black"
            }`
          }
        >
          All Artifact
        </NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink
              to="/addArtifacts"
              className={({ isActive }) =>
                `px-4 py-2 rounded font-medium ${
                  isActive ? "bg-[#A0153E] text-white" : " text-black"
                }`
              }
            >
              Add Artifacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myArtifact"
              className={({ isActive }) =>
                `px-4 py-2 rounded font-medium ${
                  isActive ? "bg-[#A0153E] text-white" : " text-black"
                }`
              }
            >
              MyArtifact
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={`navbar px-4 fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 ${
        isScrolled ? "bg-white/30 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      {/* Navbar Start: Logo and Mobile Menu */}
      <div className="navbar-start gap-2 ">
        {/* Logo and Brand Name */}
        <div className="max-w-8 md:max-w-10">
          <img
            src="https://i.ibb.co.com/vC4SPKnX/Leonardo-Phoenix-10-A-intricately-designed-website-logo-with-a-3.jpg"
            alt="Website Logo"
            className="rounded-full"
          />
        </div>
        <a className="text-[#A0153E] hidden md:block font-bold text-lg ">
          AntiqueArchives
        </a>
        {/* Mobile Menu Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
      </div>
      {/* Navbar Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 ">{links}</ul>
      </div>
      {/* Navbar End: Login/Logout and User Profile */}
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center gap-4">
            {/* User Profile Image with Hover Effect */}
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName}
              </div>
            </div>
            {/* Logout Button */}
            <Link
              onClick={handleLogout}
              to="/"
              className="btn text-[10px] md:text-[16px] bg-[#A0153E] hover:bg-pink-950 text-gray-100"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="space-x-2">
            <Link to="/signUp" className="font-semibold text-gray-700">
              SignUp
            </Link>
            <Link
              to="/signIn"
              className="btn bg-[#A0153E] hover:bg-pink-950 text-gray-100"
            >
              Login
            </Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
