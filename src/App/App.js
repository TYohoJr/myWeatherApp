import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import axios from "axios";
import Dropdown1 from "../dropdown/dropdown.js";

export default class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
        <div>
          <Jumbotron>
            <h1 className="main-header">Welcome to the Montana Weather App!</h1>
            <h5 className="sub-header">Select your Montana based city to get a local weather report!</h5>
            <hr/>
            {/*<p className="lead">
              <Button color="primary">Learn More</Button>
    </p>*/}
            <div className="dropdown">
              <Dropdown1/>
            </div>
          </Jumbotron>
        <div>
          {/*<Weather/>*/}
        </div>
        <footer>
          <p>Created by: Thomas Yoho</p>
          <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          Click Here</a> for the Secret to Life</p>
        </footer>
        </div>
    )
  }
}
