import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import SignUp from "../Components/Authentication/SignUp";
import SignIn from "../Components/Authentication/SignIn";
import Banner from "../Components/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "signIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
