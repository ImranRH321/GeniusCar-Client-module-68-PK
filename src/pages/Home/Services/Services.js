import { useState, useEffect } from "react";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div id="service">
      <h2 className="services_title mt-5 mb-3">Services: {services.length}</h2>
     <div className="services_container">
     {services.map(service => (
        <Service service={service} key={service._id}></Service>
      ))}
     </div>
    </div>
  );
};

export default Services;
