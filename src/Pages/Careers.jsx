import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Careers = () => {
  const [activeDepartment, setActiveDepartment] = useState("all");

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "engineering",
      type: "Full-time",
      location: "Remote",
      experience: "5+ years",
      description:
        "We are looking for an experienced Frontend Developer to join our growing team and help build the next generation of our service platform.",
      requirements: [
        "Expertise in React.js and modern JavaScript",
        "Experience with state management (Redux, Context API)",
        "Proficiency in CSS, Tailwind CSS",
        "Knowledge of responsive design principles",
        "Experience with testing frameworks",
      ],
      postedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Product Designer",
      department: "design",
      type: "Full-time",
      location: "San Francisco, CA",
      experience: "3+ years",
      description:
        "Join our design team to create beautiful, intuitive user experiences that help customers find and book services effortlessly.",
      requirements: [
        "Strong portfolio of UI/UX design work",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Experience with user research and testing",
        "Knowledge of design systems",
        "Excellent communication skills",
      ],
      postedDate: "2024-01-10",
    },
    {
      id: 3,
      title: "Customer Success Manager",
      department: "customer-success",
      type: "Full-time",
      location: "New York, NY",
      experience: "2+ years",
      description:
        "Help our customers get the most value from our platform and ensure they have an exceptional experience.",
      requirements: [
        "Experience in customer success or account management",
        "Excellent communication and problem-solving skills",
        "Ability to analyze customer data and feedback",
        "Experience with CRM tools",
        "Passion for helping customers",
      ],
      postedDate: "2024-01-08",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "engineering",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      description:
        "Help us scale our infrastructure and ensure high availability and performance of our platform.",
      requirements: [
        "Experience with AWS, Docker, Kubernetes",
        "Knowledge of CI/CD pipelines",
        "Familiarity with monitoring and logging tools",
        "Experience with infrastructure as code",
        "Strong troubleshooting skills",
      ],
      postedDate: "2024-01-05",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "marketing",
      type: "Full-time",
      location: "Remote",
      experience: "2+ years",
      description:
        "Drive user acquisition and engagement through creative marketing campaigns and strategies.",
      requirements: [
        "Experience in digital marketing",
        "Knowledge of SEO, SEM, and social media",
        "Analytical mindset with data-driven approach",
        "Excellent writing and communication skills",
        "Experience with marketing automation tools",
      ],
      postedDate: "2024-01-03",
    },
    {
      id: 6,
      title: "Sales Development Representative",
      department: "sales",
      type: "Full-time",
      location: "Chicago, IL",
      experience: "1+ years",
      description:
        "Help grow our business by identifying and qualifying new service provider partners.",
      requirements: [
        "Excellent communication and interpersonal skills",
        "Experience with outbound prospecting",
        "Familiarity with CRM systems",
        "Goal-oriented and self-motivated",
        "Ability to work in a fast-paced environment",
      ],
      postedDate: "2024-01-02",
    },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "engineering", name: "Engineering" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "sales", name: "Sales" },
    { id: "customer-success", name: "Customer Success" },
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Competitive Salary",
      description:
        "We offer competitive compensation packages including equity",
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance",
    },
    {
      icon: "🏖️",
      title: "Unlimited PTO",
      description: "Take the time you need to recharge and stay productive",
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Flexible remote work options for most positions",
    },
    {
      icon: "📚",
      title: "Learning Budget",
      description: "Annual stipend for professional development and learning",
    },
    {
      icon: "👶",
      title: "Parental Leave",
      description: "Generous paid parental leave for new parents",
    },
  ];

  const filteredJobs =
    activeDepartment === "all"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === activeDepartment);

  const handleApply = (jobTitle) => {
    Swal.fire({
      title: `Apply for ${jobTitle}`,
      text: "You'll be redirected to our application portal. Please have your resume ready.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#2f5349",
      cancelButtonColor: "#d33",
      confirmButtonText: "Continue to Application",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Application Portal",
          text: "This would redirect to our application system in a production environment.",
          icon: "success",
          confirmButtonColor: "#2f5349",
        });
      }
    });
  };

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
              Careers
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our mission to revolutionize the service industry
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We're building the future of service commerce, and we need talented
            people like you to help us get there. Join a team that values
            innovation, collaboration, and making a real impact on people's
            lives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 lg:mb-0">
              Open Positions
            </h2>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setActiveDepartment(dept.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeDepartment === dept.id
                      ? "bg-greenColor text-yellowColor"
                      : "bg-bg2 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {dept.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500">
                      Posted: {new Date(job.postedDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="lg:text-right">
                    <button
                      onClick={() => handleApply(job.title)}
                      className="bg-greenColor text-yellowColor px-6 py-3 rounded-lg font-semibold hover:bg-yellowColor hover:text-greenColor transition-all duration-200 whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No Open Positions
                </h3>
                <p className="text-gray-600 mb-4">
                  There are currently no open positions in this department.
                </p>
                <button
                  onClick={() => setActiveDepartment("all")}
                  className="text-greenColor hover:text-green-600 font-semibold"
                >
                  View all positions
                </button>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-greenColor rounded-2xl p-8 text-center text-yellowColor"
        >
          <h2 className="text-3xl font-bold mb-4">
            Don't See the Perfect Role?
          </h2>
          <p className="text-yellowColor/90 text-lg mb-6 max-w-2xl mx-auto">
            We're always looking for talented people who are passionate about
            our mission. Send us your resume and we'll keep you in mind for
            future opportunities.
          </p>
          <button
            onClick={() => handleApply("General Application")}
            className="bg-yellowColor text-greenColor px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-200"
          >
            Submit General Application
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
