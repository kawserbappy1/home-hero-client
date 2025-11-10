import React, { use, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContex";

const categories = [
  "Cleaning",
  "Electrical",
  "Plumbing",
  "Carpentry",
  "Painting",
];

const AddService = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleAddService = (e) => {
    e.preventDefault();
    const fomrData = {
      serviceName: e.target.serviceName.value,
      category: e.target.category.value,
      priceperhour: e.target.priceperhour.value,
      priceContact: e.target.priceContact.value,
      description: e.target.description.value,
      serviceurl: e.target.serviceurl.value,
      providername: e.target.providername.value,
      provideremail: e.target.provideremail.value,
      providerimage: e.target.providerimage.value,
      providernumber: e.target.providernumber.value,
      providerexperence: e.target.providerexperence.value,
      serviceReview: e.target.serviceReview.value,
    };

    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fomrData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Your Service Added Successfully!",
          text: "Go to service page",
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-greenColor mb-6 text-center">
        Add New Service
      </h2>

      <form
        onSubmit={handleAddService}
        className="bg-white p-6 rounded-2xl shadow-lg space-y-4 max-w-3xl mx-auto"
      >
        {/* Service Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Service Name
          </label>
          <input
            type="text"
            name="serviceName"
            required
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            required
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price per hour */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Price per Hour
          </label>
          <input
            type="number"
            name="priceperhour"
            required
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
          />
        </div>

        {/* Price Contact */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Price Contact
          </label>
          <select
            name="priceContact"
            required
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            required
            rows="4"
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
          ></textarea>
        </div>

        {/* Service URL */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Service Image URL
          </label>
          <input
            type="text"
            name="serviceurl"
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
          />
        </div>

        {/* Provider Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Provider Name
            </label>
            <input
              type="text"
              name="providername"
              required
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Provider Email
            </label>
            <input
              type="email"
              name="provideremail"
              defaultValue={user?.email}
              readOnly
              required
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Provider Image URL
            </label>
            <input
              type="text"
              name="providerimage"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Provider Number
            </label>
            <input
              type="text"
              name="providernumber"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Provider Experience
            </label>
            <input
              type="text"
              name="providerexperence"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Service Review
            </label>
            <input
              type="number"
              step="0.1"
              name="serviceReview"
              className="w-full border rounded-md p-2 focus:ring-2 focus:ring-greenColor"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-greenColor text-yellowColor py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 mt-4"
        >
          {loading ? "Adding Service..." : "Add Service"}
        </button>
      </form>
    </div>
  );
};

export default AddService;
