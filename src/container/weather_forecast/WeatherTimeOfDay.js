import React from "react";
import TimeOfDayCard from "../../components/weather_card/TimeOfDayCard";
import { isValid } from "../../utils/validityHelper";

const WeatherTimeOfDay = (props) => {
  return isValid(props.selectedDay)
    ? Object.entries(props.selectedDay.feels_like).map((time, index) => {
        return (
          <TimeOfDayCard
            key={time[0]}
            timeOfDay={time[0]}
            temp={time[1]}
          ></TimeOfDayCard>
        );
      })
    : null;
};

export default WeatherTimeOfDay;
