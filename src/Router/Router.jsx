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
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../Pages/UpdateService/UpdateService";
import ErrorPage from "../Components/ErrorPage";
import ServiceProviderInfo from "../Pages/ServiceProviderInfo/ServiceProviderInfo";
import FAQ from "../Pages/Faq/FAQ";
import ContactUs from "./../Pages/ContactUs/ContactUs";
import HowItWorks from "./../Pages/HowItWork/HowItWorks";
import ServiceGuarantee from "./../Pages/ServiceGurantee/ServiceGuarantee";
import FreeConsult from "./../Pages/FreeConsult/FreeConsult";
import AboutUs from "./../Pages/AboutUs/AboutUs";
import Careers from "./../Pages/Careers/Careers";
import PrivacyPolicy from "./../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./../Pages/TermsCondition/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "my-services",
        element: (
          <PrivateRoute>
            <MyService></MyService>
          </PrivateRoute>
        ),
      },
      {
        path: "my-booking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "add-service",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "update-service/:id",
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hero-home-server-sage.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {
        path: "service-provider-info",
        element: <ServiceProviderInfo></ServiceProviderInfo>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "howitwork",
        element: <HowItWorks></HowItWorks>,
      },
      {
        path: "service-guarantee",
        element: <ServiceGuarantee></ServiceGuarantee>,
      },
      {
        path: "free-consult",
        element: <FreeConsult></FreeConsult>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/careers",
        element: <Careers></Careers>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/term-condition",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);

export default router;
