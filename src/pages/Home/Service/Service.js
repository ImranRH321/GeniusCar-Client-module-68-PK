import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, price, _id,  description } = service;
  const navigate = useNavigate()
  const handleServiceDetailsId = id => {
      navigate(`/service/${id}`)
  }
  return (
    <div className="service">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
      <button className="bg-primary text-white" onClick={() => handleServiceDetailsId(_id)}>Name {name}</button>
    </div>
  );
};

export default Service;
