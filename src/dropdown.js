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
          main:{
              temp:"Loading...",
              pressure:"Loading...",
              humidity:"Loading..."
          },
          name:"Loading..."
      }
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  componentDidMount(){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.testVar}&APPID=deb29dfd065c544e4164e76b251706d3`).then((response)=>{
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
      if(this.state.data.main.temp != "Loading..."){
          this.state.data.main.temp = Math.floor((this.state.data.main.temp - 273.15)* 1.8000 + 32.00)
      }
      if(this.state.testVar != "placeholder"){
          this.tableThing = <Table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temp</th>
              <th>humidity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.data.name}</td>
              <td>{this.state.data.main.temp}</td>
              <td>{this.state.data.main.humidity}</td>
            </tr>
          </tbody>
        </Table>
          this.componentDidMount()
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
          <DropdownItem onClick={() => this.handleClick("")}>Big Timber</DropdownItem>
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