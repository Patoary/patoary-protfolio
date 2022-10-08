import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./PorjectDetails.css";
import * as FaIcon from 'react-icons/fa';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});


    const projects = [
        {
            id: 1,
            title: "SK SAW HUB",
            name: "Manufacturer Company Web App",
            description: [
                "This site includes a firebase email-password-based and google authentication system.",
                "This site has different features for different roles. There is two role admin and user.",
                "You can pay using your credit card.",
                "For an admin role user there in the dashboard he can cancel any unpaid order . make other admin and my profile page.",
                "This site is protected using JsonWebToken",
            ],
            image: "https://i.ibb.co/FgDMRcd/sksaw.png",
            links: {
                live: "https://sk-saw-hub.web.app/",
                client: "https://github.com/Patoary/sk-saw-hub-client",
                server: "https://github.com/Patoary/sk-saw-hub-server",
            },
            technology: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "DaisyU",
                "ExpresJs",
                "MongoDB",
                "Stripe",
            ],
            screenshots: [

            ],
        },
        {
            id: 2,
            title: "PK CARS",
            name: "Stock Control And Product Management Website",
            description: [
                "User can maintain their products in all aspects.",
                "User can store their product information in the database.",
                "User Can update stocks and also can add product , and can remove products.",
                "You can see user reviews . what they think about us and how they feel.",
                "Here You can see all our team members and how many companies inventory we manage.",
            ],
            image: "https://i.ibb.co/60PtpDb/pk-cars-web-app.png",
            links: {
                live: "https://pk-cars.web.app/",
                client: "https://github.com/Patoary/pkcars-client",
                server: "https://github.com/Patoary/pkcars-server",
            },
            technology: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "DaisyU",
                "ExpresJs",
                "MongoDB",
            ],
            screenshots: [

            ],
        },
        {
            id: 3,
            title: "Single Flash Photography",
            name: "photographer Hiring Website",
            description: [
                "User can hire a Photographer when he/she want"
            ],
            image: "https://i.ibb.co/4ZfvhTW/photo.png",
            links: {
                live: "https://single-flash-photography.web.app/",
                client: "https://github.com/Patoary/single-flash-photography",
            },
            technology: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "DaisyU",
                "ExpresJs",
                "MongoDB",
                "Stripe",
            ],
            screenshots: [
                
            ],
        },
    ];

    useEffect(() => {
        const project = projects.find((x) => x.id === +id);
        setProject(project);
        console.log(project);
    }, [id]);

    return (
        <div
            data-aos="zoom-in-right"
            data-aos-duration="1500"
            className="detail-card flex flex-col lg:min-h-screen p-5 lg:p-40 hover:text-white"
        >
            <div className="inside-detail flex flex-col lg:flex-row justify-center items-start gap-8 lg:h-[75vh] text-left mb-32">
                <div className="image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
                    <img src={project.image} alt="" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
                    <div>
                        <h2 className="font-semibold text-sm my-3 text-secondary">
                            {project.title}
                        </h2>
                        <h2 className="project-title text-accent font-semibold text-xl my-4">
                            {project.name}
                        </h2>
                        <div className="my-5">
                            <h3 className=" text-secondary">Project Overview</h3>
                            {project?.description?.map((point, index) => (
                                <p key={index} className="text-primary">
                                    {index + 1}. {point}
                                </p>
                            ))}
                        </div>
                        <div className="my-5">
                            <h3 className=" text-secondary my-2">Technology used</h3>
                            <div className=" flex flex-wrap gap-4">
                                {project?.technology?.map((point, index) => (
                                    <span key={index} className="used-technology text-primary">
                                        {point}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="button-content flex justify-between mt-5">
                        <a
                            href={project?.links?.live}
                            target="_blank"
                            rel="noreferrer"
                            className="project-button text-[10px] lg:text-[12px]"
                        >
                            <FaIcon.FaCircle className="text-secondary mr-2"/>
                            View Live
                        </a>
                        <a
                            href={project?.links?.client}
                            target="_blank"
                            rel="noreferrer"
                            className="project-button text-[10px] lg:text-[12px]"
                        >
                            <FaIcon.FaGithub className="text-secondary mr-2"/>
                            Client Code
                        </a>
                        <a
                            href={project?.links?.server}
                            target="_blank"
                            rel="noreferrer"
                            className="project-button text-[10px] lg:text-[12px]"
                        >
                            
                            <FaIcon.FaGithub className="text-secondary mr-2"/>
                            
                            Server Code
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default ProjectDetails;
