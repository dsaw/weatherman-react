import moment from 'moment-timezone';

const getDayFromDate = (timezone, index) => {
  // OWM time(dt) is meaningless
  let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = moment().tz(timezone);
  d.day(index);
  return (days[d.day()]);
}

export {getDayFromDate};
