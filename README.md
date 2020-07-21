# Table of Contents

- **[Getting Started](https://github.com/dsaw/weatherman-reactt#-getting-started)**

- **[Challenges](https://github.com/dsaw/weatherman-react#-challenges)**

- **[Contribution](https://github.com/dsaw/weatherman-react#-contribution)**

- **[License](https://github.com/dsaw/weatherman-react#-license)**

- **[Contact](https://github.com/dsaw/weatherman-react#-contact)**

- **[Acknowledgements](https://github.com/dsaw/weatherman-react#-acknowledgements)**


# Getting Started

## Basic Setup

- Clone the repository & use the `master` branch
```
git clone https://github.com/dsaw/weatherman-react.git
```
- Install the packages using the command
```
npm install
```
- Run following to start development
```
yarn start
```
- Open [http://localhost:3000](http://localhost:3000).
- The template is of Create React App - you can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- Powered by [MetaWeather](https://www.metaweather.com/api) currently.
# Challenges
- All free API services don't have hourly forecasts & Dark Sky API has closed down. OpenWeatherMap has released a one call API with 7-day forecast but only 48 hour hourly forecast. There is the old 5-day 3-hour forecast but have to check if its consistent.
- Time zones seem to be incorrect
- For search, [Algolia API](https://www.algolia.com/doc/rest-api/search/) has been used which fetches list of latitudes & longitude. The actual data comes from MetaWeather, which returns locations based on 'woeids' so another API call has to be made to search the possible list of locations closest to the location parameters. This can be inaccurate with results fetched from neighbouring countries too.

# LICENSE
- Licensed for open source use through [GNU GPLv3](https://www.gnu.org/licenses/quick-guide-gplv3.html).

# Contact
- Built by Devesh!
- email: [devesh47cool@gmail.com](devesh47cool@gmail.com)
