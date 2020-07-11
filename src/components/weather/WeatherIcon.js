import React from 'react';

import {
  WiDegrees
} from 'react-icons/wi';

const WeatherIcon = ({iconName}) => {
  // currently return for wind direction
  const iconMap = {
      'degrees': <WiDegrees style={{'fontSize': '2rem'}}/>
  };
  return (iconMap[iconName]);

}

const WeatherDirectionIcon = ({iconName}) => {
  // currently return for wind direction
  return (<i className={"wi wi-wind wi-wind-towards-"+iconName.toLowerCase()}></i>);

}

export {WeatherIcon, WeatherDirectionIcon};
