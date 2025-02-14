import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import SignUp from "../Components/Authentication/SignUp";
import SignIn from "../Components/Authentication/SignIn";
import AddArtifactPage from "../Components/Pages/AddArtifactPage";
import AllArtifacts from "../Components/Pages/AllArtifacts";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
  {
    path: "/addArtifacts",
    element: (
      <PrivateRoute>
        <AddArtifactPage></AddArtifactPage>,
      </PrivateRoute>
    ),
  },
  {
    path: "/allArtifacts",
    element: <AllArtifacts></AllArtifacts>,
    loader: () => fetch("http://localhost:5000/artifacts/all"),
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
]);

export default router;
