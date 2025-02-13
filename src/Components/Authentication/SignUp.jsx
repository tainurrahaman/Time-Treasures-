import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

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

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast("Registration Successful..");
        console.log(user);
        // userUpdateProfile({ displayName: name, photoURL: photo })
        //   .then(() => {
        //     navigate("/");
        //   })
        //   .catch(() => {
        //     toast("Give valid information");
        //   });
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div className="flex justify-center font-roboto items-center mt-5">
      <div className=" rounded-md px-14 py-8  w-[500px]">
        <div className=" border-2 border-gray-400 p-5 md:p-10 rounded-lg">
          <h2 className="text-3xl md:text-5xl font-bebas-neue text-center mb-5 md:mb-10">
            Registration Here
          </h2>
          <form onSubmit={handleRegistration}>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
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

            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
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
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
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

            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
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

            <p className="text-md text-center text-gray-600">
              Already have an account ?
              <Link
                to="/signIn"
                className="text-blue-600 font-semibold hover:underline"
              >
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
        <div>
          <div className="divider my-6">Or</div>

          <div className="flex justify-center items-center">
            <div className="space-y-4 ">
              <Link
                // onClick={handleWithGoogleSignup}
                to="/"
                className="btn btn-outline  w-[300px] flex items-center justify-center space-x-2  rounded-full"
              >
                <FcGoogle className=" h-[37px] w-[37px]" />
                <span>Continue with Google</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
