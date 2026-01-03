import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How do I book a service?",
      answer:
        "Booking a service is simple! Just navigate to the service you're interested in, click the 'Book Now' button, and follow the prompts to schedule your appointment. You'll receive a confirmation email once your booking is confirmed.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and in some cases, digital wallets like Apple Pay and Google Pay.",
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer:
        "Yes, you can cancel or reschedule your booking up to 24 hours before the scheduled service time without any charges. Cancellations within 24 hours may be subject to a cancellation fee.",
    },
    {
      question: "How are service providers vetted?",
      answer:
        "All our service providers undergo a rigorous verification process including background checks, license verification, and skill assessments. We also monitor their performance through customer reviews and ratings.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Your satisfaction is guaranteed. If you're not happy with the service, contact us within 48 hours and we'll either send another provider to fix the issue or provide a full refund.",
    },
    {
      question: "Are your services insured?",
      answer:
        "Yes, all our services are backed by liability insurance. This protects both you and the service provider in case of any accidental damage during service delivery.",
    },
    {
      question: "How do I leave a review?",
      answer:
        "After your service is completed, you'll receive an email with a link to leave a review. You can also access the review section through your 'My Bookings' page in your account dashboard.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we offer emergency services for urgent situations. These services are available 24/7 and may have different pricing. Contact our support team for immediate assistance.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, booking
              process, and policies
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-8">
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <motion.svg
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5 text-greenColor flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 text-center p-8 bg-bg1 rounded-xl border border-green-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Can't find the answer you're looking for? Please reach out to
                  our friendly team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact-us"
                    className="bg-greenColor text-yellowColor px-6 py-3 rounded-lg font-semibold hover:bg-yellowColor hover:text-greenColor transition-all duration-200"
                  >
                    Contact Support
                  </Link>
                  <button className="border border-greenColor text-greenColor px-6 py-3 rounded-lg font-semibold hover:bg-greenColor hover:text-yellowColor transition-all duration-200">
                    Call Now: +1 (555) 123-4567
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
