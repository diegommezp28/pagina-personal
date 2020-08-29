import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./AboutStyles.css";
import { Row, Col, Card } from "react-bootstrap";
import ReactStars from "react-stars";
import Coursera from "../assets/coursera.png";
import Uniandes from "../assets/uniandes.jpeg";
import NE from "../assets/ne.jpeg";
import Android from "../assets/android.svg";
import JS from "../assets/javascript.svg";
import CSS from "../assets/css.svg";
import HTML from "../assets/html.svg";
import Python from "../assets/python.svg";
import Java from "../assets/java.svg";
import ReactIcon from "../assets/react.svg";
import Node from "../assets/node-js.svg";
import C from "../assets/c.svg";
import Graduate from "../assets/mortarboard.svg";
import Code from "../assets/code.svg";

function About(props) {
  return (
    <div className="m-0 p-2 bg-light">
      <h3 id="about" className="text-center">
        About
      </h3>
      {/* <hr /> */}
      <Row className="bg-light p-2 mt-0 pt-0">
        <Col xs="12" md="5">
          <h4 className="text-center title">Experience</h4>
          <VerticalTimeline className="timeline-style">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#727cf5", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2020 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img src={Code}></img>}
            >
              <h4 className="vertical-timeline-element-subtitle">
                SW Depelover{" "}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                at
                <a
                  className="time-line-link"
                  href="https://apitude.co/"
                  target="_blank"
                >
                  {" "}
                  Apitude.co
                </a>
              </h5>
              <p>Python web Sacrapping, APIs development </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2020 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<img src={Code}></img>}
            >
              <h4 className="vertical-timeline-element-subtitle">
                FullStack Depelover{" "}
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                at
                <a
                  className="timeline-link"
                  href="https://equiposarco.com/home/"
                  target="_blank"
                >
                  {" "}
                  EquiposArco
                </a>
              </h5>
              <p>
                Web based App development for accounting and inventory
                management
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018"
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#fff",
                alignSelf: "center",
              }}
              icon={<img src={Graduate}></img>}
            >
              <h4 className="vertical-timeline-element-subtitle">
                Teaching Assistant
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                at
                <a
                  className="timeline-link"
                  href="https://uniandes.edu.co/en"
                  target="_blank"
                >
                  {" "}
                  Universidad de los Andes
                </a>
              </h5>
              <p>
                Help students and grade examns and projects for the OOP II
                (Honors) course of the University
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Col>
        <Col xs="12" md="7">
          <h4 className="text-center title">Education</h4>
          <Row className="justify-content-md-center">
            <Col sm="12" lg="8" className="m-0 p-1">
              <Card className="education-card">
                <Card.Img
                  variant="top"
                  src={Uniandes}
                  className="img-width align-self-center"
                />
                <Card.Body>
                  <Card.Title>Universidad de los Andes</Card.Title>
                  <Card.Text>
                    Since 2017 studying simultaneously a Software Engineering
                    and a Math degree. Currently in 3rd year of both of them
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="8" className="m-0 p-1">
              <Card className="education-card">
                <Card.Img
                  variant="top"
                  src={Coursera}
                  className="img-width align-self-center"
                />
                <Card.Body>
                  <Card.Title>Coursera</Card.Title>
                  <Card.Text>
                    Completed an Intro course to CSS, HTML and JavaScript.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="12" lg="8" className="m-0 p-1">
              <Card className="education-card">
                <Card.Img
                  variant="top"
                  src={NE}
                  className="img-width align-self-center"
                />
                <Card.Body>
                  <Card.Title>Colegio la Nueva Esperanza</Card.Title>
                  <Card.Text>
                    Studied highschool and part of middle school from 2012 to
                    2016.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* El diseño de las estrellas esta interesante, pero se pueden modificar,
            debería estar fijas para representar sus habilidades. */}
      <Row className="justify-content-md-center skills p-4">
        <Col xs="12" className="mb-3">
          <h4 className="text-center title text-white">Skills</h4>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img
            src={Python}
            className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"
          ></img>
          <ReactStars
            count={5}
            value={4}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img
            src={Java}
            className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"
          ></img>
          <ReactStars
            count={5}
            value={4.5}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img src={JS} className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"></img>
          <ReactStars
            count={5}
            value={3.8}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img
            src={HTML}
            className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"
          ></img>
          <ReactStars
            count={5}
            value={4}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img src={CSS} className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"></img>
          <ReactStars
            count={5}
            value={4}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img src={C} className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"></img>
          <ReactStars
            count={5}
            value={2}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img
            src={Android}
            className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"
          ></img>
          <ReactStars
            count={5}
            value={2.5}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img
            src={Node}
            className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"
          ></img>
          <ReactStars
            count={5}
            value={3.5}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
        <Col xs="6" md="3" lg="2">
          <img
            src={ReactIcon}
            className="image-skills mb-1 ml-5 pl-0 mr-5 p-2"
          ></img>
          <ReactStars
            count={5}
            value={4}
            className="ml-5 mr-5 "
            size={18}
          ></ReactStars>
        </Col>
      </Row>
    </div>
  );
}

export default About;
