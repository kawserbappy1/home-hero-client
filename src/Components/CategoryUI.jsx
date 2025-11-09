import React from "react";
import { FaPaintRoller } from "react-icons/fa";
import {
  MdCarpenter,
  MdOutlineElectricalServices,
  MdPlumbing,
} from "react-icons/md";
import { SiCcleaner } from "react-icons/si";

const CategoryUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  justify-center items-center gap-3 container mx-auto px-5 py-20 bg-bg2 my-20">
      <div className="flex flex-col items-center border border-white p-5 shadow-xl rounded-md bg-white">
        <SiCcleaner className="text-4xl text-greenColor" />
        <h2 className=" font-heading text-2xl capitalize font-bold mt-5 text-greenColor">
          cleaning service
        </h2>
      </div>
      <div className="flex flex-col items-center border border-white p-5 shadow-xl rounded-md">
        <MdOutlineElectricalServices className="text-4xl text-greenColor" />
        <h2 className=" font-heading text-2xl capitalize font-bold mt-5 text-greenColor">
          elctrical service
        </h2>
      </div>
      <div className="flex flex-col items-center border border-white p-5 shadow-xl rounded-md bg-white">
        <MdPlumbing className="text-4xl text-greenColor" />
        <h2 className=" font-heading text-2xl capitalize font-bold mt-5 text-greenColor">
          plumber service
        </h2>
      </div>
      <div className="flex flex-col items-center border border-white p-5 shadow-xl rounded-md">
        <MdCarpenter className="text-4xl text-greenColor" />
        <h2 className=" font-heading text-2xl capitalize font-bold mt-5 text-greenColor">
          carpentry service
        </h2>
      </div>
      <div className="flex flex-col items-center border border-white p-5 shadow-xl rounded-md bg-white">
        <FaPaintRoller className="text-4xl text-greenColor" />
        <h2 className=" font-heading text-2xl capitalize font-bold mt-5 text-greenColor">
          Painting service
        </h2>
      </div>
    </div>
  );
};

export default CategoryUI;
