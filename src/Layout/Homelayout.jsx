import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";

const Homelayout = () => {
  return (
    <div className="w-11/12 mx-auto my-5 font-roboto font-normal">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Homelayout;
