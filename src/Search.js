import React, {Component} from 'react';
import Search from 'react-search';
import Autosuggest from 'react-autosuggest';
import * as cityListConfig from './data/city.list.json';


// for renaming name to id of city list
function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

const getSuggestionValue = suggestion => suggestion.value;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.value}
  </div>
);

class SearchInput extends Component {

  constructor (props) {
    super(props);
    this.cityIdList = cityListConfig.default.map(obj => renameKeys(obj, {'name':'value'}));
    this.state = { value: '',
    suggestions: []};
    // process city id map list

  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions (value) {
  const searchValue = value ? value.trim().toLowerCase() : '';
  const inputLength = searchValue.length;
  var items = [];

   if (inputLength === 0)
      return [];
    else {
      (async () => {
      const response = await  fetch(`https://api.teleport.org/api/cities/?search=${searchValue}`)

        const data = await response.json();
        console.log(data);
        if(data.count > 0)
        {
           items = data['_embedded']['city:search-results'].map(res => ( {'value': res.matching_full_name,
        'id': parseInt(res._links['city:item'].href.split('/')[5].replace(/\D/g, ''))} ));
        }
      })();
     // this.SearchItemInArrayObjects(items, searchValue.trim(), 'value');
      console.log(searchValue);
      return items;
   }
};

  onChange = (event, { newValue}) => {
    this.setState({
      value: newValue
    });
  };

   onSuggestionsFetchRequested = ({ value }) => {
     this.setState({
       suggestions: this.getSuggestions(value)
     });
   }

   onSuggestionsClearRequested = () => {
     this.setState({
       suggestions: []
     });
   };


   render() {
     const {value, suggestions } = this.state;

     const inputProps = {
       placeholder: 'Type a city/location',
       value,
       onChange: this.onChange
     };



   return (
     <Autosuggest
         suggestions={suggestions}
         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
         getSuggestionValue={getSuggestionValue}
         renderSuggestion={renderSuggestion}
         inputProps={inputProps}
       />
   )

 }
}

export default SearchInput;
