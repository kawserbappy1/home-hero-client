import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContex";
import Swal from "sweetalert2";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = () => {
    fetch(`http://localhost:3000/booking?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setBookings(data.data);
        } else if (Array.isArray(data)) {
          setBookings(data);
        } else {
          setBookings([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
        setLoading(false);
      });
  };

  const handleConfirm = (id) => {
    Swal.fire({
      title: "Confirm Service?",
      text: "Are you sure you want to confirm this service provider?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2f5349",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Update status to "confirmed" in the database
        fetch(`http://localhost:3000/booking/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "confirmed" }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              // Update local state
              setBookings(
                bookings.map((booking) =>
                  booking._id === id
                    ? { ...booking, status: "confirmed" }
                    : booking
                )
              );

              Swal.fire({
                title: "Confirmed!",
                text: "Service provider has been confirmed.",
                icon: "success",
                confirmButtonColor: "#2f5349",
              });
            }
          })
          .catch((err) => {
            console.log("Update error:", err);
            Swal.fire({
              title: "Error!",
              text: "Failed to confirm service provider.",
              icon: "error",
              confirmButtonColor: "#d33",
            });
          });
      }
    });
  };

  const handleLeaveReview = (booking) => {
    Swal.fire({
      title: "Leave a Review",
      html: `
        <div class="text-left">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            <select id="reviewRating" class="w-full border rounded-lg px-3 py-2">
              <option value="5">★★★★★ - Excellent</option>
              <option value="4">★★★★☆ - Good</option>
              <option value="3">★★★☆☆ - Average</option>
              <option value="2">★★☆☆☆ - Poor</option>
              <option value="1">★☆☆☆☆ - Terrible</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2">Review Comment</label>
            <textarea id="reviewComment" class="w-full border rounded-lg px-3 py-2" rows="4" placeholder="Share your experience..."></textarea>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonColor: "#2f5349",
      cancelButtonColor: "#d33",
      confirmButtonText: "Submit Review",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const rating = document.getElementById("reviewRating").value;
        const comment = document.getElementById("reviewComment").value;

        if (!comment.trim()) {
          Swal.showValidationMessage("Please enter a review comment");
          return false;
        }

        return { rating, comment };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Here you would typically send the review to your backend
        console.log("Review submitted:", result.value);

        Swal.fire({
          title: "Thank You!",
          text: "Your review has been submitted successfully.",
          icon: "success",
          confirmButtonColor: "#2f5349",
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This booking will be removed!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            setBookings(bookings.filter((b) => b._id !== id));
            Swal.fire("Deleted!", "Booking has been deleted.", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  // Calculate summary counts
  const totalBookings = bookings.length;
  const confirmedCount = bookings.filter(
    (b) => b.status === "confirmed"
  ).length;
  const pendingCount = bookings.filter((b) => b.status === "pending").length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-greenColor"></div>
        <p className="text-lg font-semibold text-gray-600 ml-4">
          Loading your bookings...
        </p>
      </div>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          You have no bookings Service yet!
        </h2>
        <p className="text-gray-500 mb-6">
          Go to services and book your first service.
        </p>
        <button
          onClick={() => (window.location.href = "/services")}
          className="bg-greenColor text-yellowColor px-6 py-3 rounded-lg font-semibold hover:bg-yellowColor hover:text-white transition-colors duration-200"
        >
          Browse Services
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-greenColor font-heading">
          My Bookings Service
        </h1>

        {/* Summary */}
        <div className="my-6 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Booking Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {totalBookings}
              </div>
              <div className="text-gray-600">Total Bookings</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {confirmedCount}
              </div>
              <div className="text-gray-600">Confirmed</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {pendingCount}
              </div>
              <div className="text-gray-600">Pending</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-greenColor text-yellowColor">
                <tr>
                  <th className="py-4 px-4 text-left font-semibold font-heading">
                    Service Image
                  </th>
                  <th className="py-4 px-4 text-left font-semibold font-heading">
                    Service Name
                  </th>
                  <th className="py-4 px-4 text-center lg:text-left font-semibold font-heading">
                    Provider
                  </th>
                  <th className="py-4 px-4 text-left font-semibold font-heading">
                    Price
                  </th>
                  <th className="py-4 px-4 text-left font-semibold font-heading">
                    Booking Date
                  </th>
                  <th className="py-4 px-4 text-left font-semibold font-heading">
                    Status
                  </th>
                  <th className="py-4 px-4 text-center font-semibold font-heading">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr
                    key={booking._id}
                    className="hover:bg-greenColor/5 transition-colors duration-200"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={booking.serviceurl || booking.serviceImage}
                        alt={booking.serviceName}
                        className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                      />
                    </td>

                    <td className="py-4 px-4">
                      <div className="font-semibold text-gray-800">
                        {booking.serviceName}
                      </div>
                      <div className="text-sm text-gray-500 capitalize">
                        {booking.category}
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={booking.providerimage || booking.providerImage}
                          alt={booking.providername || booking.providerName}
                          className="w-10 h-10 rounded-full object-cover border-2 border-green-200"
                        />
                        <div>
                          <div className="font-medium text-gray-800">
                            {booking.providername || booking.providerName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.provideremail}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4">
                      <div className="text-lg font-bold text-greenColor font-heading">
                        $ {booking.priceperhour || booking.price}
                      </div>
                      <div className="text-sm text-gray-500">per hour</div>
                    </td>

                    <td className="py-4 px-4 text-gray-600">
                      {new Date(
                        booking.bookingDate || booking.date
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </td>

                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          booking.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : booking.status === "cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {booking.status || "pending"}
                      </span>
                    </td>

                    <td className="py-4 px-4 text-center">
                      <div className="flex flex-col space-y-2">
                        {/* Confirmed Provider Button - Only show for pending bookings */}
                        {booking.status === "pending" && (
                          <button
                            onClick={() => handleConfirm(booking._id)}
                            className="bg-greenColor text-yellowColor px-4 py-2 rounded-lg hover:bg-yellowColor hover:text-white transition-all duration-200 text-sm font-medium"
                          >
                            Confirm Provider
                          </button>
                        )}

                        {/* Leave Review Button - Only show for confirmed bookings */}
                        {booking.status === "confirmed" && (
                          <button
                            onClick={() => handleLeaveReview(booking)}
                            className="bg-yellowColor text-greenColor px-4 py-2 rounded-lg hover:bg-yellowColor/70 transition-all duration-200 text-sm font-medium"
                          >
                            Leave Review
                          </button>
                        )}

                        {/* Cancel Button - Show for all bookings except cancelled */}
                        {booking.status !== "cancelled" && (
                          <button
                            onClick={() => handleDelete(booking._id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200 text-sm font-medium"
                          >
                            Cancel Booking
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
