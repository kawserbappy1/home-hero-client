import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import userPic from "../assets/userPic.jpg";
import { RiCloseLine, RiMenuFold3Line } from "react-icons/ri";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  return (
    <div className=" top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-2 lg:px-4">
        {/* logo area  */}
        <Link to={"/"}>
          <img src={logo} alt="" className="w-30 md:w-40 h-auto" />
        </Link>

        {/* destop menu  */}
        <div className=" hidden lg:block">
          <ul className="flex items-center gap-2 lg:gap-4 uppercase text-base tracking-wider">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>services</NavLink>
            </li>
            <li>
              <NavLink to={"/my-services"}>My service</NavLink>
            </li>
            <li>
              <NavLink to={"/add-service"}>Add services</NavLink>
            </li>
            <li>
              <NavLink to={"/my-booking"}>my booking</NavLink>
            </li>
          </ul>
        </div>

        {/* cta part  */}
        <div className="flex gap-2">
          <div className="relative">
            <img
              src={userPic}
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              alt=""
              className="size-10 rounded-full border-2 border-greenColor object-cover cursor-pointer"
            />
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg py-2 text-sm z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/my-services"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  My Service
                </Link>
                <Link
                  to="/my-booking"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  My Booking
                </Link>
                <Link
                  to="/profile"
                  className="block px-4 py-2  hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Edit Profile
                </Link>
                <Link
                  to=""
                  className="block px-4 py-2 text-red-600 hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/login"
            className="bg-greenColor text-yellowColor px-2 py-2 md:px-4 md:py-2 rounded-md tracking-wider transition-all duration-500 hover:bg-yellowColor hover:text-greenColor"
          >
            Login
          </Link>
          {/* <Link
            to="/registration"
            className="bg-greenColor text-yellowColor px-4 py-2 rounded-md tracking-wider transition-all duration-500 hover:bg-yellowColor hover:text-greenColor"
          >
            Logout
          </Link> */}
        </div>

        {/* Mobile menu  */}
        <div className="lg:hidden z-50 ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            {menuOpen ? (
              <RiMenuFold3Line size={25} color="black" />
            ) : (
              <RiCloseLine size={25} />
            )}
          </button>
        </div>
      </nav>

      {/* destop menu  */}
      <div
        className={`lg:hidden absolute top-0  bg-yellowColor min-h-screen w-full transition-all duration-500 ${
          menuOpen ? "-left-[100%]" : "left-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 uppercase text-base tracking-wider py-20">
          <li>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to={"/services"}>
              services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to={"/my-services"}>
              My service
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to={"/add-service"}>
              Add services
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => setMenuOpen(!menuOpen)} to={"/my-booking"}>
              my booking
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
