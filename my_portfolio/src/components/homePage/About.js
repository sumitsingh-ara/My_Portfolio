import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import SkillSvg from "../../images/about-shape.svg";
import Img from "react-cool-img";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("education");
  const [element, controls] = useScroll();

  const methodDoesNotExist = () => {
    throw new Error("this is a sentry error");
  };

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="">
          <Col className="p-0 text-center" md={5}>
            <Img
              placeholder="/images/skills/lod.jpeg"
              src="/images/me1.png"
              error="/images/skills/error.png"
              alt="React Cool Img"
              onClick={methodDoesNotExist}
              height="50%"
            />
          </Col>
          <Col className="" md={7}>
            <div className="about-info">
              <h1 className="pb-4">
                <span className="chonburi-font green-text ">Abo</span>ut Me
              </h1>
              <p className="details">
              Innovative Web Developer with a passion to implement and launch new projects.
              Detail oriented professional with the ability to translate business requirements
              into technical solutions. Looking to start a career as an entry-level software
              engineer with a firm driven by technology.
              </p>
              <div className="d-flex align-items-center resume-section ">
                <h6>Resume :</h6>
                <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1pMMeoa6GHV-hOP5Aw2qkxTCWgL2fRyVK/view?usp=sharing" target="_blank">
                  View
                </a>
              </div>
              <div className="mt-5">
                <Row className="tabs mb-2">
                  {/* <Col
                    className={`
                      ${
                        tab === "experience"
                          ? "active-tab custom-mr-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("experience")}
                  >
                    <WorkIcon />
                    <h5>Experiences</h5>
                  </Col> */}
                  <Col
                    className={`
                      ${
                        tab === "education"
                          ? "active-tab custom-ml-3"
                          : "inactive-tab"
                      } tab`}
                    onClick={() => setTab("education")}
                  >
                    <LocalLibraryIcon />
                    <h5>Educations</h5>
                  </Col>
                </Row>
                <div className="about-sub-data">
                  {tab === "experience" ? (
                    <div className="work-experiences">
                      <h5>Tafe Motors and Tractors Private Limited</h5>
                      <ul>
                        <li>
                          Retail Finance Executive ( Aug 2019 to Mar 2021 )
                        </li>
                      </ul>
                    </div>
                  ) : null}
                  {tab === "education" ? (
                    <div className="education">
                      <div>
                        <h5>B.tech</h5>
                        <ul>
                          <li className="text-justify">
                            Graduated in Mechanical Engineering from
                            Bengal College of Engineering and Technology in
                            2019.
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
