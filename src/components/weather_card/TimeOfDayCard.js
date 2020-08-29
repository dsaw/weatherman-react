import React, {Component} from 'react';
import getWeatherIcon from '../../utils/getWeatherIcon';
import assetsSrc from '../../utils/assetsSrc';
import {convertToFahrenheit} from '../../utils/temperatureHelper';
import {UnitContext} from '../../context/unit/Unit';
import {WeatherIcon} from '../weather/WeatherIcon';

const roundNumbers = (num) => {
  return Math.round(num);
};

const todMap = {
  'morn': 'morning',
  'day' : 'day',
  'eve' : 'evening',
  'night' : 'night'
};


class TimeOfDayCard extends Component {
  static contextType = UnitContext;

  constructor(props) {
    super(props);
  }

  render() {

    const timeOfDay = todMap[this.props.timeOfDay];
    return(
      <div className={`card d-flex flex-md-column bd-highlight align-items-center justify-content-center`}>
     <div className="card-component mx-auto p-2 text-center font-weight-bold">{timeOfDay}</div>
     <div className="card-component mx-auto p-2">
       <div className="w-33 mx-auto">
        <WeatherIcon iconName={timeOfDay} fontSize="2rem"/>
        </div>
     </div>
     <div className="card-component text-center p-2">
        <span>{roundNumbers(this.context.weatherUnit === "C" ? this.props.temp : convertToFahrenheit(this.props.temp))}</span>
     </div>
     </div>);

  }
}



export default TimeOfDayCard;
