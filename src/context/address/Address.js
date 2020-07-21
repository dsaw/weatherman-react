// eslint-disable-next-line
import React, {
  Component
} from 'react';
import parseCoordinates from '../../utils/CoordinateHelper';
import fetchIPLocation from '../../utils/fetchIPLocation';
import {isValid} from '../../utils/validityHelper';


const AddressContext = React.createContext(null);

//context to set address when selected
class AddressContextProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: {},
      latLng: {},
      cityName: '',
      updateState: this.updateState
    };

  }

  updateAddress = (latLng) => {
    //  geocoding api to get address closest to latLong
    const response = fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latLng.lat},${latLng.lng}`, {
        mode: "cors"
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then((res) => {
        // set Address
        if (res.length) {
          console.log(res[0]);
          this.updateState({
            address: res[0],
            cityName: res[0].title,
            latLng: parseCoordinates(res[0].latt_long)
          });

        }
        console.log(res);
      })
      .catch((error) => {
        console.error('There is a problem with your fetch:', error);
      });


  }

  updateIPAddress = async () => {
    var response = await fetchIPLocation();
    if (isValid(response)) {
      var latLng = {
        lat: response.latitude,
        lng: response.longitude
      };
      this.updateAddress(latLng);
    }
  }

  getCurrentCoordinates = () => {
    // use HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var latLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.updateAddress(latLng);
        console.log(latLng);

      }, (error) => {
        //handle error here
        console.error(error);
        this.updateIPAddress();
      });
    }
    // TODO: do ip lookup alternatively if geolocation not given
    else {
      this.updateIPAddress();

    }


  }

  updateState = (state) => {
    this.setState({
      ...state
    });
  }

  componentDidMount() {
    this.getCurrentCoordinates();


  }


  render() {
    return (
      <AddressContext.Provider value={this.state}>
         {this.props.children}
      </AddressContext.Provider>
    )
  }
}


export {
  AddressContextProvider,
  AddressContext
};
