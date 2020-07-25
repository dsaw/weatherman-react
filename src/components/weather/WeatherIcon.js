import React from 'react';

import {
  WiDegrees,
  WiCelsius,
  WiFahrenheit,
  WiWindDeg
} from 'react-icons/wi';

const WeatherIcon = ({iconName}) => {
  // currently return for wind direction
  const iconMap = {
      'degrees': <WiDegrees style={{'fontSize': '2rem'}}/>,
      'celsius': <WiCelsius style={{'fontSize': '2rem'}}/>,
      'fahrenheit': <WiFahrenheit style={{'fontSize': '2rem'}}/>
  };
  return (iconMap[iconName]);

}

const WeatherDirectionIcon = ({iconName}) => {
  // currently return for wind direction
  return (typeof iconName === "string" ? <i className={"wi wi-wind wi-wind-towards-"+ iconName.toLowerCase()}></i> :
        <WiWindDeg style={{'fontSize': '2rem', 'transform': `rotate(${iconName}deg)`}}/>);

}

export {WeatherIcon, WeatherDirectionIcon};
