import { API_URL } from "./API";
import parseCoordinates from "./CoordinateHelper";

const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const fetchWeatherDailyForecast = async (address) => {
  let response;
  // OWM needs an API key
  try {
    if (address.address.id) {
      const queryObj = Object.assign({}, address.address.coord, {
        appid: WEATHER_API_KEY,
        exclude: "hourly,minutely",
        units: "metric",
      });
      const queryParams = Object.keys(queryObj)
        .map((key) => `${key}=${queryObj[key]}`)
        .join("&");
      const url = `${API_URL}onecall?${queryParams}`;
      response = await fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  return response;
};

const fetchLocationData = (latLng, addressContext) => {
  // NOTE: MetaWeather specific url
  return fetch(
    `${API_URL}location/search/?lattlong=${latLng.lat},${latLng.lng}`,
    {
      mode: "cors",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((res) => {
      // set Address
      if (res.length) {
        console.log(this.context);
        res[0].title = addressContext.name;
        addressContext.updateState({
          address: res[0],
          cityName: res[0].tite,
          latLng: parseCoordinates(res[0].latt_long),
        });
      }
      console.log(res);
    });
};

export { fetchWeatherDailyForecast, fetchLocationData };
