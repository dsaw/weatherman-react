import React, {Component} from 'react';

const roundNumbers = (num) => {
  return Math.round(num);
}


// weather update for one day
class WeatherCard extends Component {

  constructor(props) {
    super(props);
  }

  getWeatherIcon(weathertype) {
    return "assets/icons/" + weathertype + ".svg";
  }

  render() {
    return(
          <div className="d-flex flex-xs-row flex-sm-column bd-highlight" style={{width: '10rem'}}>
         <div className="p-2">{this.props.day}</div>
         <div style={{width: '5rem'}} className="p-2">
          <img src={this.getWeatherIcon(this.props.weatherType)}/>
         </div>

         <div className="p-2">
           <div>{roundNumbers(this.props.highestTemp)}</div>
           <div>{roundNumbers(this.props.lowestTemp)}</div>
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
