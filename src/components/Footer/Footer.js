import React from "react";
import * as FaIcons from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-content pb-10 mt-10">
      <div className="bg-white shadow opacity-100 w-11/12 h-1 mb-5 mx-auto "></div>
      <footer className="footer justify-center items-center gap-24 p-10 text-sky-400 -content max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2>Zahidul Islam Patoary</h2>
          <p className="text-black">All Rights Reserved @ Zahid</p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="flex gap-5">
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
      </footer>
    </div>
  );
};

export default Footer;
