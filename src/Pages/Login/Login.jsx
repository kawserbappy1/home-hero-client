import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../Context/AuthContex";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back to Hero Home!",
          confirmButtonColor: "#2f5349",
          timer: 2000,
        });
        e.target.reset();
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        console.log("Login error:", error);

        let errorMessage = "An error occurred during login. Please try again.";
        if (error.code === "auth/user-not-found") {
          errorMessage = "Your email is not registered! Please sign up first.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Your password is incorrect. Please try again.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "Invalid email address. Please check your email.";
        } else if (error.code === "auth/invalid-credential") {
          errorMessage =
            "Invalid credentials. Please check your email and password.";
        } else if (error.code === "auth/too-many-requests") {
          errorMessage = "Too many failed attempts. Please try again later.";
        } else if (error.code === "auth/user-disabled") {
          errorMessage =
            "This account has been disabled. Please contact support.";
        } else if (error.code === "auth/network-request-failed") {
          errorMessage =
            "Network error. Please check your internet connection.";
        } else if (error.message.includes("user-not-found")) {
          errorMessage = "Your email is not registered! Please sign up first.";
        }

        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: errorMessage,
          confirmButtonColor: "#2f5349",
          footer:
            error.code === "auth/user-not-found"
              ? '<a href="/registration" style="color: #2f5349; text-decoration: underline;">Create a new account</a>'
              : null,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome to Hero Home!",
          confirmButtonColor: "#2f5349",
          timer: 2000,
        });
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        console.log("Google sign in error:", error);

        let errorMessage = "Failed to sign in with Google. Please try again.";

        if (error.code === "auth/popup-closed-by-user") {
          errorMessage = "Sign in was cancelled. Please try again.";
        } else if (error.code === "auth/popup-blocked") {
          errorMessage =
            "Popup was blocked. Please allow popups for this site.";
        } else if (error.code === "auth/network-request-failed") {
          errorMessage =
            "Network error. Please check your internet connection.";
        }

        Swal.fire({
          icon: "error",
          title: "Google Sign In Failed",
          text: errorMessage,
          confirmButtonColor: "#d33",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-greenColor to-yellowColor p-8 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-greenColor mb-2 font-heading"
            >
              Welcome Back
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-green-100"
            >
              Sign in to your account
            </motion.p>
          </div>

          <div className="p-8">
            <form onSubmit={handleLogIn} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                type="submit"
                disabled={loading}
                className="w-full bg-greenColor text-yellowColor py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </motion.button>
            </form>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <FcGoogle /> Google
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/registration"
                  className="font-semibold text-green-600 hover:text-green-700"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
