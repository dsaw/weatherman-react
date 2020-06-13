import React, {Component, Fragment} from 'react';
import Search from 'react-search';
import Autosuggest from 'react-autosuggest';
import IsolatedScroll from 'react-isolated-scroll';

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

const getSuggestionValue = suggestion => suggestion.value.split(',')[0];

const shouldRenderSuggestions = () => (true);

const renderSuggestion = (suggestion, {query, isHighlighted}) => {
  return (isHighlighted ?
  <span style={{backgroundColor: 'black', color: 'white'}}>
    {suggestion.value}
  </span> :
  <span>
    {suggestion.value}
  </span>
);
};

class SearchInput extends Component {

  constructor (props) {
    super(props);
    this.cityIdList = cityListConfig.default.map(obj => renameKeys(obj, {'name':'value'}));
    this.state = {
      value: '',
      suggestions: [],
      showLoader: false
    };
    // process city id map list
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  async getSuggestions (value) {
  const searchValue = value ? value.trim().toLowerCase() : '';
  const inputLength = searchValue.length;
  let items;


   if (inputLength === 0)
      items = [];
    else {
      this.setState({showLoader: true});

      const response = await fetch(`https://places-dsn.algolia.net/1/places/query`,
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
        }
      }
      this.setState({
        suggestions: items,
        showLoader: false
      });
     // this.SearchItemInArrayObjects(items, searchValue.trim(), 'value');
      console.log(searchValue);
      return items;

}

  onSuggestionSelected  = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
      console.log(suggestion);

      // Metaweather needs a separate location search with given lat long to get
      // the address with location name & id which than will be needed
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
        console.error('There is a problem with your fetch:', error);
      });
  };


  onChange = (event, { newValue}) => {
    console.log("change:", event);
    this.setState({
      value: newValue
    });
  };

  onBlur = (event, { newValue}) => {
    console.log("change:", event);
    /*this.setState({
      value: newValue
    });*/
  }

   onSuggestionsFetchRequested = ({ value, reason }) => {
     console.log("fetch requested:", reason);
     if (reason === 'input-focused')
        return;
     // if (value !== this.state.value) {
      this.getSuggestions(value);

    // }
   };

   componentDidUpdate = (props, state) => {
     console.log("compoonent updated", this.items);
   };

  onSuggestionsClearRequested = () => {
     console.log("clear requested:");
  /*   this.setState({
       suggestions: []
     });*/
   };

   renderSuggestionContainer= ({containerProps, children}) => {
     const {ref, ...restContainerProps} = containerProps;
     const callRef = isolatedScroll => {
       if (isolatedScroll !== null) {
         ref(isolatedScroll.component);
       }
     }

     //for fixing the issue of scrolling beyond the suggestions container scrolls the page itself

     return (<IsolatedScroll ref={callRef} {...containerProps}>
              {children}
            </IsolatedScroll>);
   };

   render() {
     const {value, suggestions, showLoader} = this.state;

     const inputProps = {
       placeholder: 'Type a city/location' ,
       value:  value,
       onChange: this.onChange
     };

     const isLoading = this.state.showLoader;


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
         renderSuggestionContainer={this.renderSuggestionContainer}
         inputProps={inputProps}
         theme={theme}
       />
         {isLoading ? <Fragment><p>Loading...</p></Fragment> : null}
       </section>
   );

 };
}

SearchInput.contextType = AddressContext;

export default SearchInput;
