import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geocoder from "react-native-geocoding";
import { StyleSheet, Image, Text, Button } from "react-native";
import img from "C:/Users/shrey/FreightApp/assets/images/comfort.jpeg";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";
import Dropdown from "C:/Users/shrey/FreightApp/components/Dropdown.js";
import { render } from "react-dom";

const GOOGLE_MAPS_APIKEY = "";

export default class Booking extends React.Component {
  state = {
    start_lat: 28.456312,
    start_lng: -16.252929,
    end_lat: 28.450627,
    end_lng: -16.263045,
    vehicle: "Standard Truck (6ft)",
  };

  componentDidMount() {
    Geocoder.init(GOOGLE_MAPS_APIKEY);
    Geocoder.from(this.props.origin).then((json1) => {
      Geocoder.init(GOOGLE_MAPS_APIKEY);
      Geocoder.from(this.props.destination).then((json2) => {
        var location = json2.results[0].geometry.location;
        let end_lat = location.lat;
        let end_lng = location.lng;
        var location = json1.results[0].geometry.location;
        let start_lat = location.lat;
        let start_lng = location.lng;
        this.setState({
          start_lat: start_lat,
          start_lng: start_lng,
          end_lat: end_lat,
          end_lng: end_lng,
        });
      });
    });
  }

  selectVehicle = (veh) => {
    console.log(this.props);
    console.log("origin");
    console.log("vehicle set");
    this.setState({ vehicle: veh });
  };

  combined = () => {
    console.log("combined");
    this.props.getVehicle(this.state.vehicle);
    this.props.bookRide();
    this.props.routerprops.navigation.navigate("ConfirmBooking");
  };

  render() {
    return (
      <>
        {/* <MapView
          style={{ width: "100%", height: "54%" }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: this.state.start_lat,
            //{this.state.latitude}
            longitude: this.state.start_lng,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
        >
          <Text>{this.state.vehicle}</Text>
          <Marker
            coordinate={{
              latitude: this.state.start_lat,
              longitude: this.state.start_lng,
            }}
            //   title={'Origin'}
          ></Marker>
          <Marker
            coordinate={{
              latitude: this.state.end_lat,
              longitude: this.state.end_lng,
            }}
            //   title={'Origin'}
          ></Marker>
          <Image
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
            source={img}
          /> */}
          {/* <MapViewDirections
        origin={{latitude: start_lat, longitude: start_lng}}
        destination={{latitude: end_lat, longitude: end_lng}}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      /> */}
        {/* </MapView> */}
        <Text>Select Load Type</Text>
        {/* <Dropdown/> */}
        <Text>Select Car Type</Text>
        {/* <Text>{origin}</Text> */}
        {/* <Text>{destination}</Text> */}
        <Cars selectVehicle={this.selectVehicle} />

        <Button title="CONFIRM BOOKING" onPress={this.combined} />
      </>
    );
  }
}

