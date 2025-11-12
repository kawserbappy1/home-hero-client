import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const AboutUs = () => {
  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "1,200+", label: "Service Providers" },
    { number: "15+", label: "Cities Served" },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Customer First",
      description:
        "We prioritize our customers needs and strive to exceed their expectations in every interaction.",
    },
    {
      icon: "⚡",
      title: "Efficiency",
      description:
        "We deliver fast, reliable services without compromising on quality or attention to detail.",
    },
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description:
        "We believe in building lasting relationships through honest communication and transparent pricing.",
    },
    {
      icon: "🌱",
      title: "Innovation",
      description:
        "We continuously improve our platform and services to provide the best experience for our users.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "👩‍💼",
      description: "Former tech executive with 15+ years in service industry",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "👨‍💻",
      description: "Tech innovator with expertise in platform development",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "👩‍🔧",
      description: "Operations specialist ensuring seamless service delivery",
    },
    {
      name: "David Kim",
      role: "Customer Success Lead",
      image: "👨‍💼",
      description: "Dedicated to ensuring exceptional customer experiences",
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
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting you with trusted service professionals for all your
              needs
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We're on a mission to revolutionize the service industry by creating
            a platform that connects customers with verified, professional
            service providers. Our goal is to make finding and booking reliable
            services as simple and transparent as possible.
          </p>
          <div className="bg-greenColor rounded-xl p-8 text-yellowColor">
            <p className="text-xl font-semibold">
              "We believe everyone deserves access to quality services from
              trusted professionals, without the hassle of endless searching and
              uncertainty."
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-greenColor mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2020, our platform was born from a simple
                observation: finding reliable service professionals was often
                frustrating and time-consuming. Traditional methods left
                customers guessing about quality, pricing, and reliability.
              </p>
              <p>
                We set out to change that by creating a platform where customers
                could easily find vetted professionals, compare services, read
                genuine reviews, and book with confidence.
              </p>
              <p>
                Today, we're proud to have built a community of thousands of
                trusted service providers and helped tens of thousands of
                customers get the services they need with peace of mind.
              </p>
            </div>
          </div>
          <div className="bg-greenColor rounded-2xl p-8 text-yellowColor text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">
              From Startup to Industry Leader
            </h3>
            <p className="text-yellowColor/90">
              In just a few years, we've grown from a small team with a big idea
              to a platform trusted by thousands across multiple cities.
            </p>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-greenColor font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for reliable services or you're a
            professional looking to grow your business, we'd love to have you as
            part of our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-greenColor text-yellowColor px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellowColor hover:text-greenColor transition-all duration-200"
            >
              Find Services
            </Link>
            <Link
              to="/careers"
              className="border border-greenColor text-greenColor px-8 py-4 rounded-lg font-bold text-lg hover:bg-greenColor hover:text-yellowColor transition-all duration-200"
            >
              Join Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
