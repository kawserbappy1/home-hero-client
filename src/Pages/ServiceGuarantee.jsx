import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const ServiceGuarantee = () => {
  const guarantees = [
    {
      icon: "✅",
      title: "Quality Guarantee",
      description:
        "Every service is backed by our 100% quality guarantee. If you're not satisfied, we'll make it right.",
      features: [
        "Professional standards",
        "Quality checked",
        "Satisfaction guaranteed",
        "Free re-service if needed",
      ],
    },
    {
      icon: "🛡️",
      title: "Safety & Insurance",
      description:
        "All services are fully insured. Your property and our providers are protected during service delivery.",
      features: [
        "Liability insurance",
        "Background verified providers",
        "Safe work practices",
        "Property protection",
      ],
    },
    {
      icon: "💰",
      title: "Price Match Guarantee",
      description:
        "Find a lower price for the same service? We'll match it and give you an additional 10% off.",
      features: [
        "Competitive pricing",
        "No hidden fees",
        "Transparent quotes",
        "Price match promise",
      ],
    },
    {
      icon: "⏰",
      title: "On-Time Guarantee",
      description:
        "We value your time. If our provider is late, you'll receive a discount on your service.",
      features: [
        "Punctual service",
        "Real-time tracking",
        "Timely updates",
        "Late arrival discount",
      ],
    },
    {
      icon: "👨‍💼",
      title: "Expert Providers",
      description:
        "All our service providers are thoroughly vetted, trained, and experienced professionals.",
      features: [
        "Background checks",
        "Skill verified",
        "Professional training",
        "Experience validated",
      ],
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist you with any questions or concerns.",
      features: [
        "24/7 helpline",
        "Live chat support",
        "Email support",
        "Emergency services",
      ],
    },
  ];

  const commitmentItems = [
    {
      title: "Customer Satisfaction",
      percentage: "99%",
      description: "of customers rate our services 4 stars or higher",
    },
    {
      title: "On-Time Arrival",
      percentage: "95%",
      description: "of services are delivered on or before scheduled time",
    },
    {
      title: "Issue Resolution",
      percentage: "100%",
      description: "of customer concerns are resolved within 24 hours",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
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
              Service Guarantee
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your peace of mind is our priority. We stand behind every service
              we provide.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Guarantee Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-greenColor to-green-600 rounded-2xl p-8 text-center text-white mb-12 shadow-xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-4xl font-bold mb-6">Our Promise to You</h2>
            <p className="text-xl mb-8 opacity-90">
              We're so confident in the quality of our services that we back
              them with comprehensive guarantees. Your satisfaction is
              guaranteed, period.
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-6 inline-block">
              <p className="text-2xl font-bold">
                "If you're not happy, we're not happy. We'll make it right."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guarantee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{guarantee.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 mb-6">{guarantee.description}</p>
              <ul className="space-y-2">
                {guarantee.features.map((feature, featureIndex) => (
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
            </motion.div>
          ))}
        </div>

        {/* Commitment Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Our Commitment in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitmentItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-greenColor mb-2">
                  {item.percentage}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Experience the Difference
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of customers who trust our service guarantees every
            day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-greenColor text-yellowColor px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellowColor hover:text-greenColor transition-all duration-200"
            >
              Book a Service
            </Link>
            <Link
              to="/contact-us"
              className="border border-greenColor text-greenColor px-8 py-4 rounded-lg font-bold text-lg hover:bg-greenColor hover:text-yellowColor transition-all duration-200"
            >
              Ask Questions
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceGuarantee;
