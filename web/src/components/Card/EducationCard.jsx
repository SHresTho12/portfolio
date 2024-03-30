import React, { useState } from "react";
import { motion } from "framer-motion";
import Overlay from "./Overlay";

export const EducationCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => {
    setIsExpanded(true);
  };

  const closeModal = () => {
    setIsExpanded(false);
  };
  const educationalInfo = [
    {
      institution: "Islamic University of Technology",
      location: "Gazipur",
      degree: "Bachelor of Science in Software Engineering",
      date: "Jan 2020 – present",
      result: "CGPA 3.78 (present)",
    },
    {
      institution: "Rajshahi Old Government College",
      location: "Sadar, Rajshahi",
      degree: "Higher Secondary School",
      date: "June 2017 – June 2019",
      result: "GPA 5.00",
    },
    // Add more educational information here if needed
  ];

  const collapsedEducationalInfo = educationalInfo.slice(0, 2);

  const expandedEducationalInfo = [
    ...educationalInfo,
    {
      institution: "Bogura Cantonment School And College",
      degree: "Secondary Scholl Certificate",
      location: "Rajshahi Board",
      date: "Science",
      result: "GPA 5.00",
    },
  ];

  return (
    <div className="container">
      <motion.div
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={`card ${isExpanded ? "expanded" : "collapsed"}`}
      >
        <motion.h2 layout="position">EDUCATION</motion.h2>

        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="expand"
          >
            {collapsedEducationalInfo.map((info, index) => (
              <div key={index}>
                <p>
                  <strong>{info.institution}</strong>
                </p>
                <p>
                  {info.location}, {info.date}
                </p>
                <p>{info.degree}</p>
                <p>{info.result}</p>
              </div>
            ))}
          </motion.div>
        )}

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="expand"
          >
            {expandedEducationalInfo.map((info, index) => (
              <div key={index}>
                <p>
                  <strong>{info.institution}</strong>
                </p>
                <p>
                  {info.location}, {info.date}
                </p>
                <p>{info.degree}</p>
                <p>{info.result}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* <Overlay close={closeModal}>
          
        </Overlay> */}
      </motion.div>
    </div>
  );
};

export default EducationCard;
