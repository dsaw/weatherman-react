import API_URL from './API'

const FetchWeatherData = async (latlong,
  address) => {

  let weatherForecast = [],response;
  // metaweather needs woeid instead of latLong
  try {
    if (address.woeid) {
      const url = `${API_URL}location/${address.woeid}/`;
      const options = {};
      response = await fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });

    weatherForecast = response.consolidated_weather;

    }
  } catch (error) {
    console.log(error);
  }

  return response;

}

export default FetchWeatherData;
