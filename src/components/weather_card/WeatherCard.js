import React, {Component} from 'react';
import {Card, ListGroup,ListGroupItem} from "react-bootstrap";




// weather update for one day
class WeatherCard extends Component {

  constructor(props) {
    super(props);
  }

  getWeatherIcon(weathertype) {
    return "assets/icons/" + weathertype + ".svg";
  }

  render() {
    return <Card style={{width: '18rem'}}>
        <Card.Body>
         <Card.Title>{this.props.day}</Card.Title>
         <Card.Img style={{width: '30%'}} className="weather-icon" variant="top" src={this.getWeatherIcon(this.props.weatherType)}/>

         <ListGroup horizontal>
           <ListGroupItem>{this.props.highestTemp}</ListGroupItem>
           <ListGroupItem>{this.props.lowestTemp}</ListGroupItem>
           <ListGroup>
            <ListGroupItem>{this.props.humidity}</ListGroupItem>
            <ListGroupItem>{this.props.speed}</ListGroupItem>
           </ListGroup>
         </ListGroup>
        </Card.Body>
    </Card>
  }
}


export default WeatherCard;
