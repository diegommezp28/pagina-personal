import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
    </Router>
  );
}

export default App;
