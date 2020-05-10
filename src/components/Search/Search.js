import React, {Component} from 'react';
import Search from 'react-search';
import Autosuggest from 'react-autosuggest';
import {AddressContext} from '../../context/address/Address';
import WeeklyForecast from '../weekly_forecast/WeeklyForecast';
import parseCoordinates from '../../utils/CoordinateHelper';
import * as cityListConfig from '../../data/city.list.json';

import theme from './Search.module.scss';

// for renaming name to id of city list
function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

const getSuggestionValue = suggestion => suggestion.value;

const renderSuggestion = suggestion => (
  <span>
    {suggestion.value}
  </span>
);

class SearchInput extends Component {

  constructor (props) {
    super(props);
    this.cityIdList = cityListConfig.default.map(obj => renameKeys(obj, {'name':'value'}));
    this.items = [];
    this.state = { value: '',
    suggestions: [],
    showLoader: false
    };
    // process city id map list

  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  async getSuggestions (value) {
  const searchValue = value ? value.trim().toLowerCase() : '';
  const inputLength = searchValue.length;

   if (inputLength === 0)
      return [];
    else {

      const response = await fetch(`https://places-dsn.algolia.net/1/places/query`,
      {  method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({query: searchValue, type: 'city',aroundLatLngViaIP: false})
      });

        const data = await response.json();
        console.log(data);
        if(data.nbHits > 0)
        {
          // fetch lat, long and location

           this.items = data['hits'].map(res => {
            var cityname = Array.isArray(res.locale_names.default) && res.locale_names.default.length ? res.locale_names.default[0] : '';
            var county = res.county ? res.county.default[0] : '';
          var country = Array.isArray(res.country.default) ? res.country.default[0] : '';
               var resultantname = county ? cityname + ', ' + county + ', ' + country : cityname + ', ' + country;

             return {'value': resultantname,
                      'id': parseInt(res.objectID.split('_')[0]),
                      'latLng': res._geoloc  };
          });
        }
      }
     // this.SearchItemInArrayObjects(items, searchValue.trim(), 'value');
      console.log(searchValue);
      return this.items;

}

  onSuggestionSelected  = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
      console.log(suggestion);

      const response = fetch(`https://www.metaweather.com/api/location/search/?lattlong=${suggestion.latLng.lat},${suggestion.latLng.lng}`,
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
           this.context.updateState({
             address: res[0],
             latLng: parseCoordinates(res[0].latt_long)
           });

         }
          console.log(res);
      })
      .catch((error) => {
        console.error('There is a problem with your fetch:', error);
      });
  };


  onChange = (event, { newValue}) => {
    this.setState({
      value: newValue
    });
  };

   onSuggestionsFetchRequested = ({ value }) => {
     this.getSuggestions(value);
     this.setState({
       suggestions: this.items
     });
   };

   onSuggestionsClearRequested = () => {
     this.setState({
       suggestions: []
     });
   };

   clearState() {
     // clear the state of the component
   }


   render() {
     const {value, suggestions } = this.state;

     const inputProps = {
       placeholder: 'Type a city/location',
       value,
       onChange: this.onChange
     };


   return (
     <section>
     <Autosuggest
         suggestions={suggestions}
         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
         onSuggestionSelected={this.onSuggestionSelected}
         getSuggestionValue={getSuggestionValue}
         highlightFirstSuggestion={true}
         renderSuggestion={renderSuggestion}
         inputProps={inputProps}
         theme={theme}
       />
       </section>
   );

 };
}

SearchInput.contextType = AddressContext;

export default SearchInput;
