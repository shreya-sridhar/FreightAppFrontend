import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {StyleSheet,Image,Text,Button} from "react-native";
import img from 'C:/Users/shrey/FreightApp/assets/images/comfort.jpeg';
import Cars from 'C:/Users/shrey/FreightApp/components/Cars.js';

const GOOGLE_MAPS_APIKEY = "AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI";

class Booking extends React.Component{

    render(){
  return (
  <>
  <Text>Hello</Text>
    {/* <MapView
      style={{width: '100%', height: '54%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      
      initialR(routerprops) =>egion={{
        latitude: start_lat,
        longitude: start_lng,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121 ,
      }}>
    <Marker
          coordinate={{latitude: start_lat, longitude: start_lng}}
        ></Marker>
    <Marker
          coordinate={{latitude: end_lat, longitude: end_lng}}
        ></Marker>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain'
            }}
            source={img}
          />  
     <MapViewDirections
        origin={{latitude: start_lat, longitude: start_lng}}
        destination={{latitude: end_lat, longitude: end_lng}}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      </MapView> */}
    </>
  );}
};

export default Booking;



