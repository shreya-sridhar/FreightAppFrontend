import React, {useState, useEffect} from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geocoder from "react-native-geocoding";
import {StyleSheet,Image,Text,Button} from "react-native";
import img from 'C:/Users/shrey/FreightApp/assets/images/comfort.jpeg';
import Cars from 'C:/Users/shrey/FreightApp/components/Cars.js';
import Dropdown from 'C:/Users/shrey/FreightApp/components/Dropdown.js';

const GOOGLE_MAPS_APIKEY = "AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI";

const Booking = ({route,navigation }) => {
  // let start_lat = 0
  // let start_lng = 0
  // let end_lat = 0
  // let end_lng = 0
  const [start_lat, setStartLat] = useState(28.456312)
  const [start_lng, setStartLng] = useState(-16.252929)
  const [end_lat, setEndLat] = useState(28.450627)
  const [end_lng, setEndLng] = useState(-16.263045)
  const [vehicle, setVehicle] = useState("Standard Truck (6ft)")

  // const { origin, destination } = route.params;
  const origin = navigation.getParam('origin')
  const destination = navigation.getParam('destination')
  const id = navigation.getParam('id')
  const users = navigation.getParam('users')
  const pickup_time = navigation.getParam('pickup_time')
  const pickup_date = navigation.getParam('pickup_date')

  useEffect(() => {
    Geocoder.init(GOOGLE_MAPS_APIKEY);
    Geocoder.from(origin)
      .then((json1) =>{Geocoder.init(GOOGLE_MAPS_APIKEY);
      Geocoder.from(destination)
        .then((json2) => {
          // console.log(end_lat,end_lng);
          // console.log(destination)
          var location = json2.results[0].geometry.location;
          let end_lat = location.lat;
          let end_lng = location.lng;
          setEndLat(end_lat)
          setEndLng(end_lng)
          // console.log(end_lat,end_lng);

          // console.log("hi",start_lat,start_lng);
          // console.log("hello",origin)
          var location = json1.results[0].geometry.location;
          let start_lat = location.lat;
          let start_lng = location.lng;
          setStartLat(start_lat)
          setStartLng(start_lng)
          // console.log("done",start_lat,start_lng);
        })})
  },[])

  selectVehicle = (veh) => {
    console.log("vehicle set")
    setVehicle(veh)
  }

  return (
  <>
    <MapView
      style={{width: '100%', height: '54%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      
      initialRegion={{
        latitude: start_lat,
        //{this.state.latitude}
        longitude: start_lng,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121 ,
      }}>
        <Text>{vehicle}</Text>
    <Marker
          coordinate={{latitude: start_lat, longitude: start_lng}}
        //   title={'Origin'}
        ></Marker>
    <Marker
          coordinate={{latitude: end_lat, longitude: end_lng}}
        //   title={'Origin'}
        ></Marker>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain'
            }}
            source={img}
          />  
      {/* <Text>{users[0].name}</Text> */}
      <Text>{start_lat} {start_lng}</Text>
      <Text>{end_lat} {end_lng}</Text> 
      <Text>{pickup_time}</Text>
      <Text>{pickup_date}</Text>
     {/* <MapViewDirections
        origin={{latitude: start_lat, longitude: start_lng}}
        destination={{latitude: end_lat, longitude: end_lng}}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      /> */}
      </MapView>
      <Text>Select Load Type</Text>
      <Dropdown/>
      <Text>Select Car Type</Text>
      <Text>{origin}</Text>
      <Text>{destination}</Text>
      <Cars selectVehicle = {selectVehicle}/>
      
      <Button title="CONFIRM BOOKING" onPress={() => navigation.navigate('ConfirmBooking',{
                origin: origin,
                destination: destination,
                id: id,
                users: users
              })}/>
    </>
  );
};

export default Booking;



