import logo from "../assets/logo-transparent.png";
import paypal from "../assets/paypal.png";
import card from "../assets/card-exchange.png";
import dollar from "../assets/dollar-coin.png";
import qrcode from "../assets/qr-code.png";
import stipe from "../assets/stripe.png";
import visa from "../assets/visa.png";
import { NavLink, Link } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaRegCopyright,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-greenColor px-2">
      <div className="container mx-auto py-10 grid grid-cols-12 border-b-2 border-b-bg4/20">
        {/* logo area  */}
        <div className="col-span-12 md:col-span-4">
          <img src={logo} alt="" className="w-40 mb-4" />
          <p className=" text-white text-sm mb-5 max-w-sm">
            Hero home is awesome home service porvider company. We provide
            fantastic service for your home. Quality, honesty, creative work our
            charchiterstic.{" "}
          </p>
          <div className="flex items-center gap-2 flex-wrap mb-10 md:mb-0">
            <img
              src={paypal}
              alt=""
              className="size-10 bg-yellowColor/20  rounded-full p-2 hover:bg-yellowColor cursor-pointer transition-all duration-500 hover:scale-110"
            />
            <img
              src={card}
              alt=""
              className="size-10 bg-yellowColor/20  rounded-full p-2 hover:bg-yellowColor cursor-pointer transition-all duration-500 hover:scale-110"
            />
            <img
              src={dollar}
              alt=""
              className="size-10 bg-yellowColor/20  rounded-full p-2 hover:bg-yellowColor cursor-pointer transition-all duration-500 hover:scale-110"
            />
            <img
              src={qrcode}
              alt=""
              className="size-10 bg-yellowColor/20  rounded-full p-2 hover:bg-yellowColor cursor-pointer transition-all duration-500 hover:scale-110"
            />
            <img
              src={stipe}
              alt=""
              className="size-10 bg-yellowColor/20  rounded-full p-2 hover:bg-yellowColor cursor-pointer transition-all duration-500 hover:scale-110"
            />
            <img
              src={visa}
              alt=""
              className="size-10 bg-yellowColor/20  rounded-full p-2 hover:bg-yellowColor cursor-pointer transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-6 md:col-span-3 text-center mb-10 md:mb-0 text-white">
          <h1 className="text-xl font-bold text-white font-heading underline underline-offset-8 decoration-yellowColor  mb-4">
            Service
          </h1>
          <ul className="flex flex-col gap-3 uppercase text-sm tracking-wider">
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

        <div className="col-span-12 sm:col-span-6 md:col-span-3 text-center mb-10 md:mb-0 text-white">
          <h1 className="text-xl font-bold text-white font-heading underline underline-offset-8 decoration-yellowColor  mb-4">
            Get Support
          </h1>
          <ul className="flex flex-col gap-3 uppercase text-sm tracking-wider">
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
            <li>
              <Link>How it Work</Link>
            </li>
            <li>
              <Link>Service Gurantee</Link>
            </li>
            <li>
              <Link>Free Consult </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-2 text-center text-white">
          <h1 className="text-xl font-bold text-white font-heading underline underline-offset-8 decoration-yellowColor mb-4">
            Company
          </h1>
          <ul className="flex flex-col gap-3 uppercase text-sm tracking-wider">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms & Condition</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-5 justify-between py-5">
        <div>
          <p className="text-white flex items-center gap-2 text-sm">
            <FaRegCopyright color="yellowColor" /> 2025 Hero Home || All Rights
            Reserved
          </p>
        </div>
        <div className="flex gap-2">
          <Link to={"/https://github.com/kawserbappy1"}>
            <FaFacebook className="text-yellowColor cursor-pointer transition-all duration-500 hover:scale-150" />
          </Link>
          <Link to={"/https://github.com/kawserbappy1"}>
            <FaXTwitter className="text-yellowColor cursor-pointer transition-all duration-500 hover:scale-150" />
          </Link>
          <Link to={"/https://github.com/kawserbappy1"}>
            <FaInstagram className="text-yellowColor cursor-pointer transition-all duration-500 hover:scale-150" />
          </Link>

          <Link to={"/https://github.com/kawserbappy1"}>
            <FaTiktok className="text-yellowColor cursor-pointer transition-all duration-500 hover:scale-150" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
