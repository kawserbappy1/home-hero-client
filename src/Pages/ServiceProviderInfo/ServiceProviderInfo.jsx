import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ServiceProviderInfo = () => {
  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 2780 },
    { month: "May", revenue: 1890 },
    { month: "Jun", revenue: 4390 },
  ];

  const customerReviewData = [
    { rating: "5 Stars", count: 45 },
    { rating: "4 Stars", count: 30 },
    { rating: "3 Stars", count: 15 },
    { rating: "2 Stars", count: 5 },
    { rating: "1 Star", count: 2 },
  ];

  const serviceDistributionData = [
    { name: "Consultation", value: 35 },
    { name: "Implementation", value: 25 },
    { name: "Support", value: 20 },
    { name: "Training", value: 20 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const contactMethods = [
    {
      method: "Email",
      value: "provider@example.com",
      icon: "📧",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      method: "Phone",
      value: "+1 (555) 123-4567",
      icon: "📞",
      description: "Call us during business hours (9 AM - 6 PM)",
    },
    {
      method: "Live Chat",
      value: "Available 24/7",
      icon: "💬",
      description: "Instant messaging support through our platform",
    },
    {
      method: "Video Call",
      value: "Schedule Meeting",
      icon: "🎥",
      description: "Book a video consultation at your convenience",
    },
  ];

  const technologyStack = [
    {
      name: "Cloud Infrastructure",
      description: "AWS & Azure cloud services for scalable solutions",
      icon: "☁️",
    },
    {
      name: "AI & Machine Learning",
      description: "Advanced algorithms for intelligent service delivery",
      icon: "🤖",
    },
    {
      name: "Real-time Analytics",
      description: "Live data processing and visualization tools",
      icon: "📊",
    },
    {
      name: "Mobile Integration",
      description: "Cross-platform mobile app support",
      icon: "📱",
    },
  ];

  const serviceSystems = [
    {
      title: "Project Management",
      features: ["Agile Methodology", "Scrum Framework", "Kanban Boards"],
    },
    {
      title: "Quality Assurance",
      features: ["Automated Testing", "Manual Testing", "Performance Testing"],
    },
    {
      title: "Customer Support",
      features: ["24/7 Helpdesk", "Ticketing System", "Knowledge Base"],
    },
    {
      title: "Security & Compliance",
      features: ["GDPR Compliant", "SSL Encryption", "Regular Audits"],
    },
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
              to={`/services`}
              className="block text-left underline underline-offset-8 decoration-yellowColor flex items-center gap-1 mb-5"
            >
              <IoIosArrowRoundBack size={20} />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-heading">
              Service Provider Information
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive overview of our service provider's performance,
              technology stack, and contact methods
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Methods
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.method}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl">{method.icon}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {method.method}
                        </h3>
                        <p className="text-greenColor font-medium mb-2">
                          {method.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Performance Analytics
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Monthly Revenue
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#2f5349"
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Customer Reviews Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={customerReviewData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="rating" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Service Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={serviceDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name} ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serviceDistributionData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Service Systems
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceSystems.map((system, index) => (
                  <motion.div
                    key={system.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {system.title}
                    </h3>
                    <ul className="space-y-2">
                      {system.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-greenColor mr-2"
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
            </motion.div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Modern Technology
              </h2>
              <div className="space-y-4">
                {technologyStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {tech.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {tech.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Stats
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Revenue</span>
                  <span className="font-semibold text-greenColor">$21,060</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Reviews</span>
                  <span className="font-semibold text-greenColor">97</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Avg. Rating</span>
                  <span className="font-semibold text-greenColor">4.5/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-greenColor">2.3h</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-greenColor rounded-2xl shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-yellowColor mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-yellowColor/90 mb-4">
                Contact us today and let's discuss how we can help your business
                grow
              </p>
              <button className="bg-yellowColor text-greenColor px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200">
                Schedule a Call
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderInfo;
