import React, { useEffect, useState } from "react";
import ServicePageBanner from "../../Components/ServicePageBanner";
import ProductCard from "../../Components/ProductCard";
import Loader from "../../Components/Loader";

const categories = [
  "All",
  "Cleaning",
  "Electrical",
  "Plumbing",
  "Carpentry",
  "Painting",
  "Building",
];

const filters = ["Default", "Low to High", "High to Low", "Top Rated"];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Default");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const url =
          selectedCategory === "All"
            ? "http://localhost:3000/services"
            : `http://localhost:3000/services?category=${selectedCategory.toLowerCase()}`;

        const res = await fetch(url);
        const data = await res.json();

        let sortedData = [...data];
        if (selectedFilter === "Low to High") {
          sortedData.sort((a, b) => a.priceperhour - b.priceperhour);
        } else if (selectedFilter === "High to Low") {
          sortedData.sort((a, b) => b.priceperhour - a.priceperhour);
        } else if (selectedFilter === "Top Rated") {
          sortedData.sort((a, b) => b.serviceReview - a.serviceReview);
        }

        setServices(sortedData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [selectedCategory, selectedFilter]);

  return (
    <div className="px-2 pb-10">
      <ServicePageBanner />

      {/* Header Bar */}
      <div className="container mx-auto flex flex-wrap items-center justify-between py-10 gap-4">
        <h2 className="hidden lg:block font-heading text-3xl md:text-4xl font-bold text-greenColor">
          Service Category
        </h2>

        <p className="text-gray-700 text-sm md:text-base ">
          Showing <span className="font-semibold">{services.length}</span>{" "}
          {services.length === 1 ? "service" : "services"} in{" "}
          <span className="capitalize font-semibold">{selectedCategory}</span>{" "}
          category
        </p>

        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-greenColor"
        >
          {filters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-5">
        {/* Sidebar Categories */}

        <div className="col-span-12 md:col-span-2 flex md:flex-col flex-row md:gap-3 gap-2 flex-wrap pb-3 ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-3 px-4 text-sm font-medium transition rounded-lg whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-greenColor text-yellowColor"
                  : "bg-bg1 hover:bg-green-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="col-span-12 md:col-span-10">
          {loading ? (
            <Loader />
          ) : (
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {services.length > 0 ? (
                services.map((service) => (
                  <ProductCard key={service._id} service={service} />
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No services found for this category.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
