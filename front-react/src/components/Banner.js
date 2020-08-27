import React from 'react';
import "./BannerStyles.css"
import { Row, Col } from "react-bootstrap";

const Banner = () => {
    return (
        <Row className="justify-content-md-center  banner-row">
            <Col xs="12" md="6" className="banner-col mr-5">
                <div className="typewritter-wrapper">
                    <div className="typewriter">
                        <p>I am Diego Gómez Polo</p>
                    </div>

                </div>
            </Col>
        </Row>
    );
};

export default Banner;