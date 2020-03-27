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
    this.state = { repos: []}
    // process city id map list
    this.cityIdMap = cityListConfig.default.map(obj => renameKeys(obj, {'name':'value'}));
  }

  getItemsAsync(searchValue, cb) {
    // search for city with searchValue

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
     <Search items={this.cityIdMap}
      placeholder='Pick a city'
      maxSelected={1}
      getItemsAsync={this.getItemsAsync.bind(this)}
      onItemsChanged={this.logLocations.bind(this)} />
   )

 }
}

export default SearchInput;
