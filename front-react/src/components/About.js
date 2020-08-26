import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './AboutStyles.css'
import { Row, Col } from "react-bootstrap";

function About(props) {
    return (
        <Row className="bg-light">
            <Col xs="12" md="5">
                <h4 className="text-center ">Experience</h4>
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
                        <a className="timeline-link" href="https://uniandes.edu.co" target="_blank"> Universidad de los Andes</a></h5>
                        <p>Help students and scored examns in the OOP II (Honors)  course of the University</p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Col>
            <Col xs="12" md="7">
            </Col>
        </Row>

    );
}

export default About;