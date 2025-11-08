import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import MyService from "../Pages/MyService/MyService";
import MyBooking from "../Pages/MyBooking/MyBooking";
import AddService from "../Pages/AddService/AddService";
import Profile from "../Pages/Profile/Profile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "my-services",
        element: <MyService></MyService>,
      },
      {
        path: "my-booking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "add-service",
        element: <AddService></AddService>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
