// Limit testing/saving whileserver is runnng to avoid API request lockouts
// Use this URL to make sure the API is working - http://api.openweathermap.org/data/2.5/weather?q=bozeman&APPID=df763ac8b1b29ebbbf6e5d41aa8d44eb
// My API key - df763ac8b1b29ebbbf6e5d41aa8d44eb
// Random persons API key - bd5e378503939ddaee76f12ad7a97608

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
    this.tempImage = "";
    this.cloudImage = "";
    this.windImage = "";
    this.state = {
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
      //  rain:{
      //    ["3h"]:"Loading...",
      //  },
      //  snow:{
      //    ["3h"]:"Loading...",
      //  },
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
  
  handleClick(input) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?${input}&APPID=bd5e378503939ddaee76f12ad7a97608`).then((response)=>{
      response.data.main.temp = Math.floor((response.data.main.temp - 273.15)* 1.8000 + 32.00)
      response.data.wind.speed = Math.floor(response.data.wind.speed * 2.2369);
      this.setState({
        data:response.data,
      })
    })
  }

  zipInput(input) {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${input}&APPID=bd5e378503939ddaee76f12ad7a97608`).then((response)=>{
      response.data.main.temp = Math.floor((response.data.main.temp - 273.15)* 1.8000 + 32.00)
      response.data.wind.speed = Math.floor(response.data.wind.speed * 2.2369);
      this.setState({
        data:response.data,
      })
    })
  }

  render() {
    if (this.state.data.main.temp !== "Loading..."){
      var windDeg;
        if (this.state.data.wind.deg>11.25 && this.state.data.wind.deg<33.75){
          windDeg = "NNE";
        }else if (this.state.data.wind.deg>33.75 && this.state.data.wind.deg<56.25){
          windDeg = "ENE";
        }else if (this.state.data.wind.deg>56.25 && this.state.data.wind.deg<78.75){
          windDeg = "E";
        }else if (this.state.data.wind.deg>78.75 && this.state.data.wind.deg<101.25){
          windDeg = "ESE";
        }else if (this.state.data.wind.deg>101.25 && this.state.data.wind.deg<123.75){
          windDeg = "ESE";
        }else if (this.state.data.wind.deg>123.75 && this.state.data.wind.deg<146.25){
          windDeg = "SE";
        }else if (this.state.data.wind.deg>146.25 && this.state.data.wind.deg<168.75){
          windDeg = "SSE";
        }else if (this.state.data.wind.deg>168.75 && this.state.data.wind.deg<191.25){
          windDeg = "S";
        }else if (this.state.data.wind.deg>191.25 && this.state.data.wind.deg<213.75){
          windDeg = "SSW";
        }else if (this.state.data.wind.deg>213.75 && this.state.data.wind.deg<236.25){
          windDeg = "SW";
        }else if (this.state.data.wind.deg>236.25 && this.state.data.wind.deg<258.75){
          windDeg = "WSW";
        }else if (this.state.data.wind.deg>258.75 && this.state.data.wind.deg<281.25){
          windDeg = "W";
        }else if (this.state.data.wind.deg>281.25 && this.state.data.wind.deg<303.75){
          windDeg = "WNW";
        }else if (this.state.data.wind.deg>303.75 && this.state.data.wind.deg<326.25){
          windDeg = "NW";
        }else if (this.state.data.wind.deg>326.25 && this.state.data.wind.deg<348.75){
          windDeg = "NNW";
        }else{
          windDeg = "N"; 
        }
      var tableThing =
      <Table className="tablething">
        <thead>
          <tr>
            <th>City<br/></th>
            <th>Wind Speed<br/>(mph)</th>
            <th>Wind Direction</th>
            <th>Temp<br/>(F)</th>
            <th>Humidity<br/>(%)</th>
            <th>Cloud Cover<br/>(%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.data.name}</td>
{/*add formula to convert degrees to direction for wind*/}                  
            <td>{this.state.data.wind.speed}</td>
            <td>{windDeg}</td>
            <td>{this.state.data.main.temp}</td>
            <td>{this.state.data.main.humidity}</td>
            <td>{this.state.data.clouds.all}</td>
          </tr>
        </tbody>
      </Table>
    }

    if (this.state.data.main.temp >= 65){
      this.tempImage = <img className="tempimage" src="http://www.computer-repair-stokeontrent.co.uk/images/computer-over-heating.png" alt="heat"/>
    } else if (this.state.data.main.temp >= 32){
      this.tempImage = <img className="tempimage" src="https://previews.123rf.com/images/pinanatreeangle/pinanatreeangle1707/pinanatreeangle170700005/81582186-temperature-icon-vector-clip-art-narrow-range-mercury-thermometer-shows-warm-weather.jpg" alt="medium temp"/>
    } else if (this.state.data.main.temp < 32){
      this.tempImage = <img className="tempimage" src="https://cdn3.iconfinder.com/data/icons/weather-16/256/Cold_Day-256.png" alt="cold"/>
    }

    if(this.state.data.wind.speed >= 30){
      this.windImage = <img className="windimage" src="https://casebyscasebook.files.wordpress.com/2017/02/img_1706.jpg" alt="windy"/>
    }

    if (this.state.data.clouds.all >= 75){
      this.cloudImage = <img className="cloudimage" src="http://www.clker.com/cliparts/s/E/z/g/z/V/cloud-md.png" alt="cloudy"/>
    } else if (this.state.data.clouds.all >= 25){
      this.cloudImage = <img className="cloudimage" src="https://www.goodfreephotos.com/albums/vector-images/sun-behind-the-clouds-vector-clipart.png" alt="partly cloudy"/>
    } else if (this.state.data.clouds.all >= 0){
      this.cloudImage = <img className="cloudimage" src="http://am1380.ca/wp-content/uploads/sun-1.png" alt="sunny"/>
    }  

    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Dropdown
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>City</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=missoula")}>Missoula</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=anaconda")}>Anaconda</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=havre")}>Havre</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=billings")}>Billings</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=boulder")}>Boulder</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=bozeman")}>Bozeman</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=helena")}>Helena</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=butte")}>Butte</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("id=5655240")}>Great Falls</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=kalispell")}>Kalispell</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=chicago")}>Chicago (test)</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("q=miami")}>Miami (test)</DropdownItem>
          <DropdownItem onClick={() => this.handleClick("zip=60565")}>ZIP 60565 (test)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <br/>
      <div>
        Or enter your 5-digit Zip Code<br/>(does not have to be Montana based)
      </div>
      <input id="zipCode" type="text" placeholder="Zip Code"/><button onClick={() => this.zipInput(document.getElementById('zipCode').value)}>Submit</button><br/>
      <br/>
      <div>
        {tableThing}
      </div>
      <div>
        {this.windImage}{this.tempImage}{this.cloudImage}
      </div>
    </div>
    )
  }
}
