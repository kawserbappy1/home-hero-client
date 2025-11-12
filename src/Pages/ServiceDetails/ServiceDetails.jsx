import Loader from "../../Components/Loader";
import { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AuthContext } from "../../Context/AuthContex";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("overview");
  const [services, setServices] = useState({});
  const [bookingLoading, setBookingLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const serviceModalRef = useRef(null);

  useEffect(() => {
    fetch(`https://hero-home-server-sage.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user, id]);

  useEffect(() => {
    if (services._id) {
      fetchReviews();
    }
  }, [services._id]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    if (tabParam === "reviews") {
      setSelectedTab("reviews");

      setTimeout(() => {
        const reviewsSection = document.getElementById("reviews-section");
        if (reviewsSection) {
          reviewsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 800);
    }
  }, []);

  const fetchReviews = () => {
    setReviewsLoading(true);
    fetch(`https://hero-home-server-sage.vercel.app/reviews/${services._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
        } else {
          setReviews([]);
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching reviews:", err);
        setReviewsLoading(false);
      });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2f5349",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://hero-home-server-sage.vercel.app/services/${services._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            navigate("/my-services");
            Swal.fire({
              title: "Deleted!",
              text: "Your service has been deleted.",
              icon: "success",
              confirmButtonColor: "#2f5349",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handleBooking = async () => {
    setBookingLoading(true);
    const bookingData = {
      serviceId: services._id,
      serviceName: services.serviceName,
      category: services.category,
      priceperhour: services.priceperhour,
      serviceurl: services.serviceurl,
      providername: services.providername,
      provideremail: services.provideremail,
      providerimage: services.providerimage,
      providernumber: services.providernumber,
      userEmail: user.email,
      userName: user.displayName || "User",
      bookingDate: new Date().toISOString(),
      status: "pending",
    };

    try {
      const response = await fetch(
        "https://hero-home-server-sage.vercel.app/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const result = await response.json();

      if (result.insertedId) {
        serviceModalRef.current.close();

        Swal.fire({
          title: "Booking Successful!",
          text: "Your service has been booked successfully.",
          icon: "success",
          confirmButtonText: "View My Bookings",
          confirmButtonColor: "#2f5349",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/my-booking");
          }
        });
      } else {
        throw new Error("Failed to book service");
      }
    } catch (error) {
      console.error("Booking error:", error);
      Swal.fire({
        title: "Booking Failed!",
        text: "There was an error booking the service. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setBookingLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (!services || Object.keys(services).length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

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
              Go to Service Page
            </Link>
            <span className="inline-block px-4 py-2 bg-green-100 text-greenColor rounded-full text-sm font-semibold mb-4">
              {services.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-heading">
              {services.serviceName}
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                {renderStars(services.serviceReview)}
                <span className="ml-2 text-gray-700 font-semibold">
                  {services.serviceReview}
                </span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">
                {services.providerexperence} Experience
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6"
            >
              {loading && (
                <div className="w-full h-96 bg-gray-200 animate-pulse flex items-center justify-center">
                  <Loader />
                </div>
              )}
              <img
                src={services.serviceurl}
                alt={services.serviceName}
                className={`w-full h-96 object-cover transition-opacity duration-300 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setLoading(false)}
              />
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex space-x-4 border-b border-gray-200">
                {["overview", "features", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`pb-4 px-2 font-medium capitalize transition-colors duration-200 ${
                      selectedTab === tab
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="pt-6">
                {selectedTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="prose max-w-none"
                  >
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {services.description}
                    </p>
                  </motion.div>
                )}

                {selectedTab === "features" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
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
                      </div>
                      <span className="text-gray-700">
                        Professional Service
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
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
                      </div>
                      <span className="text-gray-700">Trusted Service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
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
                      </div>
                      <span className="text-gray-700">
                        Money back guarantee
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
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
                      </div>
                      <span className="text-gray-700">
                        Use Modern Technology
                      </span>
                    </div>
                  </motion.div>
                )}

                {selectedTab === "reviews" && (
                  <motion.div
                    id="reviews-section"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Customer Reviews
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center">
                            {renderStars(services.serviceReview)}
                          </div>
                          <span className="text-gray-600">
                            {reviews.length}{" "}
                            {reviews.length === 1 ? "review" : "reviews"}
                          </span>
                        </div>
                      </div>

                      {user && (
                        <button
                          onClick={() => {
                            window.location.href = "/my-booking";
                          }}
                          className="bg-greenColor text-yellowColor px-4 py-2 rounded-lg hover:bg-yellowColor hover:text-greenColor transition-all duration-200 text-sm font-medium"
                        >
                          Write a Review
                        </button>
                      )}
                    </div>

                    {reviewsLoading && (
                      <div className="flex justify-center py-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-greenColor"></div>
                      </div>
                    )}

                    {!reviewsLoading && reviews.length > 0 ? (
                      <div className="space-y-6">
                        {reviews.map((review, index) => (
                          <motion.div
                            key={review._id || index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-lg p-6 border border-gray-200"
                          >
                            <div className="flex items-start flex-col md:flex-row justify-between mb-4 gap-2 md:gap-0">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                  <span className="text-green-600 font-semibold text-sm">
                                    {review.userName?.charAt(0).toUpperCase() ||
                                      "U"}
                                  </span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">
                                    {review.userName}
                                  </h4>
                                  <div className="flex flex-col md:flex-row items-center space-x-2">
                                    <div className="flex">
                                      {renderStars(review.rating)}
                                    </div>
                                    <span className="text-sm text-gray-500">
                                      {new Date(
                                        review.reviewDate
                                      ).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                      })}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                Verified Booking
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {review.comment}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      !reviewsLoading && (
                        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                          <svg
                            className="w-16 h-16 text-gray-400 mx-auto mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            No Reviews Yet
                          </h4>
                          <p className="text-gray-600 max-w-md mx-auto">
                            Be the first to share your experience with this
                            service. Your review will help others make better
                            decisions.
                          </p>
                          {user && (
                            <button
                              onClick={() => {
                                window.location.href = "/my-booking";
                              }}
                              className="mt-4 bg-greenColor text-yellowColor px-6 py-2 rounded-lg hover:bg-yellowColor hover:text-white transition-all duration-200 font-medium"
                            >
                              Write First Review
                            </button>
                          )}
                        </div>
                      )
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ${services.priceperhour}
                    </span>
                    <span className="text-gray-500">/ hour</span>
                  </div>

                  {services.priceContact && (
                    <p className="text-orange-600 text-sm mb-4">
                      * Contact for exact pricing
                    </p>
                  )}

                  <motion.button
                    onClick={() => serviceModalRef.current.showModal()}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={user?.email === services.provideremail}
                    className={`w-full font-bold py-4 px-6 rounded-xl text-lg transition-colors duration-200
                    ${
                      user?.email === services.provideremail
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-greenColor hover:bg-yellowColor text-yellowColor hover:text-greenColor"
                    }`}
                  >
                    Book Now
                  </motion.button>

                  <dialog
                    ref={serviceModalRef}
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <h3 className="font-bold text-2xl font-heading text-center mb-6">
                        {services.serviceName}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between bg-greenColor/30 text-greenColor px-4 py-3 rounded-lg">
                          <h3 className="font-medium">Service Provider:</h3>
                          <h3 className="font-bold">{services.providername}</h3>
                        </div>
                        <div className="flex items-center justify-between bg-greenColor/30 text-greenColor px-4 py-3 rounded-lg">
                          <h3 className="font-medium">Service Review:</h3>
                          <div className="flex items-center gap-2">
                            <span className="font-bold">
                              {services.serviceReview}
                            </span>
                            <div className="flex">
                              {renderStars(services.serviceReview)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-greenColor/30 text-greenColor px-4 py-3 rounded-lg">
                          <h3 className="font-medium">Experience:</h3>
                          <h3 className="font-bold">
                            {services.providerexperence}
                          </h3>
                        </div>
                        <div className="flex items-center justify-between bg-greenColor/30 text-greenColor px-4 py-3 rounded-lg">
                          <h3 className="font-medium">Price:</h3>
                          <h3 className="font-bold">
                            ${services.priceperhour} / hour
                          </h3>
                        </div>
                        {user && (
                          <div className="flex items-center justify-between bg-blue-50 text-blue-700 px-4 py-3 rounded-lg">
                            <h3 className="font-medium">Booked by:</h3>
                            <h3 className="font-bold">
                              {user.displayName || user.email}
                            </h3>
                          </div>
                        )}
                      </div>
                      <div className="modal-action flex gap-3 mt-6">
                        <button
                          onClick={handleBooking}
                          disabled={bookingLoading}
                          className="btn bg-greenColor text-yellowColor hover:bg-yellowColor hover:text-greenColor border-0"
                        >
                          {bookingLoading ? (
                            <>
                              <span className="loading loading-spinner"></span>
                              Booking...
                            </>
                          ) : (
                            "Confirm Booking"
                          )}
                        </button>
                        <button
                          onClick={() => serviceModalRef.current.close()}
                          className="btn bg-gray-500 text-white hover:bg-gray-600 border-0"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </dialog>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Service Provider
                </h3>

                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={services.providerimage}
                    alt={services.providername}
                    className="w-16 h-16 rounded-full object-cover border-2 border-greenColor"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {services.providername}
                    </h4>
                    <p className="text-greenColor text-sm">
                      {services.providerexperence}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{services.providernumber}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{services.provideremail}</span>
                  </div>
                </div>
                <button
                  disabled={user?.email === services.provideremail}
                  className={`w-full border font-semibold py-3 px-6 rounded-xl mt-3 transition-colors duration-200
                    ${
                      user?.email === services.provideremail
                        ? "border-gray-400 text-gray-400 bg-gray-100 cursor-not-allowed"
                        : "border-greenColor text-greenColor hover:bg-greenColor hover:text-yellowColor"
                    }`}
                >
                  <Link to={"/service-provider-info"}>Contact Provider</Link>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Service Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold capitalize">
                      {services.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-semibold">
                      {services.providerexperence}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <span className="font-semibold">
                      {services.serviceReview}/5
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reviews:</span>
                    <span className="font-semibold">{reviews.length}</span>
                  </div>
                </div>
              </motion.div>

              {user && user.email === services.provideremail && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
                >
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/update-service/${services._id}`}
                      className="bg-greenColor text-yellowColor px-6 py-3 font-bold rounded-md hover:bg-yellowColor hover:text-greenColor transition-all duration-300 text-center"
                    >
                      Update your Service
                    </Link>
                    <button
                      onClick={handleDelete}
                      className="bg-red-600 text-white px-6 py-3 font-bold rounded-md hover:bg-red-700 transition-all duration-300"
                    >
                      Delete your Service
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
