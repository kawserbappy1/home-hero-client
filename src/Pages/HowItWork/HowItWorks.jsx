import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Browse Services",
      description:
        "Explore our wide range of professional services. Use filters to find exactly what you need based on category, price, and ratings.",
      icon: "🔍",
      features: [
        "Search by category",
        "Filter by price",
        "Read reviews",
        "Compare providers",
      ],
    },
    {
      number: "02",
      title: "Book & Schedule",
      description:
        "Select your preferred service and schedule an appointment. Choose a time that works best for you with our flexible booking system.",
      icon: "📅",
      features: [
        "Choose service",
        "Select time slot",
        "Confirm details",
        "Instant booking",
      ],
    },
    {
      number: "03",
      title: "Service Delivery",
      description:
        "Our verified professionals will arrive on time and deliver high-quality service. Track progress and communicate directly with your provider.",
      icon: "⚡",
      features: [
        "Real-time tracking",
        "Professional service",
        "Quality assurance",
        "Live updates",
      ],
    },
    {
      number: "04",
      title: "Review & Pay",
      description:
        "After service completion, review your experience and make secure payments. Your feedback helps us maintain quality standards.",
      icon: "⭐",
      features: [
        "Secure payment",
        "Leave review",
        "Rate service",
        "Get support",
      ],
    },
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" },
    { number: "15min", label: "Average Response Time" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-bg2 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/"
              className="block text-left underline underline-offset-8 decoration-yellowColor flex items-center gap-1 mb-5"
            >
              <IoIosArrowRoundBack size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-heading">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent, and hassle-free process to get the services
              you need
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-2 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-greenColor rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl md:text-5xl font-bold text-gray-200 font-heading">
                        {step.number}
                      </span>
                      <h3 className=" text-xl md:text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 text-greenColor mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-greenColor rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-yellowColor mb-8">
              Why Choose Our Platform?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-yellowColor"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-yellowColor/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their
              service needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-greenColor text-yellowColor px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellowColor hover:text-greenColor transition-all duration-200"
              >
                Browse Services
              </Link>
              <Link
                to="/free-consult"
                className="border border-greenColor text-greenColor px-8 py-4 rounded-lg font-bold text-lg hover:bg-greenColor hover:text-yellowColor transition-all duration-200"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
