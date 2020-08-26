import moment from 'moment-timezone';

const generateCustomDate = (timezone, index) => {
  let d = moment().tz(timezone);
  d.day(index + d.day());
  return d;
}

const getDayFromDate = (timezone, index) => {
  // OWM time(dt) is meaningless
  let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let date = generateCustomDate(timezone, index);
  return (days[date.day()]);
}

export {getDayFromDate, generateCustomDate};
