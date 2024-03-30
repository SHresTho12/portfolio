import React from "react";
import { motion } from "framer-motion";
import "./personalInfo.scss";

import ExperienceCard from "../Card/ExperienceCard";
import AboutCard from "../Card/AboutCard";
import EducationCard from "../Card/EducationCard";
import { useEffect, useState } from "react";
import ShuffleText from "../hero/ShuffleText";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Personal = () => {
  return (
    <motion.div className="personal-container">
      <motion.h1 layout="position">Personal Information</motion.h1>

      <div className="personal">
        <div className="card-container">
          <div className="right">
            {/* <div className="personal-info">
            <motion.h1 layout="position">John Doe</motion.h1>
            <motion.h3 layout="position">Software Engineer</motion.h3>
            <motion.p layout="position">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </div> */}

            <AboutCard />
          </div>
          <div className="left">
            <EducationCard />
            <ExperienceCard />
          </div>
        </div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software IUT GO Backend Engineer Web Machine Learning NLP
      </motion.div> */}
    </motion.div>
  );
};

export default Personal;
