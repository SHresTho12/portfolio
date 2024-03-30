import React, { useState } from "react";
import { motion } from "framer-motion";
import "./EducationCard.css";

const EducationCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <motion.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      layout
      whileHover={{ scale: 1.2 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`education-card ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <motion.h2 layout="position">Education</motion.h2>

      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="expand"
        >
          {educationalInfo.slice(0, 2).map((info, index) => (
            <div key={index} className="education-info">
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
          {educationalInfo.map((info, index) => (
            <div key={index} className="education-info">
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
    </motion.div>
  );
};

export default EducationCard;
