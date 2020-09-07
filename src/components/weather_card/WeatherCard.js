import React, { Component } from "react";
import getWeatherIcon from "../../utils/getWeatherIcon";
import assetsSrc from "../../utils/assetsSrc";
import { convertToFahrenheit } from "../../utils/temperatureHelper";
import { UnitContext } from "../../context/unit/Unit";

const roundNumbers = (num) => {
  return Math.round(num);
};

// weather update for one day
class WeatherCard extends Component {
  static contextType = UnitContext;

  render() {
    const highlightCard = this.props.isSelected ? "bg-dark text-white" : "";
    return (
      <div
        className={`card d-flex flex-row flex-sm-row flex-md-column bd-highlight align-items-center justify-content-center ${highlightCard}`}
        onClick={this.props.clickCallback}
      >
        <div className="card-component mx-auto p-2 text-center font-weight-bold headers">
          {this.props.day.substring(0, 3)}
        </div>
        <div className="card-component mx-1">
          <img
            src={`${assetsSrc}/${getWeatherIcon(
              this.props.weatherType.abbr,
              "2"
            )}`}
            alt={this.props.weatherType.name}
            className="weather-icon w-100 h-100"
          />
        </div>

        <div className="card-component mx-auto d-flex flex-row">
          <div className="mx-1">
            {roundNumbers(
              this.context.weatherUnit === "C"
                ? this.props.highestTemp
                : convertToFahrenheit(this.props.highestTemp)
            )}{" "}
            <sup>o</sup>
          </div>
          <div className="mx-1">
            {roundNumbers(
              this.context.weatherUnit === "C"
                ? this.props.lowestTemp
                : convertToFahrenheit(this.props.lowestTemp)
            )}{" "}
            <sup>o</sup>
          </div>
        </div>
        <div className="card-component mx-auto p-2">
          <div>{roundNumbers(this.props.humidity)} %</div>
          <div>{roundNumbers(this.props.pressure)} mbar</div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
