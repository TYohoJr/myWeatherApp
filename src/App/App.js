import React, { Component } from 'react';
import './App.css';
import { Jumbotron } from 'reactstrap';
import Dropdown1 from "../dropdown/dropdown.js";

export default class App extends Component {
  render() {
    return (
      <div className="main-body">
        <div className="main-content">
          <Jumbotron className="jumbotron-main">
            <h1 className="main-header">Welcome to the Montana Weather App!</h1>
            <h5 className="sub-header">Select your Montana based city to get a local weather report!</h5>
            <hr />
            <div className="dropdown">
              <Dropdown1 />
            </div>
          </Jumbotron>
        </div>
        <footer>
          <div className="footer-contents">
            <p>Created by: Thomas Yoho</p>
            <p>Weather data from OpenWeatherMap</p>
          </div>
        </footer>
      </div>
    )
  }
}
