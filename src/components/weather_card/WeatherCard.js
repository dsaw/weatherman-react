import React, {Component} from 'react';
import getWeatherIcon from '../../utils/getWeatherIcon';
import assetsSrc from '../../utils/assetsSrc';
import {convertToFahrenheit} from '../../utils/temperatureHelper';
import {UnitContext} from '../../context/unit/Unit';

const roundNumbers = (num) => {
  return Math.round(num);
}



// weather update for one day
class WeatherCard extends Component {
  static contextType = UnitContext;

  constructor(props) {
    super(props);
  }

  getWeatherIcon(weathertype) {
    return "assets/icons/" + weathertype + ".svg";
  }

  render() {
    return(
          <div className="d-flex flex-sm-row flex-md-column bd-highlight" style={{width: '10rem'}} onClick={this.props.clickCallback}>
         <div className="p-2">{this.props.day}</div>
         <div style={{width: '5rem'}} className="p-2">
          <img src={`${assetsSrc}/${getWeatherIcon(this.props.weatherType.abbr)}`} alt={this.props.weatherType.name} className="w-25 h-50"/>
         </div>

         <div className="p-2">
           <div>{roundNumbers(this.context.weatherUnit === "C" ? this.props.highestTemp : convertToFahrenheit(this.props.highestTemp))} <sup>o</sup></div>
           <div>{roundNumbers(this.context.weatherUnit === "C" ? this.props.lowestTemp : convertToFahrenheit(this.props.lowestTemp))} <sup>o</sup></div>
         </div>
         <div className="p-2">
          <div>{roundNumbers(this.props.humidity)}</div>
          <div>{roundNumbers(this.props.speed)}</div>
         </div>
         </div>
       );

  }
}


export default WeatherCard;
