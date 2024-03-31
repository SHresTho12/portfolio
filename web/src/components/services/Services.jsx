import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        {/*  <p>
 As a skilled software engineer I have a good understanding of web development, backend development, and machine learning. I am always ready to learn new things.

</p> */}
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills</motion.b>{" "}
            Services
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>I Provide</motion.b>
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            As a web developer, I have extensive experience in building modern
            and responsive web applications. My expertise lies in utilizing
            technologies such as React, Sass, Chakra UI, and JavaScript to
            create dynamic and user-friendly interfaces. I have successfully
            developed projects like IUT_edumate and Teach ME, demonstrating my
            ability to deliver high-quality solutions tailored to specific
            requirements.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ML Sevices</h2>
          <p>
            I have worked on different machine learning projects, where I have
            used NLP and visual recognition. I have experience in building
            machine learning models using Python and TensorFlow. I have also
            worked on projects like sentiment analysis, image classification,
            and object detection.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            In my journey as a backend developer, I've gained valuable
            experience in crafting robust and efficient server-side solutions
            for various projects. During my internship at Vivasoft, I had the
            opportunity to work on backend development tasks, where I worked
            with GO, NodeJS. Also I have experience in backend load and
            performance testing.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Devops</h2>
          <p>
            I have experience in deploying and managing applications using GKE .
            I have worked on projects where I have deployed applications on
            Kubernetes and managed them using Helm. I have also worked on CI/CD
            pipelines using Jenkins and GitHub Actions.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
