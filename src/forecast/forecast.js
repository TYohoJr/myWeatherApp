import React from 'react';
import axios from "axios";
import { Table } from 'reactstrap';

export default class Forecast extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                coord: {
                    lon: "Loading...",
                    lat: "Loading..."
                },
                weather: {
                    id: "Loading...",
                    main: "Loading...",
                    description: "Loading...",
                    icon: "Loading...",
                },
                base: "Loading...",
                main: {
                    temp: "Loading...",
                    pressure: "Loading...",
                    humidity: "Loading...",
                    temp_min: "Loading...",
                    temp_max: "Loading...",
                    sea_level: "Loading...",
                    grind_level: "Loading...",
                },
                wind: {
                    speed: "Loading...",
                    deg: "Loading...",
                },
                clouds: {
                    all: "Loading...",
                },
                dt: "Loading...",
                sys: {
                    type: "Loading...",
                    id: "Loading...",
                    message: "Loading...",
                    country: "Loading...",
                    sunrise: "Loading...",
                    sunset: "Loading...",
                },
                id: "Loading...",
                name: "Loading...",
                cod: "Loading..."
            }
        }
    }

    render() {
        return (
            <div>
                <Table>
                    <tr>
                        <th>City<br /></th>
                        <th>Wind Speed<br />(mph)</th>
                        <th>Wind Direction</th>
                        <th>Temp<br />(F)</th>
                        <th>Humidity<br />(%)</th>
                        <th>Cloud Cover<br />(%)</th>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td>wind speed</td>
                        <td>windDeg</td>
                        <td>temp</td>
                        <td>humidity</td>
                        <td>clouds</td>
                    </tr>
                </Table>
            </div>
        )
    }
}