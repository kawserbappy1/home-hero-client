import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContex";
import Loader from "../../Components/Loader";
import ProductCard from "./../../Components/ProductCard";
import NoServiceFound from "../../Components/NoServiceFound";

const MyService = () => {
  const { user } = use(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/my-services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="container mx-auto py-10">
      {services.length < 1 ? (
        <NoServiceFound></NoServiceFound>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <ProductCard key={service._id} service={service}></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyService;
