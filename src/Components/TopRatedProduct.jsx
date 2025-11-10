import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { Link } from "react-router";

const TopRatedProduct = () => {
  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/tr-services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoader(false);
      });
  }, []);
  if (loader) {
    return <Loader></Loader>;
  }
  return (
    <div className="bg-bg1 py-16">
      <div className="container mx-auto ">
        <h1 className="text-center text-5xl font-heading font-bold mb-8 text-greenColor">
          Our Top rated services
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          data-aos="fade-up"
          data-aos-duration="4000"
        >
          {services.map((service) => (
            <ProductCard key={service._id} service={service}></ProductCard>
          ))}
        </div>

        <div className="flex items-center justify-center py-5 mt-5">
          <Link
            to={"/services"}
            className="bg-greenColor text-yellowColor px-6 py-3 rounded-sm tracking-wider transition-all duration-500 hover:bg-yellowColor hover:text-greenColor"
          >
            View All Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRatedProduct;
