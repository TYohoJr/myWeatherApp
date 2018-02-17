// Only the first 4 cities in the dropdown are currently active
// The rest are placeholders for now
// Use this URL to make sure the API is working - http://api.openweathermap.org/data/2.5/weather?q=bozeman&APPID=df763ac8b1b29ebbbf6e5d41aa8d44eb
//testing

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
    this.tableThing = ""
    this.state = {
      dropdownOpen: false,
      testVar:"placeholder",
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
        //uses a number as the beginning of theobject name for rain and snow 3 hour volumes
        //rain:{
        //  3h:"Loading...",
        //},
        //snow:{
        //  3h:"Loading...",
        //},
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

  componentDidMount(){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.testVar}&APPID=df763ac8b1b29ebbbf6e5d41aa8d44eb`).then((response)=>{
          this.setState({
              data:response.data
          })
      })
  }
  
  handleClick(somecityy) {
      this.setState({
          testVar:somecityy
      })
  }

  render() {
      if(this.state.data.main.temp !== "Loading..."){
        this.state.data.main.temp = Math.floor((this.state.data.main.temp - 273.15)* 1.8000 + 32.00)
      }
      if(this.state.testVar !== "placeholder"){
        //possily change this to this.setState in the future
          this.tableThing = <Table>
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
        //somehow need to get rid of this
          this.componentDidMount()
      }
      for(var key in this.state.data){
        if(!this.state.data[key]){
          this.state.data[key] = "Unavailable"
        } else {
          for(var key2 in this.state.data[key]){
            if(!this.state.data[key][key2]){
              this.state.data[key][key2] = "Unavailable"
            }
          }
        }
      }
    return (
        <div>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <div>{this.testVar}</div>
        <DropdownMenu>
          <DropdownItem header>City</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("anaconda")}>Anaconda</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("baker")}>Baker</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("bozeman")}>Chicago (test)</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("billings")}>Billings</DropdownItem>
          <DropdownItem>Boulder</DropdownItem>
          <DropdownItem>Bozeman</DropdownItem>
          <DropdownItem>Broadus</DropdownItem>
          <DropdownItem>Butte</DropdownItem>
          <DropdownItem>Chester</DropdownItem>
          <DropdownItem>Chinook</DropdownItem>
          <DropdownItem>Choteau</DropdownItem>
          <DropdownItem>Circle</DropdownItem>
          <DropdownItem>Columbus</DropdownItem>
          <DropdownItem>Conrad</DropdownItem>
          <DropdownItem>Cut Bank</DropdownItem>
          <DropdownItem>Deer Lodge</DropdownItem>
          <DropdownItem>Dillon</DropdownItem>
          <DropdownItem>Ekalaka</DropdownItem>
          <DropdownItem>Forsyth</DropdownItem>
          <DropdownItem>Fort Benton</DropdownItem>
          <DropdownItem>Glasgow</DropdownItem>
          <DropdownItem>Glendive</DropdownItem>
          <DropdownItem>Great Falls</DropdownItem>
          <DropdownItem>Hamilton</DropdownItem>
          <DropdownItem>Hardin</DropdownItem>
          <DropdownItem>Harlowtown</DropdownItem>
          <DropdownItem>Havre</DropdownItem>
          <DropdownItem>Helena</DropdownItem>  
        </DropdownMenu>
      </Dropdown>
      <p>{this.tableThing}</p>
      </div>
    );
  }
}
