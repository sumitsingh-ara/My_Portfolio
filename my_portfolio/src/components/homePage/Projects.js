// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "/images/img1.jpg",
    title: "Lynda Clone",
    description:
      "A responsive E-Learning Website with User friendly UI and UX, like a LinkedIn. It operates with, all the required advanced functionalities in it, from watching any video to purchase it along with faster and safer payment procedure.",
    source: "https://github.com/sumitsingh-ara/Lynda_Backend",
    demoLink: "",
    badge: "Vanilla JS",
    liveweb: "https://www.youtube.com/watch?v=2w3LIbzhUEc&t=129s",
  },
  {
    image: "/images/todo.jpg",
    title: "Todo Application",
    description:
      "A todo app designed and developed by me from scratch, while learning in the First week of React,integrated with Local Storage as well as supporting most of devices.",
    source: "https://github.com/sumitsingh-ara/React_Apps/tree/master/Todo_app",
    demoLink: "https://hasslefreetodo.netlify.app/",
    badge: "ReactJS",
    liveweb: "",
  },
   {
    image: "/images/timer.jpg",
    title: "Stopwatch and Timer",
    description:
      "A stopwatch along with timer , where u can feed time in secs, also responsive for most of devices.",
    source: "https://github.com/sumitsingh-ara/React_Apps/tree/master/Todo_app",
    demoLink: "https://timer-stopwatch-mu.vercel.app/",
    badge: "ReactJS",
    liveweb: "",
  },
  {
    image: "/images/foodrecipe.jpg",
    title: "Food Recipe",
    description:
      "A food-recipe app responsive for mobiles too, with a detail of Restros with several filtes including Rating to Cost with functionality to add new stores.",
    source: "https://github.com/sumitsingh-ara/React_Apps/tree/master/Food_Recipe",
    demoLink: "https://foodrecipe-sumitsingh-ara.vercel.app/",
    badge: "ReactJS",
    liveweb: "",
  },
];

const Projects = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={4} className="mb-5" key={index + 1}>
                  <Badge className="lmckdncd" pill variant="warning">
                    {project.badge}
                  </Badge>
                  {project.liveweb && (
                    <Badge className="jdnkcjd" pill variant="danger">
                      <a rel="noopener noreferrer"
                        href={project.liveweb}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Youtube
                      </a>
                    </Badge>
                  )}
                  <div className="project-card">
                    <div className="img-section">
                      <Img
                        placeholder="https://p4.wallpaperbetter.com/wallpaper/990/450/548/loading-wallpaper-preview.jpg"
                        src={project.image}
                        error="/images/download.png"
                        alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="d-flex justify-content-between mr-4">
                        <a rel="noopener noreferrer"
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a rel="noopener noreferrer"
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
