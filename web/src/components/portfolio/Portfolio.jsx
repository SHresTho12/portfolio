import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Iut EduMate",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "iut_edumate is a web platform developed for a university where students can post questions about different topic courses and others can post answers to those questions. It provides a platform for students to collaborate and share resources, ask questions, and find answers.",
    link: "https://github.com/SHresTho12/iut_edumate",
  },
  {
    id: 2,
    title: "Teach Me",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The Teach Me project is a learning platform designed for children. The platform includes interactive games and activities to help children learn a variety of subjects. The site also includes progress reports for parents to track their child's learning..",
    link: "https://github.com/SHresTho12/Teach_ME",
  },
  {
    id: 3,
    title: "Sign Languge Detection",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The Sign Language Detection project is an image processing and object detection application developed in Python to detect and recognize hand gestures in still images and real-time videos captured through the webcam. The project employs the MobileNet SSD architecture, TensorFlow, and OpenCV for image processing and detection tasks.",
    link: "https://github.com/SHresTho12/sign_language_detection",
  },
  {
    id: 4,
    title: "Blogs Aggregator",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "This is a simple backend project based on goLang. It is rss blog aggregator. That monitors registered blogs and fetched new blogs from them. Users can follow blogs and the blogs will be fetched from them. The server auto updates fetched blogs.",
    link: "https://github.com/SHresTho12/rss-blog-aggregator-go",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Repository</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
