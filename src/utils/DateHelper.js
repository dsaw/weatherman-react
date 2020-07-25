

const getDayFromDate = (date) => {
  // should support UTC
  let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(date);
  return (days[d.getDay()]);
}

export {getDayFromDate};
