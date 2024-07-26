import { API_URL } from "./API";
import parseCoordinates from "./CoordinateHelper";

const WEATHER_API_KEY = "702e431e52b7d8325b13b744fb641e9f";
// process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
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
      const url = `${API_URL}forecast?${queryParams}`;
      response = await fetch(url, 
    { mode: "cors",
      origin :"https://dsaw.github.io/"
    }).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
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
        origin :"https://dsaw.github.io/"
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
        // eslint-disable-next-line no-console
        console.log(this.context);
        res[0].title = addressContext.name;
        addressContext.updateState({
          address: res[0],
          cityName: res[0].tite,
          latLng: parseCoordinates(res[0].latt_long),
        });
      }
      // eslint-disable-next-line no-console
      console.log(res);
    });
};

export { fetchWeatherDailyForecast, fetchLocationData };
