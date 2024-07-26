import React from "react";
import WeatherCard from "../../components/weather_card/WeatherCard";
import { isValid } from "../../utils/validityHelper";

import { getDayFromDate } from "../../utils/DateHelper";

const WeatherWeek = (props) => {
  return isValid(props.forecast)
    ? props.forecast.map((day, index) => {
        const weatherType = {
          abbr: day.weather[0].icon,
          name: day.weather[0].description,
        };
        return (
          <WeatherCard
            key={index}
            isSelected={props.selectedIndex === index}
            day={getDayFromDate(props.timezone, index)}
            highestTemp={day.temp.max}
            lowestTemp={day.temp.min}
            weatherType={weatherType}
            humidity={day.humidity}
            speed={day.wind_speed}
            pressure={day.pressure}
            clickCallback={() => props.clickCallback(index)}
          ></WeatherCard>
        );
      })
    : null;
};

export default WeatherWeek;
