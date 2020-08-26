import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Row, Col, Nav, Navbar } from "react-bootstrap";

function NavBar(params) {
  //Este arreglo tiene las opciones del menú y la url a la que va cuando se seleccionan
  const opciones_menu = [
    {
      nombre: "Home",
      ref: "#prueba",
    },
    {
      nombre: "About",
      ref: "#prueba",
    },
    {
      nombre: "Portafolio",
      ref: "#prueba",
    },
    {
      nombre: "Awards",
      ref: "#prueba",
    },
    {
      nombre: "Hobbies",
      ref: "#prueba",
    },
  ];

  return (
    <Row className="justify-content-md-center main-navbar-row">
      <Col md="10">

        <Navbar expand="md" sticky="top" id="navbar">
          <Navbar.Brand>
            <Link to="/" className="nav-link">
              <h2 id="page-title">DGP</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-menu" activeKey="/home">
              {opciones_menu.map((menu_item, index) => (
                <Nav.Item key={index}>
                  <Link to={menu_item.ref} className="nav-link">
                    {menu_item.nombre}
                  </Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavBar;
