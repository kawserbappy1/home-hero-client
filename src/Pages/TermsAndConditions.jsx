import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: `By accessing and using the ServiceProvider platform (the "Platform"), you accept and agree to be bound by the terms and provision of this agreement.

Additionally, when using particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: "Description of Service",
      content: `ServiceProvider is an online platform that connects customers with service professionals. We provide:

• A platform for customers to discover, compare, and book services from verified professionals
• Tools for service providers to manage their business and connect with customers
• Payment processing and scheduling services
• Customer support and dispute resolution services

We act as an intermediary between customers and service providers and are not a party to any agreements between them.`,
    },
    {
      title: "User Accounts",
      content: `To access certain features of the Platform, you must register for an account. You agree to:

• Provide accurate, current, and complete information during the registration process
• Maintain and promptly update your account information
• Maintain the security of your password and accept all risks of unauthorized access
• Notify us immediately of any breach of security or unauthorized use of your account
• Be responsible for all activities that occur under your account

You must be at least 18 years old to create an account and use our services.`,
    },
    {
      title: "Booking and Payments",
      content: `When you book a service through our Platform:

• You agree to pay all charges at the rates in effect for the services booked
• We use third-party payment processors to handle all payment transactions
• All payments are final and non-refundable, except as required by law or as explicitly stated in our cancellation policy
• Service providers set their own prices, and we are not responsible for pricing errors
• You authorize us to charge your chosen payment method for the services you book

Cancellation policies vary by service provider and are displayed at the time of booking.`,
    },
    {
      title: "Service Provider Relationships",
      content: `ServiceProvider is not an employer of service providers. Service providers are independent contractors responsible for:

• The quality and timeliness of their services
• Maintaining appropriate licenses, insurance, and qualifications
• Complying with all applicable laws and regulations
• Their own tax obligations

We do not endorse any particular service provider and make no representations about the quality of their services.`,
    },
    {
      title: "User Conduct",
      content: `You agree not to use the Platform to:

• Violate any laws, regulations, or third-party rights
• Post false, inaccurate, misleading, or defamatory content
• Harass, abuse, or harm another person
• Distribute viruses or other harmful computer code
• Spam or send unsolicited messages
• Impersonate any person or entity
• Interfere with the proper working of the Platform

We reserve the right to investigate and take appropriate legal action against anyone who violates this provision.`,
    },
    {
      title: "Intellectual Property",
      content: `The Platform and its original content, features, and functionality are owned by ServiceProvider and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

You may not:

• Copy, modify, or create derivative works of the Platform
• Reverse engineer or attempt to extract the source code
• Remove any copyright or other proprietary notations
• Use our trademarks without prior written permission

You retain ownership of any content you post on the Platform, but grant us a license to use it for platform operations.`,
    },
    {
      title: "Termination",
      content: `We may terminate or suspend your account and bar access to the Platform immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.

Upon termination, your right to use the Platform will immediately cease. If you wish to terminate your account, you may simply discontinue using the Platform or delete your account through your account settings.

All provisions of the Terms which by their nature should survive termination shall survive termination, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.`,
    },
    {
      title: "Limitation of Liability",
      content: `To the fullest extent permitted by applicable law, ServiceProvider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

• Your access to or use of or inability to access or use the Platform
• Any conduct or content of any third party on the Platform
• Any content obtained from the Platform
• Unauthorized access, use, or alteration of your transmissions or content

Our total cumulative liability to you for all claims arising from or related to the Platform shall not exceed the greater of $100 or the amount you have paid us in the past six months.`,
    },
    {
      title: "Disclaimer of Warranties",
      content: `Your use of the Platform is at your sole risk. The Platform is provided on an "AS IS" and "AS AVAILABLE" basis. The Platform is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.

ServiceProvider does not warrant that:

• The Platform will function uninterrupted, secure, or available at any particular time or location
• Any errors or defects will be corrected
• The Platform is free of viruses or other harmful components
• The results of using the Platform will meet your requirements

Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.`,
    },
    {
      title: "Governing Law",
      content: `These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`,
    },
    {
      title: "Changes to Terms",
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Platform after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Platform.`,
    },
    {
      title: "Contact Information",
      content: `If you have any questions about these Terms and Conditions, please contact us:

• By email: legal@serviceprovider.com
• By visiting this page on our website: /contact-us
• By phone: +1 (555) 123-4567
• By mail: 123 Legal Avenue, Compliance City, CC 12345

We will make every effort to resolve any concerns you may have regarding these Terms.`,
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Last updated: January 15, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <p className="text-gray-600 leading-relaxed">
              Please read these Terms and Conditions ("Terms", "Terms and
              Conditions") carefully before using the ServiceProvider website
              and mobile application (the "Platform") operated by
              ServiceProvider ("us", "we", or "our").
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Your access to and use of the Platform is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply
              to all visitors, users, and others who access or use the Platform.
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agreement Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-greenColor rounded-2xl p-8 text-center text-yellowColor mt-8"
          >
            <h3 className="text-2xl font-bold mb-4">Important Legal Notice</h3>
            <p className="text-yellowColor/90 mb-6">
              These Terms and Conditions constitute a legally binding agreement
              between you and ServiceProvider. By using our Platform, you
              acknowledge that you have read, understood, and agree to be bound
              by these terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/privacy-policy"
                className="bg-yellowColor text-greenColor px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200"
              >
                View Privacy Policy
              </Link>
              <Link
                to="/contact-us"
                className="border border-yellowColor text-yellowColor px-6 py-3 rounded-lg font-semibold hover:bg-yellowColor hover:text-greenColor transition-all duration-200"
              >
                Contact Legal Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
