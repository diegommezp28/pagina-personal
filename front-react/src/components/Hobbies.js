import React from 'react';
import { Corousel, Carousel, Row, Col } from "react-bootstrap";
import Joker from "../assets/joker.jpeg";
import Eye from "../assets/eye.jpeg";
import Cat from "../assets/cat.png";

function Hobbies(props) {
    return (
        <div className="m-4 mt-5">
            <h3 id="Portafolio" className="text-center principal-title">Hobbies</h3>
            <p>I like drawing</p>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Carousel className="w-100 align-self-center">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Joker}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>The Killing joke, or not really</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Eye}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Just an eye</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={Cat}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Just a cat</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>

        </div>
    );
}

export default Hobbies;