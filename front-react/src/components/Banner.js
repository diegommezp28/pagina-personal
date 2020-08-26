import React from 'react';
import "./BannerStyles.css"
import { Row, Col } from "react-bootstrap";

const Banner = () => {
    return (
        <Row className="justify-content-md-center  banner-row">
            <Col xs="12" md="11">
                <p style={{zIndex: 0.9}}>Soy Diego</p>
            </Col>
        </Row>
    );
};

export default Banner;