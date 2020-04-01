import React, {Component} from 'react';
import Search from 'react-search';
import * as cityListConfig from './data/city.list.json';


// for renaming name to id of city list
function renameKeys(obj, newKeys) {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key;
    return { [newKey]: obj[key] };
  });
  return Object.assign({}, ...keyValues);
}

class SearchInput extends Component {

  constructor (props) {
    super(props);
    this.cityIdList = cityListConfig.default.map(obj => renameKeys(obj, {'name':'value'}));
    this.state = { repos: []};
    // process city id map list

  }

  getItemsAsync(searchValue, cb) {
    // search for city with searchValue
    if (searchValue.trim()) {
     let items = this.cityIdList;//.filter(obj => obj.value.startsWith(searchValue.toUpperCase()));
     this.setState({repos: items, searchValue: searchValue});
     cb();
    // this.SearchItemInArrayObjects(items, searchValue.trim(), 'value');

     console.log(searchValue);
    }

  }


   logLocations(locations) {
     console.log(locations);
   }

   render() {
     let items = [
       {id: 0, value: 'pune'},
       {id: 1, value: 'delhi'},
       {id: 2, value: 'vadodara'},
       {id: 3, value: 'mumbai'}
     ];


   return (
     <Search items={this.state.repos}
      placeholder='Pick a city'
      maxSelected={1}
      getItemsAsync={this.getItemsAsync.bind(this)}
      onItemsChanged={this.logLocations.bind(this)} />
   )

 }
}

export default SearchInput;
