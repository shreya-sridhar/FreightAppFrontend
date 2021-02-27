import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geocoder from "react-native-geocoding";
import {StyleSheet,Image} from "react-native";
import img from 'C:/Users/shrey/FreightApp/assets/images/comfort.jpeg';

const GOOGLE_MAPS_APIKEY = "AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI";

const Booking = ({ origin, destination }) => {
  let start_lat = 0
  let start_lng = 0
  let end_lat = 0
  let end_lng = 0

  Geocoder.init(GOOGLE_MAPS_APIKEY);
  Geocoder.from(origin)
    .then((json) => {
      console.log(start_lat,start_lng);
      var location = json.results[0].geometry.location;
      start_lat = location.lat;
      start_lng = location.lng;
      console.log(start_lat,start_lng);
    })
    .catch((error) => console.warn(error));

  Geocoder.init(GOOGLE_MAPS_APIKEY);
  Geocoder.from(destination)
    .then((json) => {
      console.log(end_lat,end_lng);
      var location = json.results[0].geometry.location;
      end_lat = location.lat;
      end_lng = location.lng;
      console.log(end_lat,end_lng);
    })
    .catch((error) => console.warn(error));

  return (
    <MapView
      style={{width: '100%', height: '54%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        //{this.state.latitude}
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
    <Marker
          coordinate={{latitude: 28.456312, longitude: -16.252929}}
        //   title={'Origin'}
        ></Marker>
    <Marker
          coordinate={{latitude: 28.450627, longitude: -16.263045}}
        //   title={'Origin'}
        ></Marker>
          {/* <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain'
            }}
            source={img}
          />    */}
     <MapViewDirections
        origin={{latitude: 28.456312, longitude: -16.252929}}
        destination={{latitude: 28.450627, longitude: -16.263045}}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
  

      </MapView>
  );
};

export default Booking;

