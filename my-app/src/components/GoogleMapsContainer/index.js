import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//import styled from 'styled-components';

export class GoogleMapsContainer extends React.Component {
  render() {
    const style = {
      width: '80vw',
      height: '50vh',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={style}
        initialCenter={{ lat: 52.094283, lng: 23.706361 }}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeJVQdANwoAkz9k702r0utf2_9oCZ_Yhc',
})(GoogleMapsContainer);
