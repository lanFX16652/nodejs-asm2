import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Hotel from "../components/Hotel/Hotel";
import NewHotel from "../components/Hotel/NewHotel";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path: '/hotel/list',
            component: <Hotel />
        },
        {
        path: '/hotel/create',
        component: <NewHotel />
        }
      ]
    },
  ]);