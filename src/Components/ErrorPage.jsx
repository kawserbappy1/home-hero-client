import React from "react";
import { Link, useRouteError } from "react-router";
import { motion } from "framer-motion";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-7xl font-extrabold text-greenColor mb-4"
      >
        404
      </motion.h1>

      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page not found
      </h2>

      <p className="text-gray-500 mb-6">
        {error?.statusText ||
          error?.message ||
          "The page you are looking for doesn’t exist."}
      </p>

      <Link
        to="/"
        className="bg-greenColor text-yellowColor px-6 py-3 font-bold rounded-md hover:bg-yellowColor hover:text-white transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
