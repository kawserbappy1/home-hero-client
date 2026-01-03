import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Phone, User2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { FaCamera, FaCloudUploadAlt, FaUser } from "react-icons/fa";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-toastify";
import {
  claudinaryImageUpload,
  savedOrGetNewUser,
} from "./../../utility/index";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const watchConfirmPasswrod = useWatch({
    name: "password",
    control,
  });
  const handleFormSubmit = async (data) => {
    try {
      if (isLoading) return;
      setIsLoading(true);
      const ImageData = data.photo?.[0];
      if (!ImageData) {
        toast.error("Profile image is required");
        return;
      }
      const imageURL = await claudinaryImageUpload(ImageData);
      if (!imageURL) {
        toast.error("Image upload failed");
        return;
      }
      await createUser(data.email, data.password);
      const userInfoToFirebase = {
        displayName: data.name,
        photoURL: imageURL,
      };

      await updateUserProfile(userInfoToFirebase);

      const userInfoDb = {
        name: data.name,
        email: data.email,
        photoURL: imageURL,
      };
      await savedOrGetNewUser(userInfoDb);

      toast.success("Sign Up successfull");
      reset();
      navigate(form, { replace: true });
    } catch (err) {
      if (err?.code === "auth/email-already-in-use") {
        toast.error("This Email already exists.");
      } else {
        toast.error("Signup Failed ! Try again later");
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
      await savedOrGetNewUser({
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
      });
      toast.success("User created successfully!");
      navigate(form, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-greenColor  p-8 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-yellowColor mb-2"
            >
              Create Account
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-yellowColor"
            >
              Join us today
            </motion.p>
          </div>

          <div className="p-8">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-4"
            >
              <div className="relative w-24 h-24 ">
                <div className="w-24 h-24 rounded-full border-4 border-gray-300 shadow-xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    {previewImage ? (
                      <img src={previewImage} alt=""></img>
                    ) : (
                      <FaUser className="text-gray-400 text-5xl" />
                    )}
                  </div>
                </div>
                <div className=" absolute bottom-0 right-0 bg-linear-to-r from-blue-500 to-emerald-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                  <FaCamera></FaCamera>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  {...register("photo", {
                    required: true,
                    message: "Profile image is requred",
                    onChange: (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setPreviewImage(URL.createObjectURL(file));
                      }
                    },
                  })}
                  className=" absolute w-full h-full inset-0 opacity-0 cursor-pointer"
                />
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <FaCloudUploadAlt />
                  Upload profile
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                      minLength: {
                        value: 8,
                        message: "Name must be at least 8 charchter",
                      },
                    })}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellowColor focus:border-yellowColor transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                  <div className="h-4">
                    {errors?.name && (
                      <span className="text-xs font-bold text-red-500">
                        {errors?.name?.message}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "email is required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Type your valid email",
                      },
                    })}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellowColor focus:border-yellowColor transition-all duration-200"
                    placeholder="Enter your email"
                  />
                  <div className="h-4">
                    {errors?.email && (
                      <span className="text-xs font-bold text-red-500">
                        {errors?.email?.message}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password Must be at least 6 charchter",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password contain a digit, a uppercase, a lowercase and a specia charchter",
                      },
                    })}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Create a password"
                  />
                  {errors?.password && (
                    <span className="text-xs font-bold text-red-500">
                      {errors?.password?.message}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirm_password", {
                      required: {
                        value: true,
                        message: "Confirm password is required",
                      },
                      validate: (value) => {
                        if (value === watchConfirmPasswrod) {
                          return true;
                        }
                        return "Password does not matched";
                      },
                    })}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                  {errors?.confirm_password && (
                    <span className="text-xs font-bold text-red-500">
                      {errors?.confirm_password?.message}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-4 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center"
              >
                <input
                  type="checkbox"
                  required
                  className="h-4 w-4 text-yellowColor focus:yellowColor  border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-yellowColor  hover:text-greenColor font-medium"
                  >
                    Terms & Conditions
                  </button>
                </span>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-greenColor text-yellowColor py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </motion.button>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-6"
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6"
            >
              <button
                onClick={handleGoogleSignIn}
                className="w-full inline-flex justify-center items-center gap-2 py-2 px-4 border border-gray-300 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <FcGoogle /> Google
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-semibold text-greenColor hover:text-greenColor  transition-colors duration-200"
                >
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
