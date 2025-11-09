import React from "react";
import {
  Leaf,
  Zap,
  Cloud,
  Rocket,
  Train,
  Flower,
  CheckCircle,
  Diamond,
  Landmark,
} from "lucide-react";
import per from "../assets/per1.jpg";
import per1 from "../assets/per2.jpg";
import per2 from "../assets/per3.jpg";
import per3 from "../assets/per4.jpg";
import per4 from "../assets/per5.jpg";
const testimonials = [
  {
    company: "Powersurge",
    quote:
      "Untitled has been a lifesaver for our team—everything we need is right at our fingertips, and it helps us jump right into new design projects.",
    author: "Nikolas Gibbons",
    title: "Product Designer, Powersurge",
    avatarUrl: per,
    Icon: Rocket,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    company: "Goodwell",
    quote:
      "Untitled is our secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.",
    author: "Ammar Foley",
    title: "UX Designer, Goodwell",
    avatarUrl: per1,
    Icon: Leaf,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    company: "StackEd Lab",
    quote:
      "Our workflow has improved dramatically since we started using Untitled and it’s become an integral part of our workflow. It’s easy to use, and the resources are top-notch, I recommend it to everyone!",
    author: "Mathilde Lewis",
    title: "Project Lead, StackEd Lab",
    avatarUrl: per2,
    Icon: Cloud,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    company: "Railspeed",
    quote: "We love Untitled! It's made the design process super streamlined.",
    author: "Marco Kelly",
    title: "UI Designer, Railspeed",
    avatarUrl: per3,
    Icon: Train,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    company: "Quixotic",
    quote:
      "Untitled is hands down the best design library we’ve used. It has literally everything we need to get started for any possible project.",
    author: "Florence Shaw",
    title: "Web Designer, Quixotic",
    avatarUrl: per4,
    Icon: Zap,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    company: "Magnolia",
    quote:
      "Untitled is an absolute game-changer for our projects. We can't imagine going back to how we used to work without it.",
    author: "Stefan Sears",
    title: "UI/UX Designer, Magnolia",
    avatarUrl: per1,
    Icon: Flower,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    company: "Wildorcrafted",
    quote:
      "Starting projects used to feel daunting, but Untitled simplifies everything. We've used it for both small and large projects, and it never disappoints.",
    author: "Zaid Schwartz",
    title: "Founder, Wildorcrafted",
    avatarUrl: per3,
    Icon: Diamond,
    iconBg: "bg-lime-50",
    iconColor: "text-lime-600",
  },
  {
    company: "Solaris Energy",
    quote:
      "With Untitled, we can focus more on design and less on the tedious setup work. Best money ever spent.",
    author: "Owen Garcia",
    title: "CTO, Solaris Energy",
    avatarUrl: per,
    Icon: Landmark,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    company: "Ikigai Labs",
    quote:
      "Untitled has been a real time-saver for us. It's organized, efficient, and keeps us moving forward with every project.",
    author: "Harriet Rojas",
    title: "Product Designer, Ikigai Labs",
    avatarUrl: per2,
    Icon: Diamond,
    iconBg: "bg-gray-50",
    iconColor: "text-gray-600",
  },
];

const TestimonialCard = ({
  company,
  quote,
  author,
  title,
  avatarUrl,
  Icon,
  iconBg,
  iconColor,
}) => (
  <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between h-full">
    <div
      data-aos="fade-left"
      data-aos-duration="4000"
      className="flex items-center space-x-3 mb-4"
    >
      <div className={`p-2 rounded-lg ${iconBg}`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="flex items-center space-x-1">
        <span className="text-greenColor font-semibold">{company}</span>
        <CheckCircle className="w-4 h-4 text-blue-500" />
      </div>
    </div>

    <blockquote className="text-lg font-medium text-gray-700 leading-relaxed mb-6">
      &ldquo;{quote}&rdquo;
    </blockquote>

    <div className="flex items-center mt-auto">
      <img
        src={avatarUrl}
        alt={`Avatar of ${author}`}
        className="w-10 h-10 rounded-full mr-4 object-cover border-2 border-yellowColor"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/40x40/6b7280/ffffff?text=👤";
        }}
      />
      <div>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-semibold text-gray-900">{author}</span>
          <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
        </div>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialGrid() {
  return (
    <div className="py-16 sm:py-24 ">
      <div className="container mx-auto px-2 sm:px-6 ">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading">
            Our Reviews
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear first-hand from our incredible community of customers.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          data-aos="fade-down"
          data-aos-duration="4000"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
