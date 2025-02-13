import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
  },
]);

export default router;
