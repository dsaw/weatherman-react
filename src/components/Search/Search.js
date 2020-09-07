import React, { Component, Fragment } from "react";
import Autosuggest from "react-autosuggest";
import IsolatedScroll from "react-isolated-scroll";
import debounce from "lodash/debounce";
import { getName } from "country-list";

import Error from "../error/Error";
import Loader from "../loader/Loader";
import { AddressContext } from "../../context/address/Address";
import { SearchIcon } from "../weather/WeatherIcon";
import parseCoordinates from "../../utils/CoordinateHelper";
import { API_URL } from "../../utils/API";

import * as cityList from "../../data/city.list.json";

import theme from "./Search.module.scss";

const escapeSpecialChars = (string) =>
  string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");

const getSuggestionValue = (suggestion) => suggestion.name.split(",")[0];

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  return isHighlighted ? (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "5px 0 5px 3px",
      }}
    >
      {suggestion.name}
    </div>
  ) : (
    <div style={{ padding: "5px 0 5px 5px" }}>{suggestion.name}</div>
  );
};

const renderInputComponent = ({ inputProps }) => (
  <div className="inputContainer">
    <SearchIcon fontSize="1rem" />
    <input {...inputProps} />
  </div>
);

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.citySearchList = cityList.default.map((city, index) => {
      return Object.assign({}, city, {
        name: city.name + " ," + getName(city.country),
      });
    });
    this.state = {
      value: "",
      suggestions: [],
      showLoader: false,
      errorMessage: "",
    };
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  async getSuggestions(value) {
    const searchValue = value
      ? escapeSpecialChars(value.trim().toLowerCase())
      : "";
    const inputLength = searchValue.length;
    let items = [];

    try {
      if (inputLength === 0) items = [];
      else {
        this.setState({
          suggestions: [],
          showLoader: true,
        });

        const regex = new RegExp(`^${searchValue}`, "i");
        items = this.citySearchList.filter((city) => regex.test(city.name));

        /*const response = await fetch(`https://places-dsn.algolia.net/1/places/query`,
      {  method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({query: searchValue, type: 'city', aroundLatLngViaIP: false, language: 'en'})
      });

        const data = await response.json();
        console.log(data);
        if(data.nbHits > 0)
        {
          // fetch lat, long and location from metaweather api

           items = data['hits'].map(res => {
            var cityname = Array.isArray(res.locale_names) && res.locale_names.length ? res.locale_names[0] : '';
            var area = res.administrative ? res.administrative[0] : '';
            var country = res.country || '';
            var resultantname = area ? cityname + ', ' + area + ', ' + country : cityname + ', ' + country;

             return {'value': resultantname,
                      'id': parseInt(res.objectID.split('_')[0]),
                      'latLng': res._geoloc  };
          });
        }*/
      }

      this.setState({
        suggestions: items,
        showLoader: false,
        errorMessage:
          items.length > 0 && searchValue.length > 0
            ? ""
            : searchValue.length > 0
            ? "There seems to be no results for the query entered, please try again"
            : "",
      });

      // this.SearchItemInArrayObjects(items, searchValue.trim(), 'value');
      console.log(searchValue);
    } catch (error) {
      this.setState({
        suggestions: [],
        showLoader: false,
        errorMessage: "Some error came up: " + error,
      });
    }

    return items;
  }

  debounceQuery = debounce(this.getSuggestions, 1200);
  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    console.log(suggestion);

    // Metaweather needs a separate location search with given lat long to get
    // the address with location name & id which than will be needed
    // Commented this out - might require later
    /*const response = fetch(`${API_URL}location/search/?lattlong=${suggestion.coord.lat},${suggestion.coord.lng}`,
      {
        mode: "cors"
      }
      ).then((response)=> {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then((res) => {
        // set Address
         if (res.length) {
           console.log(this.context);
           res[0].title = suggestion.value;
           this.context.updateState({
             address: res[0],
             cityName: res[0].tite,
             latLng: parseCoordinates(res[0].latt_long)
           });

         }
          console.log(res);
      })
      .catch((error) => {
        console.error('There is a problem with your fetch: ', error);
        this.setState({
          showLoader: false,
          errorMessage: "Something went wrong, weather addresses can't be fetched right now"
        });*/

    // For OWM, just get it from the city
    this.context.updateState({
      address: suggestion,
      cityName: suggestion.name,
      latLng: suggestion.coord,
    });
  };

  onChange = (event, { newValue }) => {
    console.log("change:", event);
    this.setState({
      value: newValue,
    });
  };

  onBlur = (event, { newValue }) => {
    console.log("change:", event);
  };

  onSuggestionsFetchRequested = ({ value, reason }) => {
    console.log("fetch requested:", reason);
    if (reason === "input-focused") return;
    this.debounceQuery(value);
  };

  componentDidUpdate = (props, state) => {
    console.log("component updated", this.items);
  };

  onSuggestionsClearRequested = () => {
    console.log("clear requested:");
  };

  renderSuggestionContainer = ({ containerProps, children }) => {
    const { ref, ...restContainerProps } = containerProps;
    const callRef = (isolatedScroll) => {
      if (isolatedScroll !== null) {
        ref(isolatedScroll.component);
      }
    };

    //for fixing the issue of scrolling beyond the suggestions container scrolls the page itself
    return (
      <IsolatedScroll ref={callRef} {...containerProps}>
        {children}
      </IsolatedScroll>
    );
  };

  render() {
    const { value, suggestions, showLoader, errorMessage } = this.state;

    const inputProps = {
      placeholder: "Type a location for weather forecast",
      value: value,
      onChange: this.onChange,
    };

    const isLoading = this.state.showLoader;

    return (
      <Fragment>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={getSuggestionValue}
          highlightFirstSuggestion={true}
          /*renderInputComponent={renderInputComponent}*/
          renderSuggestion={renderSuggestion}
          renderSuggestionContainer={this.renderSuggestionContainer}
          inputProps={inputProps}
          theme={theme}
        />
        {isLoading ? (
          <Fragment>
            <Loader message={`Loading suggestions for ${value}...`} />
          </Fragment>
        ) : errorMessage ? (
          <Error errorMessage={errorMessage}></Error>
        ) : null}
      </Fragment>
    );
  }
}

SearchInput.contextType = AddressContext;

export default SearchInput;
