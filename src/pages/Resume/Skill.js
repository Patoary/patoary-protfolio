import React from "react";
import SkillCard from "./SkillCard";
import * as FaIcon from 'react-icons/fa';
import * as SiIcon from 'react-icons/si';
import * as AiIcon from 'react-icons/ai';
import * as TbIcon from 'react-icons/tb';

const Skill = () => {
  const expertise = [
    {
      id: 1,
      name: "Javascript",
      icon: <FaIcon.FaJs/>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "HTML5",
      icon: <FaIcon.FaHtml5/>,
      color: "text-red-500",
    },
    {
      id: 3,
      name: "CSS",
      icon: <FaIcon.FaCss3Alt/>,
      color: "text-blue-500",
    },
    {
      id: 4,
      name: "React.Js",
      icon: <FaIcon.FaReact/>,
      color: "text-blue-500",
    },
    {
      id: 5,
      name: "ES6",
      icon: (
        <span className="flex text-[8px] pt-2 pl-1.5 pb-0.5 pr-0.5 rounded bg-yellow-500">
          <FaIcon.FaEtsy/>
          <FaIcon.FaStripeS/>
        </span>
      ),
      color: "text-black",
    },
    {
      id: 6,
      name: "Tailwind",
      icon: <SiIcon.SiTailwindcss/>,
      color: "text-sky-400",
    },
    {
      id: 7,
      name: "Rest API",
      icon: <AiIcon.AiFillApi/>,
      color: "text-blue-500",
    },
    {
      id: 8,
      name: "Express.js",
      icon: <SiIcon.SiExpress/>,
      color: "text-blue-800",
    },
  ];

  const comfortable = [
    {
      id: 1,
      name: "Node.js",
      icon: <FaIcon.FaNodeJs/>,
      color: "text-green-600",
    },
    {
      id: 2,
      name: "MongoDB",
      icon: <SiIcon.SiMongodb/>,
      color: "text-green-500",
    },
    {
      id: 3,
      name: "Bootstrap",
      icon: <FaIcon.FaBootstrap/>,
      color: "text-purple-500",
    },
    {
      id: 4,
      name: "React Query",
      icon: <TbIcon.TbBrandReactNative/>,
      color: "text-red-500",
    },
    {
      id: 5,
      name: "Axios",
      icon: "",
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "DaisyUI",
      icon: <TbIcon.TbFlower/>,
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Stripe",
      icon: <FaIcon.FaStripeS/>,
      color: "text-purple-500",
    },
    {
      id: 8,
      name: "React Router",
      icon: (
        <svg
          width="18px"
          height="14px"
          viewBox="0 0 256 140"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z"
              fill="#000000"
            ></path>
            <path
              d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z"
              fill="#D0021B"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
  ];

  const familiar = [
    {
      id: 1,
      name: "Typescript",
      icon: <SiIcon.SiTypescript/>,
      color: "text-blue-800",
    },
    {
      id: 2,
      name: "React Native",
      icon: <FaIcon.FaReact/>,
      color: "text-blue-400",
    },
    {
      id: 3,
      name: "Next.Js",
      icon: (
        <svg
          height="15"
          viewBox=".145 .207 147.685 89.291"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m34.992 23.495h27.855v2.219h-25.301v16.699h23.792v2.219h-23.792v18.334h25.591v2.219h-28.145zm30.35 0h2.96l13.115 18.334 13.405-18.334 18.233-23.288-29.955 43.549 15.436 21.429h-3.076l-14.043-19.502-14.101 19.502h-3.018l15.552-21.429-14.507-20.261zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47h-14.564zm-99.494-2.219h3.192l44.011 66.003-18.188-24.313-26.346-38.537-.116 38.537h-2.553zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443h1.367c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
            fill="#fff"
          />
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "Java",
      icon: <FaIcon.FaJava/>,
      color: "text-blue-600",
    },
      ];

  const tools = [
    {
      id: 1,
      name: "Firebase",
      icon: <SiIcon.SiFirebase/>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "Heroku",
      icon: <SiIcon.SiHeroku/>,
      color: "text-[#6567a5]",
    },
    {
      id: 3,
      name: "Github",
      icon: <FaIcon.FaGithub/>,
      color: "text-black-500",
    },
    {
      id: 4,
      name: "Vs Code",
      icon:<SiIcon.SiVisualstudiocode/>,
      color: "text-blue-500",
    },
    {
      id: 5,
      name: "Git",
      icon: <FaIcon.FaGitAlt/>,
      color: "text-orange-500",
    },
    {
      id: 6,
      name: "Netlify",
      icon:<SiIcon.SiNetlify/>,
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Dev Tool",
      icon: <FaIcon.FaChrome/>,
      color: "text-red-500",
    },
    {
      id: 8,
      name: "Figma",
      icon: <FaIcon.FaFigma/>,
      color: "text-teal-500",
    },
  ];

  return (
    <div id="skill" className="mt-16 text-accent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Expertise</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {expertise.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Comfortable</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {comfortable.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Familiar</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {familiar.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Tools</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {tools.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
