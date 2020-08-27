import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Banner from "./components/Banner"
import About from "./components/About"
import Portafolio from "./components/Portafolio"
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';

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
      <Hobbies></Hobbies>
      <Footer></Footer>
    </Router>
  );
}

export default App;
