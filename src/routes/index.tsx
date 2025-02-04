import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "@/layouts/Mainlayout";
import Home from "@/pages/Home/Home";
import SeviceDetails from "@/pages/SeviceDetails/SeviceDetails";
import Compte from "@/pages/Compte/Compte";
import Search from "@/pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <SeviceDetails />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/settings",
    element: <Compte />,
  },
]);

export default router;
