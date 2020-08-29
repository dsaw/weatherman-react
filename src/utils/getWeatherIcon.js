// map url to icons
const getWeatherIcon = (iconAbbr, size) => {
  let sizeX = (size !== '1') ? `@${size}x` : ``;
  return `${iconAbbr}${sizeX}.png`;
};

export default getWeatherIcon;
