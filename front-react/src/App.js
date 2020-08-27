import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Banner from "./components/Banner"
import About from "./components/About"
import Portafolio from "./components/Portafolio"

import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Portafolio></Portafolio>
    </Router>
  );
}

export default App;
