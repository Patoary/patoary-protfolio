import React from "react";
import * as  FaIcons from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceIProvide = [
    {
      id: 1,
      title: "Mern Development",
      description:
        "I'm a MERN Developer .I can build your full stack website with MongoDB, ExpressJS, ReactJS, NodeJS. I can be your Mern Developer",
      icon: (
        <>
          <FaIcons.FaLayerGroup/>
        </>
      ),
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "I'm A Frontend specialist. I have created many Website With Fancy Frontend. I can be your frontend Engineer.",
      icon: (
        <>
          <FaIcons.FaCode/>
        </>
      ),
    },
    {
      id: 4,
      title: "React Development",
      description:
        "I'm A React Developer. I have created many single page application using React.JS. I can be your React Developer.",
      icon: (
        <>
          <FaIcons.FaReact/>
        </>
      ),
    },
    {
      id: 5,
      title: "Javascript Development",
      description:
        "I'm a Javascript Developer. I have created many website using Javascript. I can be your Javascript Developer.",
      icon: (
        <>
          <FaIcons.FaJs/>
        </>
      ),
    },
  ];

  return (
    <div id="services" className="text-white max-w-7xl mx-auto">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-2xl text-center font-bold text-secondary uppercase">Services</p>
        <p className="text-primary font-bold text-3xl lg:text-5xl mb-10">
          What I Do{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {serviceIProvide.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
