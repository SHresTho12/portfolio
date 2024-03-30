import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import React, { useState, useEffect } from 'react';
const Navbar = () => {

  const [downloadButtonText, setDownloadButtonText] = useState('Download CV');

  // Function to detect if the device is a mobile device
  const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  useEffect(() => {
    if (isMobileDevice()) {
      setDownloadButtonText('CV');
    } else {
      setDownloadButtonText('Download CV');
    }
  }, []);


  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">

   <div className="buttons">
      {/* Render the download button with dynamic text */}
      <a href="/docs/CV.pdf" download>
        <button className="cv-download">{downloadButtonText}</button>
      </a>
      {/* Render online view button only for non-mobile screens */}
      {!isMobileDevice() && (
        <a href="/docs/CV.pdf" target="_blank" rel="noopener noreferrer" className="desktop-only">
          <button className="online-cv">View Online CV</button>
        </a>
      )}
    </div>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/talimul-bari-shreshtho-50b8a7234/">
            <img src="/lnkin.png" alt="" />
          </a>
          <a href="https://github.com/SHresTho12">
            <img src="/git.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
