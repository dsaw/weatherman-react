import React, {Component} from 'react';
import Search from 'react-search';

class SearchInput extends Component {
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
     <Search items={items}
      placeholder='Pick a city'
      maxSelected={1}
      onItemsChanged={this.logLocations.bind(this)} />
   )

 }
}

export default SearchInput;
