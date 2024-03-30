import React from "react";
import { motion } from "framer-motion";
import "./personalInfo.scss";
import { EducationCard } from "../Card/EducationCard";
import ExperienceCard from "../Card/ExperienceCard";

const Personal = () => {
  return (
    <div className="personal">
      <div className="card-container">
        <div className="right">
          <div className="personal-info">
            <motion.h1 layout="position">John Doe</motion.h1>
            <motion.h3 layout="position">Software Engineer</motion.h3>
            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </div>
        </div>
        <div className="left">
          <EducationCard />
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default Personal;
