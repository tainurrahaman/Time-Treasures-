import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.init";

const SignUp = () => {
  const { setUser, createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    const newUser = { name, email, photo };

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(newUser);
        // Update user profile with display name and photo URL
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          // Save user data to MongoDB
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              navigate("/");
              if (data.insertedId) {
                Swal.fire({
                  title: "Registration Successful",
                  icon: "success",
                  draggable: true,
                });
              }
            });
        });
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div className="mt-5 px-4 sm:px-6 lg:px-8">
      <Navbar></Navbar>
      <div className="flex justify-center font-roboto items-center ">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl rounded-md px-6 py-8 sm:px-8 md:px-10 lg:px-12">
          <div className="border-2 border-gray-400 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bebas-neue text-center mb-5 md:mb-8 lg:mb-10">
              Registration Here
            </h2>
            <form onSubmit={handleRegistration}>
              <div className="mb-4">
                <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm sm:text-base font-semibold text-gray-700 mb-1">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <button className="btn bg-[#A0153E] text-gray-200 rounded-md w-full my-4">
                Registration
              </button>

              <p className="text-sm sm:text-base text-center text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/signIn"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
          <div>
            <div className="divider my-4 sm:my-6">Or</div>

            <div className="flex justify-center items-center">
              <div className="space-y-4 w-full">
                <Link
                  to="/"
                  className="btn btn-outline w-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center space-x-2 rounded-full"
                >
                  <FcGoogle className="h-6 w-6 sm:h-8 sm:w-8" />
                  <span className="text-sm sm:text-base">
                    Continue with Google
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
