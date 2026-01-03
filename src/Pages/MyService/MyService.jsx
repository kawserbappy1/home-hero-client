import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import ProductCard from "./../../Components/ProductCard";
import NoServiceFound from "../../Components/NoServiceFound";
import { Helmet } from "react-helmet";
import useAuth from "../../hooks/useAuth";

const MyService = () => {
  const { user } = useAuth();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://hero-home-server-sage.vercel.app/my-services?email=${user.email}`
    )
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
    <>
      <Helmet>
        <title>Hero Home || My Service</title>
      </Helmet>
      <div className="container mx-auto px-2 py-10">
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
    </>
  );
};

export default MyService;
