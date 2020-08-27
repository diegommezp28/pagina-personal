import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './AboutStyles.css'
import { Row, Col, Card } from "react-bootstrap";
import Coursera from "../assets/coursera.png"
import Uniandes from "../assets/uniandes.jpeg";
import NE from "../assets/ne.jpeg"

function About(props) {
    return (
        <div className="m-0 p-2 bg-light">
            <h3 id="about" className="text-center">About</h3>
            {/* <hr /> */}
            <Row className="bg-light p-2 mt-0 pt-0">
                <Col xs="12" md="5">
                    <h4 className="text-center title">Experience</h4>
                    <VerticalTimeline className="timeline-style">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#727cf5', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2020 - present"
                        // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-subtitle">SW Depelover </h4>
                            <h5 className="vertical-timeline-element-subtitle">at
                        <a className="time-line-link" href="https://apitude.co/" target="_blank"> Apitude.co</a></h5>
                            <p>Python web Sacrapping, APIs development </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="June 2020 - Present"
                        // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-subtitle">FullStack Depelover </h4>
                            <h5 className="vertical-timeline-element-subtitle">at
                        <a className="timeline-link" href="https://equiposarco.com/home/" target="_blank"> EquiposArco</a></h5>
                            <p>Web based App development for accounting and inventory management</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2018"
                        // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        // icon={<WorkIcon />}
                        >
                            <h4 className="vertical-timeline-element-subtitle">Teaching Assistant</h4>
                            <h5 className="vertical-timeline-element-subtitle">at
                        <a className="timeline-link" href="https://uniandes.edu.co/en" target="_blank"> Universidad de los Andes</a></h5>
                            <p>Help students and scored examns in the OOP II (Honors)  course of the University</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </Col>
                <Col xs="12" md="7">
                    <h4 className="text-center title">Education</h4>
                    <Row className="justify-content-md-center">
                        <Col sm="12" lg="8" className="m-0 p-1">
                            <Card className="education-card">
                                <Card.Img variant="top" src={Uniandes} className="img-width align-self-center" />
                                <Card.Body>
                                    <Card.Title>Universidad de los Andes</Card.Title>
                                    <Card.Text>
                                        Since 2017 studying simultaneously a Software Engineering and a Math degree. Currently in 3rd year of both of them
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="12" lg="8" className="m-0 p-1">
                            <Card className="education-card">
                                <Card.Img variant="top" src={Coursera} className="img-width align-self-center" />
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
                                <Card.Img variant="top" src={NE} className="img-width align-self-center" />
                                <Card.Body>
                                    <Card.Title>Colegio la Nueva Esperanza</Card.Title>
                                    <Card.Text>
                                        Studied highschool and part of middle school from 2012 to 2016.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row lassName="justify-content-md-center">
                <Col xs="12">
                    <h4 className="text-center title">Skills</h4>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>

    );
}

export default About;