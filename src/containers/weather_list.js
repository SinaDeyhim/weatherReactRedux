import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    // return an array of temps using mapStateToProps
    const temps = cityData.list.map(weather=>weather.main.temp);
    const pressures = cityData.list.map(weather=>weather.main.pressure);
    const humidities = cityData.list.map(weather=>weather.main.humidity);
    return(
      <tr key ={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="gold"/></td>
        <td><Chart data={pressures} color="silver"/></td>
        <td><Chart data={humidities} color="pink"/></td>
      </tr>
    );
  }

  render(){
    return(
      <table className= 'table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
