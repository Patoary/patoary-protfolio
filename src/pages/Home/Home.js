import React from "react";
import "./Home.css";
import Typed from "react-typed";
import { HashLink as Link } from "react-router-hash-link";
import patoary from '../../assets/images/patoary.PNG';
import PatoaryResume from '../../assets/docs/パトアリ履歴書 .pdf';
import * as FaIcons from "react-icons/fa";
import PageTitle from "../../components/PageTitle/PageTitle";

const Home = () => {
    return (
        <div className="" id="home">
            <PageTitle title='Home'></PageTitle>
            <div className="max-w-7xl mx-12 lg:mx-auto mt-20 xsm:mt-20 flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="w-full lg:w-2/3">
                    <div>
                        <p
                            data-aos="fade-down-right"
                            data-aos-duration="1000"
                            className="uppercase text-left text-2xl lg:text-3xl text-bold xsm:text-center text-primary "
                        >
                            Welcome To My World
                        </p>
                        <p
                            data-aos='fade-down-right'
                            data-aos-duration='1000'
                            className="uppercase font-semibold my-7 text-left text-2xl lg:text-4xl text-white leading-snug"
                        >
                            <span className="text-secondary">
                                <Typed
                                    strings={[
                                        'Hi, I am Zahidul Islam Sagar Patoary',
                                        '私はパトアリザヒドゥルイスラムサガル'
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={60}
                                    loop
                                />
                            </span>
                        </p>
                        <p
                            data-aos="fade-down-right"
                            data-aos-duration="2000"
                            className="uppercase font-semibold my-7 text-left text-xl lg:text-3xl text-black leading-snug"
                        >
                            <span>
                                <Typed
                                    strings={[
                                        "A Mern Developer",
                                        "A Frontend Developer",
                                        "A React.JS Developer",
                                    ]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop
                                />
                            </span>
                        </p>
                        <p
                            data-aos="fade-down-right"
                            data-aos-duration="1000"
                            className="text-left text-primary w-full lg:w-[60ch]"
                        >
                            Hi I am a Mern Stack developer And I can build your website as you
                            want.
                            <br />
                            <br />
                            Creative problem solver with demonstrated ability to work on
                            multiple projects simultaneously.Positive driven and confident
                            individual with an apt for learning new technology.{" "}
                        </p>
                    </div>
                    <div className="flex gap-5 my-10 -mb-20">
                        <div data-aos="zoom-in" data-aos-duration="1000">
                            <a
                                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                                href={PatoaryResume}
                                target="_blank"
                                rel="noreferrer"
                            >
                                My Resume
                            </a>
                        </div>

                        <div data-aos="zoom-in" data-aos-duration="1000">
                            <Link
                                smooth
                                className="anchor-button py-[0.85rem] px-4 lg:px-12"
                                to="/landing#contact"
                            >
                                Hire me
                            </Link>
                        </div>
                    </div>
                    <div className="text-secondary flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between pr-0 lg:pr-36 mt-32">
                        <div>
                            <h5
                                // data-aos="fade-right"
                                // data-aos-duration="1000"
                                className="text-left mb-3 uppercase tracking-wide"
                            >
                                Find Me
                            </h5>
                            <div
                                // data-aos="fade-up"
                                // data-aos-duration="1000"
                                className="flex gap-5"
                            >
                                <a
                                    href="https://github.com/Patoary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="action-box text-primary">
                                        {" "}
                                        <FaIcons.FaGithub />
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/zahidul-islam-sagar-patoary-455156242/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="action-box text-blue-500">
                                        {" "}
                                        <FaIcons.FaLinkedin />
                                    </div>
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=100007474845908"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="action-box text-blue-500">
                                        {" "}
                                        <FaIcons.FaFacebook />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5
                                // data-aos="fade-down"
                                data-aos-duration="1000"
                                className="text-left mb-3 uppercase tracking-wide"
                            >
                                Best skills
                            </h5>
                            <div
                                // data-aos="fade-up"
                                // data-aos-duration="1000"
                                className="flex gap-5"
                            >
                                <div className="action-box text-yellow-600">
                                    <FaIcons.FaJsSquare />
                                </div>
                                <div className="action-box text-blue-500">
                                    <FaIcons.FaReact />
                                </div>
                                <div className="action-box text-blue-500">
                                    <FaIcons.FaHtml5 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                    className=" w-[22rem] lg:w-[32rem] h-[25rem] lg:h-[35rem] flex justify-end bg-gray m-20"
                >
                    <img className="bottom-0 bg-white h-full rounded-lg" src={patoary} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;
