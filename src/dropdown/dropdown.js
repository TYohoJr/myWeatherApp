// More cities will be added later
// Limit testing/saving whileserver is runnng to avoid API request lockouts
// Use this URL to make sure the API is working - http://api.openweathermap.org/data/2.5/weather?q=bozeman&APPID=df763ac8b1b29ebbbf6e5d41aa8d44eb
// My API key - df763ac8b1b29ebbbf6e5d41aa8d44eb
// Random persons API key - bd5e378503939ddaee76f12ad7a97608
// Rebecca's API key - deb29dfd065c544e4164e76b251706d3 (do not use unless necessary)
// Currently accesses the API more than it needs to, but no longer accesses it in an infinite loop :)
// Currently it accesses the API twice for every city selected, and twice each timeyou open the dropdown menu(besides the first time on page load)

import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./dropdown.css";
import axios from "axios";
import { Table } from 'reactstrap';

export default class Dropdown1 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.axiosGet = this.axiosGet.bind(this);    
    this.counter = 0;
    this.state = {
      tableThing:"\ ",
      dropdownOpen: false,
      testVar:2,
// This is the entire data tree from OpenWeatherApp
// Most data will never be used, but its accessible here in case of future needs      
      data:{
        coord:{
          lon:"Loading...",
          lat:"Loading..."
        },
        weather:{
          id:"Loading...",
          main:"Loading...",
          description:"Loading...",
          icon:"Loading...",
        },
        base:"Loading...",
        main:{
          temp:"Loading...",
          pressure:"Loading...",
          humidity:"Loading...",
          temp_min:"Loading...",
          temp_max:"Loading...",
          sea_level:"Loading...",
          grind_level:"Loading...",
        },
        wind:{
          speed:"Loading...",
          deg:"Loading...",
        },
        clouds:{
          all:"Loading...",
        },
// Uses a number as the beginning of the object name for rain and snow 3 hour volumes
//        rain:{
//          3h:"Loading...",
//        },
//        snow:{
//          3h:"Loading...",
//        },
        dt:"Loading...",
        sys:{
          type:"Loading...",
          id:"Loading...",
          message:"Loading...",
          country:"Loading...",
          sunrise:"Loading...",
          sunset:"Loading...",
        },
        id:"Loading...",
        name:"Loading...",
        cod:"Loading..."
      }
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  axiosGet(){
    console.log("test2");
// Need to change the format of the URL to accept either city Names or city ID's
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.testVar}&APPID=bd5e378503939ddaee76f12ad7a97608`).then((response)=>{
        response.data.main.temp = Math.floor((response.data.main.temp - 273.15)* 1.8000 + 32.00)
        debugger;
        this.setState({
          data:response.data,
          tableThing: <Table>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Weather</th>
                  <th>Temp (F)</th>
                  <th>Humidity (%)</th>
                  <th>Cloud Cover (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.data.name}</td>
                  <td>{this.state.data.weather.main}</td>
                  <td>{this.state.data.main.temp}</td>
                  <td>{this.state.data.main.humidity}</td>
                  <td>{this.state.data.clouds.all}</td>
                </tr>
              </tbody>
            </Table>
      })
    })
  }
  
  handleClick(somecityy) {
    this.setState({
      testVar:somecityy
    })
  }

  render() {
// Surely there is a way to stop inifinite loops here without a counter...    
    if ((typeof this.state.testVar !== "number") && this.counter < 2){
      this.counter = this.counter + 1;
      this.axiosGet()
// This lets the user change what city they pick
    } else {
      this.counter = 0
    }
// Need to somehow do this using setState instead of redefining the current object
//      for(var key in this.state.data){
//        if(!this.state.data[key]){
//          this.state.data[key] = "Unavailable"
//        } else {
//          for(var key2 in this.state.data[key]){
//            if(!this.state.data[key][key2]){
//              this.state.data[key][key2] = "Unavailable"
//            }
//          }
//        }
//      }
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>City</DropdownItem>
{/*Need to change from citynames to city ID's*/}
          <DropdownItem onClick={() => this.handleClick("anaconda")}>Anaconda</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("baker")}>Baker</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("chicago")}>Chicago (test)</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("billings")}>Billings</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("boulder")}>Boulder</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("bozeman")}>Bozeman</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("broadus")}>Broadus</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("butte")}>Butte</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div>{this.state.tableThing}</div>
    </div>
    );
  }
}
