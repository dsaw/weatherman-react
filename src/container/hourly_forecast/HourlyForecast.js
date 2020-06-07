import React, {Component, Fragment, useEffect} from 'react';
import 'HourlyCard' from '../../components/weather_card/HourlyCard';

// TODO: to be used when getting hourly data
const HourlyForecast = ({currentDay, address}) => {
   // probably add a carousel of sorts
    return (
      currentDay.map((hour,index) => {
        const weatherType = {abbr: day.weather_state_abbr, name: day.weather_state_name};
        return <HourlyCard currentHour={hour} address={address} />;
      });
    );
};


export default HourlyForecast;
