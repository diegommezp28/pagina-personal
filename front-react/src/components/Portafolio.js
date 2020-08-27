import React from 'react';
import "./PortafolioStyles.css";
import { Row, Col, Card } from "react-bootstrap";

function Portafolio(props) {
    return (
        <div className="m-3">
            <h3 id="Portafolio" className="text-center m-3 principal-title">Portafolio</h3>
            <Row className="justify-content-md-center">
                <Col xs="12" md="6">
                    <Card className="portafolio-card m-3">
                        {/* <Card.Img variant="top" src={NE} className="img-width align-self-center" /> */}
                        <Card.Body>
                            <Card.Title><a className="timeline-link" href="https://github.com/ar-corinaldi/EquiposARCO" target="_blank"> EquiposArco CRM</a></Card.Title>
                            <Card.Text>
                                Web App usign the M.E.R.N. stack for a heavy machinery rental company based on Cúcuta, Colombia.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    <Card className="portafolio-card m-3">
                        {/* <Card.Img variant="top" src={NE} className="img-width align-self-center" /> */}
                        <Card.Body>
                            <Card.Title><a className="timeline-link" href="https://github.com/ndiaz9/NeoTourism" target="_blank"> NeoTourism</a></Card.Title>
                            <Card.Text>
                                Native Android Tourism App that shows the most interesting places close to your location and is able to scan a QR code to show an AR
                                animation that ilustrates the most relevant event that took place in that location.
                    </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>
    );
}

export default Portafolio;