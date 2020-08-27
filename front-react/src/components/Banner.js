import React from 'react';
import "./BannerStyles.css"
import { Row, Col } from "react-bootstrap";

const Banner = () => {
    return (
        <Row className="justify-content-md-center  banner-row">
            <Col xs="12" md="6" className="banner-col">
                <div className="typewritter-wrapper">
                    <div className="typewriter">
                        <h2>Hello! I am Diego Andrés Gómez Polo</h2>
                    </div>

                </div>
            </Col>
        </Row>
    );
};

export default Banner;