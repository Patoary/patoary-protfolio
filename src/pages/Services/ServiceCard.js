import React from "react";
import "./Services.css";

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;
  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className="service-card text-accent p-8 lg:p-12 ">
        <div className="text-left">
          <p className="text-5xl text-secondary">{icon}</p>
          <h2 className="font-semibold text-xl lg:text-2xl my-4 text-secondary">{title}</h2>
          <p className="text-sm lg:text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
