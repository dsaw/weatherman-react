import React, {Component} from 'react';
import Search from 'react-search';
import Autosuggest from 'react-autosuggest';
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

const onSuggestionSelected  = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => ({

});

const renderSuggestion = suggestion => (
  <p>
    {suggestion.value}
  </p>
);

class SearchInput extends Component {

  constructor (props) {
    super(props);
    this.cityIdList = cityListConfig.default.map(obj => renameKeys(obj, {'name':'value'}));
    this.items = [];
    this.state = { value: '',
    suggestions: []};
    // process city id map list

  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  async getSuggestions (value) {
  const searchValue = value ? value.trim().toLowerCase() : '';
  const inputLength = searchValue.length;

   if (inputLength === 0)
      return [];
    else {

      const response = await  fetch(`https://api.teleport.org/api/cities/?search=${searchValue}`);

        const data = await response.json();
        console.log(data);
        if(data.count > 0)
        {
           this.items = data['_embedded']['city:search-results'].map(res => ( {'value': res.matching_full_name,
        'id': parseInt(res._links['city:item'].href.split('/')[5].replace(/\D/g, ''))} ));
        }
      }
     // this.SearchItemInArrayObjects(items, searchValue.trim(), 'value');
      console.log(searchValue);
      return this.items;

}

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
         getSuggestionValue={getSuggestionValue}
         renderSuggestion={renderSuggestion}
         inputProps={inputProps}
         theme={theme}
       />
       </section>
   );

 };
}

export default SearchInput;
