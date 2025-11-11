import React from "react";
import { CheckCircle, Zap } from "lucide-react";
const pricingPlans = [
  {
    name: "General",
    price: "25.00",
    isPopular: false,
    bgColor: "bg-[#fcf8e3]",
    iconBg: "bg-[#f5eece]",
    buttonColor: "bg-[#ffd640]",
    features: [
      "Carpet Cleaning",
      "Bathroom Cleaning",
      "Floor Cleaning",
      "Bedroom Cleaning",
    ],
  },
  {
    name: "Pro Max",
    price: "45.00",
    isPopular: true,
    bgColor: "bg-[#2f5349]",
    iconBg: "bg-[#557868]",
    buttonColor: "bg-[#ffd640]",
    features: [
      "Carpet Cleaning",
      "Bathroom Cleaning",
      "Floor Cleaning",
      "Bedroom Cleaning",
    ],
  },
  {
    name: "Premium",
    price: "65.00",
    isPopular: false,
    bgColor: "bg-[#fcf8e3]",
    iconBg: "bg-[#f5eece]",
    buttonColor: "bg-[#ffd640]",
    features: [
      "Carpet Cleaning",
      "Bathroom Cleaning",
      "Floor Cleaning",
      "Bedroom Cleaning",
    ],
  },
];

const PriceCard = ({ plan }) => {
  const textColor = plan.isPopular ? "text-white" : "text-[#2f5349]";
  const priceColor = plan.isPopular ? "text-white" : "text-[#2f5349]";
  const serviceColor = plan.isPopular ? "text-[#e0e9d6]" : "text-gray-700";
  const checkColor = plan.isPopular ? "text-yellow-400" : "text-[#ffd640]";

  return (
    <div
      className={`relative flex flex-col items-center p-8 rounded-[3rem] shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.02] ${plan.bgColor}`}
    >
      {plan.isPopular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#ffd640] text-[#2f5349] font-bold text-sm px-5 py-2 rounded-full shadow-lg whitespace-nowrap font-heading">
          Most Popular
        </div>
      )}

      <h2
        className={`text-2xl font-semibold mb-6 pt-4 font-heading ${
          plan.isPopular ? "text-white" : "text-[#2f5349]"
        }`}
      >
        {plan.name}
      </h2>

      <div
        className={`p-5 rounded-full mb-6 ${plan.iconBg} flex items-center justify-center`}
      >
        <Zap
          className={`w-8 h-8 ${
            plan.isPopular ? "text-white" : "text-[#2f5349]"
          }`}
          strokeWidth={1.5}
        />
      </div>

      <div className="mb-8 text-center">
        <div className={`text-6xl font-extrabold tracking-tight ${priceColor}`}>
          <span className="text-3xl align-top">,</span>
          {plan.price.split(".")[0]}
          <span className="text-3xl align-top">
            .{plan.price.split(".")[1]}
          </span>
        </div>
        <div className={`text-md font-medium mt-1 ${serviceColor}`}>
          /Service
        </div>
      </div>

      <ul className="space-y-4 mb-10 w-full max-w-[200px]">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircle
              className={`w-5 h-5 flex-shrink-0 ${checkColor}`}
              fill={plan.isPopular ? "none" : "currentColor"}
            />
            <span
              className={`font-medium ${
                plan.isPopular ? "text-white" : "text-[#2f5349]"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-xl font-bold text-lg text-[#2f5349] transition-colors duration-200 hover:bg-yellow-400 ${plan.buttonColor}`}
      >
        Get service
      </button>
    </div>
  );
};

export default function PriceTable() {
  return (
    <div className="bg-white py-16 sm:py-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          {pricingPlans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
