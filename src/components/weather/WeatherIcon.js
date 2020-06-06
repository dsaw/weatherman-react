import React from 'react';

import {
  WiDirectionUp,
  WiDirectionUpRight,
  WiDirectionRight,
  WiDirectionDownRight,
  WiDirectionDown,
  WiDirectionDownLeft,
  WiDirectionLeft,
  WiDirectionUpLeft,
  WiDayFog,
  WiNightFog,
  WiDayCloudyWindy,
  WiNightAltCloudyWindy,
  WiTornado,
  WiNa,
  WiSunrise,
  WiSunset,
  WiDegrees
} from 'react-icons/wi';

const WeatherIcon = ({iconName}) => {
  // currently return for wind direction
  const iconMap = {
      'degrees': <WiDegrees style={{'font-size': '3rem'}}/>
  };
  return (iconMap[iconName]);

}

const WeatherDirectionIcon = ({iconName}) => {
  // currently return for wind direction
  return (<i className={"wi wi-wind wi-wind-towards-"+iconName.toLowerCase()}></i>);

}

export {WeatherIcon, WeatherDirectionIcon};
