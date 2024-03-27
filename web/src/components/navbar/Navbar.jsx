import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Talimul Bari Shreshtho
        </motion.span>
        <div className="buttons">
          <a href="/docs/CV.pdf" download>
            <button className="cv-download">Download CV</button>
          </a>
          <a href="/docs/CV.pdf" target="_blank" rel="noopener noreferrer">
            <button className="online-cv">View Online CV</button>
          </a>
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
