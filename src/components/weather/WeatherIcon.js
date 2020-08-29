import React from 'react';

import {
  WiDegrees,
  WiCelsius,
  WiDaySunny,
  WiFahrenheit,
  WiHorizonAlt,
  WiMoonWaningCrescent2,
  WiSunset,
  WiWindDeg
} from 'react-icons/wi';
import {
  FaSearchLocation
} from 'react-icons/fa';

const WeatherIcon = ({iconName, fontSize}) => {
  // currently return for wind direction
  const iconMap = {
      'degrees': <WiDegrees style={{'fontSize': '2rem'}}/>,
      'celsius': <WiCelsius style={{'fontSize': '3.5rem'}}/>,
      'fahrenheit': <WiFahrenheit style={{'fontSize': '3.5rem'}}/>,
      'morning': <WiHorizonAlt style={{'fontSize': fontSize}}/>,
      'day': <WiDaySunny style={{'fontSize': fontSize}}/>,
      'evening': <WiSunset style={{'fontSize': fontSize}}/>,
      'night': <WiMoonWaningCrescent2 style={{'fontSize': fontSize}}/>
  };
  return (iconMap[iconName]);

};

const WeatherDirectionIcon = ({iconName}) => {
  // currently return for wind direction
  return (typeof iconName === "string" ? <i className={"wi wi-wind wi-wind-towards-"+ iconName.toLowerCase()}></i> :
        <WiWindDeg style={{'fontSize': '2rem', 'transform': `rotate(${iconName}deg)`}}/>);

};

const SearchIcon = ({fontSize}) => (
  <FaSearchLocation style={{'fontSize': fontSize}}/>
);

export {WeatherIcon, WeatherDirectionIcon, SearchIcon};
