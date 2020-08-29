import moment from 'moment-timezone';

const generateCustomDate = (timezone, index) => {
  const d = moment().tz(timezone);
  d.day(index + d.day());
  return d;
};

const getDayFromDate = (timezone, index) => {
  // OWM time(dt) is meaningless
  const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = generateCustomDate(timezone, index);
  return (days[date.day()]);
};

export {getDayFromDate, generateCustomDate};
