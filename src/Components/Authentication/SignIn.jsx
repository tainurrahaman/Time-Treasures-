import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
  const { logInUser, setUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // navigate(location?.state ? location.state : "/");
        toast("Login Successful");
      })
      .catch((err) => {
        toast("Given email or password is Invalid");
      });
  };

  return (
    <div className="flex justify-center items-center font-roboto mt-5">
      <div className=" rounded-md px-14 py-8  w-[500px]">
        <div className=" border-2 border-gray-400 p-5 md:p-10 rounded-lg">
          <h2 className="text-3xl md:text-5xl font-bebas-neue text-center mb-5 md:mb-10">
            Login Here
          </h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <Link
                to="/resetPassword"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button className="btn bg-[#A0153E] rounded-md w-full mb-4 text-white">
              Login
            </button>

            <p className="text-md text-gray-600 text-center ">
              Don’t have an account ?{" "}
              <Link
                to="/signUp"
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
        <div>
          <div className="divider my-6">Or</div>

          <div className="flex justify-center items-center">
            <div className="space-y-4">
              <Link
                // onClick={handleWithGoogle}
                to="/"
                className="btn btn-outline  w-[300px] flex items-center justify-center space-x-2 rounded-full"
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

export default SignIn;
