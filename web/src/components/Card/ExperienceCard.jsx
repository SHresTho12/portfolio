import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ExperienceCard.css";

const ExperienceCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const experienceData = [
    {
      company: "ABC Company",
      position: "Software Engineer",
      location: "New York, USA",
      date: "Jan 2019 - Dec 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more experience data as needed
  ];

  return (
    <motion.div
      transition={{ layout: { duration: 0.5, type: "spring" } }}
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`experience-card ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <motion.h2 layout="position">Experience</motion.h2>

      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className="expand"
        >
          {experienceData.slice(0, 2).map((exp, index) => (
            <div key={index} className="experience-info">
              <p>
                <strong>{exp.company}</strong>
              </p>
              <p>{exp.position}</p>
              <p>{exp.location}</p>
              <p>{exp.date}</p>
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
          {experienceData.map((exp, index) => (
            <div key={index} className="experience-info">
              <p>
                <strong>{exp.company}</strong>
              </p>
              <p>{exp.position}</p>
              <p>{exp.location}</p>
              <p>{exp.date}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
