import React from 'react';
//  import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//import styled from 'styled-components';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export class YandexMapsContainer extends React.Component {
  render() {
    const style = {
      width: '80vw',
      height: '50vh',
      marginLeft: 'auto',
      marginRight: 'auto',
    };
    const mapState = { center: [52.093714, 23.706754], zoom: 16 };

    return (
      <div style={style}>
        <YMaps>
          <Map state={mapState} width="80vw" height="50vh">
            <Placemark
              geometry={{
                type: 'Point',
                coordinates: [52.093714, 23.706754],
              }}
              properties={{
                hintContent: 'Позитано',
                balloonContent:
                  '<b>Наш офис:</b><br/> Пн-Пт: 10.00-18.00<br/> Сб: 10.00-16.00',
              }}
              options={{
                preset: 'islands#redStretchyIcon',
                draggable: false,
              }}
            />
          </Map>
        </YMaps>
      </div>
    );
  }
}

export default YandexMapsContainer;
