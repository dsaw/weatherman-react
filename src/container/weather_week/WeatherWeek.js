import React, {Component, Fragment} from 'react';
import WeatherCard from '../../components/weather_card/WeatherCard';

import {getDayFromDate} from '../../utils/DateHelper';




const WeatherWeek = (props) => {
    return (props.forecast.map((day, index) => (
          <WeatherCard day={getDayFromDate(day.applicable_date)} highestTemp={day.max_temp} lowestTemp={day.min_temp} weatherType="cloudy" humidity={day.humidity} speed={day.wind_speed}>
          </WeatherCard>)));
  };

  export default WeatherWeek;
