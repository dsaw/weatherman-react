import API_URL from './API'

const FetchWeatherData = async (address) => {

  let weatherForecast = [],response;
  // metaweather needs woeid instead of latLong
  try {
    if (address.address.woeid) {
      const url = `${API_URL}location/${address.address.woeid}/`;
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
