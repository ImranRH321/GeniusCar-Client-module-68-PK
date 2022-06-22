import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const ServiceDetails = () => {
  const { serviceId } = useParams();
 const [service] = useServiceDetail(serviceId)

  return (
    <div>
      <h2>
        your are book to : name:{" "}
        <span className="text-danger">{service.name}</span>
      </h2>
      {/*  */}
      <div className="border w-25 mx-auto mt-5">
        <div className="w-100">
          <img className="w-100" src={service.img} alt="" />
        </div>
        <div className="w-75 mx-auto">
          <h5>{service.name}</h5>
        </div>
      </div>
      {/*  */}
      <div className="text-center mt-4">
        <Link to={`/checkout/${serviceId}`}>
          <button class="btn btn-dark mx-auto">Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
