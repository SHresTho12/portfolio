import "./hero.scss";
import { motion ,useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import ShuffleText from "./ShuffleText";

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
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {

  const [textIndex, setTextIndex] = useState(0);
  const texts = ["ML Enthusiast", "NLP Enthusiast", "Web Developer", "Backend Engineer"];
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      controls.start({
        opacity: 0,
        x: -10,
        transition: { duration: 0.2 },
      });
      setTimeout(() => {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.2 },
        });
      }, 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [controls, texts.length]);








  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Talimul Bari Shreshtho</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer and{" "}
        <motion.span
          animate={controls}
          style={{
        display: "inline-block",
        overflow: "hidden",
        color: "rebeccapurple", // Set the color to red
        whiteSpace: "nowrap", // Ensure the text stays in the same line
      }}
        >
          {texts[textIndex]}
        </motion.span>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
      Software IUT GO Backend Engineer Web Machine Learning NLP
      </motion.div>
      {/* <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;


