import React, {Component, Fragment} from 'react';
import WeatherCard from '../../components/weather_card/WeatherCard';

import {getDayFromDate} from '../../utils/DateHelper';




const WeatherWeek = (props) => {
    return (props.forecast.map((day, index) => {
           const weatherType = {abbr: day.weather_state_abbr, name: day.weather_state_name};
           return <WeatherCard day={getDayFromDate(day.applicable_date)} highestTemp={day.max_temp} lowestTemp={day.min_temp} weatherType={weatherType} humidity={day.humidity} speed={day.wind_speed}>
          </WeatherCard>;
        }));
  };

  export default WeatherWeek;
