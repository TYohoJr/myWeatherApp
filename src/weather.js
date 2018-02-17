import React, { Component } from 'react';
import axios from "axios";


export default class Weather extends Component {
    constructor(){
        super();
        this.state={
            data:{
                main:{
                    temp: "Loading..."
                }
            }
        }
    }
    componentDidMount(){
        axios.get("http://api.openweathermap.org/data/2.5/weather?lat=39&lon=76&APPID=deb29dfd065c544e4164e76b251706d3").then((response)=>{
            this.setState({
                data: response.data
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.data.main.temp}
            </div>
        );
    }
}
