// eslint-disable-next-line
import React, {
  Component
} from 'react';
import parseCoordinates from '../../utils/CoordinateHelper';
import {isValid} from '../../utils/validityHelper';
import {API_URL} from '../../utils/API';
const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const AddressContext = React.createContext(null);

class AddressContextProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: {},
      latLng: {},
      cityName: '',
      isLoading: false,
      isError: false,
      message: '',
      updateState: this.updateState
    };

  }

  updateAddress = (latLng) => {
    //  geocoding api to get address closest to lat & long
    this.setState({
      isLoading: true,
      message: 'Obtaining the location from coordinates...'
    });
    const response = fetch(`${API_URL}weather?lat=${latLng.lat}&lon=${latLng.lng}&units=metric&appid=${WEATHER_API_KEY}`, {
        mode: "cors"
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }).then((res) => {
        // set Address
        if (res.id) {
          this.setState({
            address: Object.assign({}, {id: res.id, name: res.name, coord: res.coord}),
            cityName: res.name,
            latLng: res.coord,
            isLoading: false,
            isError: false,
            message: ''
          });

        }
        console.log(res);
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          isError: true
        });
        console.error('There is a problem with your fetch: ', error);
      });

  }

  updateIPAddress = async () => {
    this.setState({
      isLoading: true,
      message: 'Fetching IP address...'
    });
    try {
    var response = await  await fetch('https://ipapi.co/json').then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
    }
    catch (error) {
      console.error('There is a problem with your fetch: ', error);
      this.setState({
        isLoading: false,
        isError: true,
        message: ''
      });
    }
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
        console.error(error);
        this.updateIPAddress();
      });
    }
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
