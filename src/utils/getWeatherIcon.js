// map url to icons
const getWeatherIcon = (iconAbbr) => {
  const dir = "static/img/weather/";
  return dir + iconAbbr + ".svg";
}

export default getWeatherIcon;
