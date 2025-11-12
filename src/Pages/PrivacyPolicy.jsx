import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: `We collect information to provide better services to all our users. The types of information we collect include:

• Personal Information: When you create an account, we collect your name, email address, phone number, and other contact details.
• Service Information: Details about the services you book, including service type, timing, and provider information.
• Payment Information: We collect payment details when you make transactions, though sensitive payment information is processed by secure third-party payment processors.
• Usage Data: Information about how you use our platform, including IP address, browser type, and device information.
• Communications: Records of your communications with us and with service providers through our platform.`,
    },
    {
      title: "How We Use Your Information",
      content: `We use the information we collect for the following purposes:

• To provide and maintain our services, including processing bookings and facilitating communication between users and service providers.
• To improve and personalize your experience on our platform.
• To communicate with you about your account, bookings, and platform updates.
• To ensure the security and integrity of our platform.
• To comply with legal obligations and prevent fraudulent activities.
• To analyze platform usage and improve our services.`,
    },
    {
      title: "Information Sharing",
      content: `We do not sell your personal information. We may share your information in the following circumstances:

• With Service Providers: We share necessary information with service providers to facilitate booked services.
• Legal Requirements: When required by law or to protect our rights and the rights of others.
• Business Transfers: In connection with a merger, acquisition, or sale of assets.
• With Your Consent: When you explicitly consent to sharing your information.

We require all third parties to respect the security of your personal data and to treat it in accordance with the law.`,
    },
    {
      title: "Data Security",
      content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of sensitive data in transit and at rest
• Regular security assessments and testing
• Access controls and authentication mechanisms
• Secure data storage and processing practices

While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`,
    },
    {
      title: "Your Rights",
      content: `Depending on your location, you may have the following rights regarding your personal information:

• Access: You can request copies of your personal information.
• Correction: You can request that we correct any information you believe is inaccurate.
• Deletion: You can request that we erase your personal information under certain conditions.
• Restriction: You can request that we restrict the processing of your personal information.
• Data Portability: You can request that we transfer the data we have collected to another organization.
• Objection: You can object to our processing of your personal information.

To exercise these rights, please contact us using the information provided below.`,
    },
    {
      title: "Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to track activity on our platform and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.

Types of cookies we use:
• Essential Cookies: Required for the platform to function properly
• Preference Cookies: Remember your settings and preferences
• Analytics Cookies: Help us understand how users interact with our platform
• Marketing Cookies: Used to deliver relevant advertisements

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our platform.`,
    },
    {
      title: "Children's Privacy",
      content: `Our platform is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.

If we become aware that we have collected personal information from children under 13 without verification of parental consent, we take steps to remove that information from our servers.`,
    },
    {
      title: "Changes to This Policy",
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

We will let you know via email and/or a prominent notice on our platform prior to the change becoming effective. You are advised to review this Privacy Policy periodically for any changes.

Changes to this Privacy Policy are effective when they are posted on this page.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us:

• By email: privacy@serviceprovider.com
• By visiting this page on our website: /contact-us
• By phone: +1 (555) 123-4567
• By mail: 123 Privacy Lane, Security City, SC 12345

We will respond to your inquiry within 30 days.`,
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
              to="/"
              className="block text-left underline underline-offset-8 decoration-yellowColor flex items-center gap-1 mb-5"
            >
              <IoIosArrowRoundBack size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-heading">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Last updated: January 15, 2024
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
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <p className="text-gray-600 leading-relaxed">
              At ServiceProvider, we are committed to protecting your privacy
              and ensuring the security of your personal information. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our platform and services.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Please read this Privacy Policy carefully. By accessing or using
              our platform, you acknowledge that you have read, understood, and
              agree to be bound by all the terms of this Privacy Policy.
            </p>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-greenColor rounded-2xl p-8 text-center text-yellowColor mt-8"
          >
            <h3 className="text-2xl font-bold mb-4">Your Privacy Matters</h3>
            <p className="text-yellowColor/90 mb-6">
              We are committed to being transparent about our privacy practices
              and giving you control over your personal information.
            </p>
            <Link
              to="/contact-us"
              className="bg-yellowColor text-greenColor px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-200 inline-block"
            >
              Contact Privacy Team
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
