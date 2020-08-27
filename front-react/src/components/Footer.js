import React from 'react';
import "./FooterStyles.css"
import { Row, Col } from 'react-bootstrap';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Github from '../assets/github.svg';

function Footer(props) {
    return (
        <footer>
            <Row className="justify-content-md-center">
                <Col md="2">
                <a href="https://www.facebook.com/diego.gomezpolo" target="_blank">
                    <img src={Facebook} alt="Facebook" className="footer-icons"></img></a>
                </Col>
                <Col md="2">
                <a href="https://www.instagram.com/diegogomezpolo/" target="_blank">
                    <img src={Instagram} alt="Facebook" className="footer-icons"></img></a>
                </Col>
                <Col md="2">
                <a href="https://github.com/diegommezp28" target="_blank">
                    <img src={Github} alt="Facebook" className="footer-icons"></img></a>
                </Col>

            </Row>


        </footer>
    );
}

export default Footer;