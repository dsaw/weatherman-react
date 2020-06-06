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
  WiSunset
} from 'react-icons/wi';

const WeatherIcon = ({iconName}) => {
  // currently return for wind direction
  const iconMap = {
      '': ''
  };
  return (<i className={"wi wi-wind wi-wind-towards-"+iconName.toLowerCase()}></i>);

}

export default WeatherIcon;
