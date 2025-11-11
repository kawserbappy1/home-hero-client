import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { RiCloseLine, RiMenuFold3Line } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContex";
import Swal from "sweetalert2";
import { IoSunnySharp } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You’ll be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged out!",
              text: "You have been successfully logged out.",
              icon: "success",
              confirmButtonColor: "#16a34a",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: error.message,
              icon: "error",
            });
          });
      }
    });
    setUserMenuOpen(false);
  };

  return (
    <div className="top-0 left-0 w-full z-50 bg-white shadow-lg">
      <nav className="container mx-auto flex items-center justify-between h-20 px-2 lg:px-4 bg-white">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-24 md:w-36 h-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-4 uppercase text-base tracking-wider ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/my-services">My Service</NavLink>
            </li>
            <li>
              <NavLink to="/add-service">Add Service</NavLink>
            </li>
            <li>
              <NavLink to="/my-booking">My Booking</NavLink>
            </li>
          </ul>
        </div>

        {/* User / Auth Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle></ThemeToggle>

          {user ? (
            <>
              {/* Avatar */}
              <div className="relative">
                <img
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  alt="User Avatar"
                  className="size-10 rounded-full border-2 border-greenColor object-cover cursor-pointer"
                />

                {/* Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 text-sm z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-greenColor"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/my-services"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-greenColor"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      My Service
                    </Link>
                    <Link
                      to="/my-booking"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-greenColor"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      My Booking
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100 hover:text-greenColor"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      Edit Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-greenColor text-yellowColor px-3 py-2 md:px-4 md:py-2 text-sm md:text-md rounded-md tracking-wider transition-all duration-300 hover:bg-yellowColor hover:text-greenColor"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-greenColor text-yellowColor px-4 py-2 rounded-md tracking-wider transition-all duration-300 hover:bg-yellowColor hover:text-greenColor"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden z-60">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            {menuOpen ? (
              <RiMenuFold3Line
                className=" size-5 text-greenColor"
                color="black"
              />
            ) : (
              <RiCloseLine size={25} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-0 bg-bg3 min-h-screen w-full transition-all duration-500 z-50 ${
          menuOpen ? "-left-[100%]" : "left-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 uppercase text-base tracking-wider py-20">
          <li>
            <NavLink onClick={() => setMenuOpen(true)} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(true)} to="/services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(true)} to="/my-services">
              My Service
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(true)} to="/add-service">
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(true)} to="/my-booking">
              My Booking
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
