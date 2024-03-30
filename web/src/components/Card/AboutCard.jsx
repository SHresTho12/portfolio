import React from "react";
import "./AboutCard.css";
import { motion } from "framer-motion";

const AboutCard = () => {
  // Sample data for the about card
  const aboutData = {
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at odio nec leo elementum congue.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
  };

  return (
    <motion.div className="about-card" whileHover={{ scale: 1.2 }}>
      <div className="about-section">
        <h2>Name</h2>
        <p>{aboutData.name}</p>
      </div>
      <div className="about-section">
        <h2>Bio</h2>
        <p>{aboutData.bio}</p>
      </div>
      <div className="about-section">
        <h2>Skills</h2>
        <ul>
          {aboutData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutCard;
