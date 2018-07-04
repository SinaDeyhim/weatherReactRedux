import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    // return an array of temps using mapStateToProps
    const temps = cityData.list.map(weather=>weather.main.temp);
    const pressures = cityData.list.map(weather=>weather.main.pressure);
    const humidities = cityData.list.map(weather=>weather.main.humidity);
    //const lon = cityData.city.coord.lon;
    //const lat = cityData.city.coord.lat; es6 version
    const {lon, lat} =cityData.city.coord;

    return(
      <tr key ={name}>
        <td><GoogleMap lon={lon} lat={lat}  /></td>
        <td><Chart data={temps} color="gold" units='&#176;C'/></td>
        <td><Chart data={pressures} color="silver " units='hPa' /></td>
        <td><Chart data={humidities} color="pink"units='%'/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className= 'table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&#176;C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>
    );
  }

}

function mapStateToProps({weather}){
  // see recuders/index
  return {weather}; // or {weather:weather} es6 compact syntax
}

//exporting the connected version of the WeatherList
export default connect(mapStateToProps)(WeatherList);
