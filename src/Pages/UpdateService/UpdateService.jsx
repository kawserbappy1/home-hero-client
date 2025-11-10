import { motion } from "framer-motion";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateService = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const service = data.result;

  const handleUpdateService = (e) => {
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

    fetch(`http://localhost:3000/services/${service._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fomrData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Your Service Updated Successfully!",
          text: "Go to service page",
        });
        navigate("/my-services");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 mt-10 bg-white rounded-2xl shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-greenColor">
        Update Your Service
      </h2>
      <form
        onSubmit={handleUpdateService}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Service Name */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Service Name
          </label>
          <input
            type="text"
            name="serviceName"
            defaultValue={service.serviceName}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Category
          </label>
          <select
            name="category"
            defaultValue={service.category}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          >
            <option value="">Select Category</option>
            <option value="cleaning">Cleaning</option>
            <option value="electrical">Electrical</option>
            <option value="plumbing">Plumbing</option>
            <option value="carpentry">Carpentry</option>
            <option value="painting">Painting</option>
          </select>
        </div>

        {/* Price Per Hour */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Price per Hour
          </label>
          <input
            type="number"
            name="priceperhour"
            defaultValue={service.priceperhour}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
            required
          />
        </div>

        {/* Price Contact */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Price Contact (True/False)
          </label>
          <select
            name="priceContact"
            defaultValue={service.priceContact}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={service.description}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          />
        </div>

        {/* Service URL */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold text-gray-700">
            Service Image URL
          </label>
          <input
            type="url"
            name="serviceurl"
            defaultValue={service.serviceurl}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          />
        </div>

        {/* Provider Info */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Provider Name
          </label>
          <input
            type="text"
            name="providername"
            defaultValue={service.providername}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Provider Experience
          </label>
          <input
            type="text"
            name="providerexperence"
            defaultValue={service.providerexperence}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          />
        </div>

        {/* Email & Number */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Provider Email
          </label>
          <input
            type="email"
            name="provideremail"
            defaultValue={service.provideremail}
            readOnly
            className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Provider Number
          </label>
          <input
            type="text"
            name="providernumber"
            defaultValue={service.providernumber}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Provider Image
          </label>
          <input
            type="text"
            name="providerimage"
            defaultValue={service.providerimage}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Service Review
          </label>
          <input
            type="number"
            name="serviceReview"
            defaultValue={service.serviceReview}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-greenColor outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-greenColor text-yellowColor font-bold py-3 px-10 rounded-xl shadow-md hover:bg-yellowColor hover:text-white transition-all duration-300"
          >
            Update Service
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default UpdateService;
