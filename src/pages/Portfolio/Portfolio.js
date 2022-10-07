import React from "react";
import ProjectCard from "./ProjectCard";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "SK SAW HUB",
      name: "Manufacturer Company Web App",
      image: "https://i.ibb.co/FgDMRcd/sksaw.png",
      links: {
        live: "https://sk-saw-hub.web.app/",
        client: "https://github.com/Patoary/sk-saw-hub-client",
        server: "https://github.com/Patoary/sk-saw-hub-server",
      },
    },
    {
      id: 2,
      title: "PK CARS",
      name: "Stock Control And Product Management Website",
      image: "https://i.ibb.co/60PtpDb/pk-cars-web-app.png",
      links: {
        live: "https://pk-cars.web.app/",
        client: "https://github.com/Patoary/pkcars-client",
        server: "https://github.com/Patoary/pkcars-server",
      },
    },
    {
      id: 3,
      title: "Single Flash Photography",
      name: "photographer Hiring Website",
      image: "https://i.ibb.co/4ZfvhTW/photo.png",
      links: {
        live: "https://single-flash-photography.web.app/",
        client: "https://github.com/Patoary/single-flash-photography",
      },
    },
  ];

  return (
    <div id="portfolio" className="text-white max-w-7xl mx-auto mt-10">
      <div data-aos="zoom-in" data-aos-duration="500">
        <p className="text-xs lg:text-sm text-secondary uppercase">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <p className="text-primary font-bold text-3xl lg:text-5xl mb-10 mt-2">
          My Projects
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
