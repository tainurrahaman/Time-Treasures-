import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Homelayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto my-5 font-roboto font-normal">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Homelayout;
