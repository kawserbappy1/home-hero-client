import React from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  // Animation variants
  const leftContentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2, // Slight delay for staggered effect
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="bg-bg1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-heading font-bold mb-10 text-greenColor pt-5"
        >
          GET IN TOUCH
        </motion.h4>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-20 items-center"
        >
          {/* Left Text Content - Fades in from left */}
          <motion.div
            variants={leftContentVariants}
            className="mb-12 lg:mb-0 lg:pr-8"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight font-heading">
              Let's Discuss The Details
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Trust Our Skilled Plumbers For Quick Repairs And Quality Service,
              Available Day Or Night
            </p>
          </motion.div>

          {/* Right Form Content - Fades in from right */}
          <motion.div
            variants={rightContentVariants}
            className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg"
          >
            <form className="space-y-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 sm:p-4 text-gray-900 placeholder-gray-500"
                  placeholder="Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 sm:p-4 text-gray-900 placeholder-gray-500"
                  placeholder="Phone Number"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="service" className="sr-only">
                  Service
                </label>
                <input
                  type="text"
                  name="service"
                  id="service"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 sm:p-4 text-gray-900 placeholder-gray-500"
                  placeholder="Service"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="details" className="sr-only">
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows="5"
                  className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 sm:p-4 text-gray-900 placeholder-gray-500 resize-none"
                  placeholder="Details"
                ></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-greenColor hover:bg-yellowColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  Send For Services
                </button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
