import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Geocoder from "react-native-geocoding";
import { StyleSheet, Image, Text, Button, View } from "react-native";
import img from "C:/Users/shrey/FreightApp/assets/images/comfort.jpeg";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";
import Dropdown from "C:/Users/shrey/FreightApp/components/Dropdown.js";
import PushNotification from "C:/Users/shrey/FreightApp/components/PushNotification.js";
import { render } from "react-dom";

const GOOGLE_MAPS_APIKEY = "AIzaSyC8whO4wSgNifJRFnCKMwVml2yB6AtbQ-8";
let showMap = true

export default class Booking extends React.Component {
  state = {
    start_lat: this.props.start_lat,
    start_lng: this.props.start_lng,
    end_lat: this.props.end_lat,
    end_lng: this.props.end_lng,
    vehicle: "Standard Truck (6ft)",
    showPush: false
  };

  selectVehicle = (veh) => {
    console.log(this.props);
    console.log("origin");
    console.log("vehicle set");
    this.setState({ vehicle: veh });
  };

  combined = async () => {
    console.log("combined");
    console.log(this.props);
    await this.props.getVehicle(this.state.vehicle);
    await this.props.bookRide();
    await this.setState({showPush:true})
    // this.props.routerprops.navigation.navigate("ConfirmBooking")
  };

  render() {
    return (
      <>
        <MapView
          style={{ width: "100%", height: "54%" }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: this.props.start_lat,
            //{this.state.latitude}
            longitude: this.props.start_lng,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          <Marker
            coordinate={{
              latitude: this.props.start_lat,
              longitude: this.props.start_lng,
            }}
            //   title={'Origin'}
          ></Marker>
          <Marker
            coordinate={{
              latitude: this.props.end_lat,
              longitude: this.props.end_lng,
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
          />
          {/* <MapViewDirections
            origin={{
              latitude: this.props.start_lat,
              longitude: this.props.start_lng,
            }}
            destination={{
              latitude: this.props.end_lat,
              longitude: this.props.end_lng,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
            onError={(e) => console.log("map error", e)}
          /> */}
        </MapView>
        {this.state.showPush && <PushNotification/>}
        <View style={{width:200,alignItems: 'center',
        justifyContent: 'center',left:95}}>{this.state.showPush && <Button style={{width:100}} onPress={() => this.props.routerprops.navigation.navigate("ConfirmBooking")} title="Live Location"></Button>}</View>
        <Cars selectVehicle={this.selectVehicle} />
        <Button title="CONFIRM BOOKING" onPress={this.combined} />
      </>
    );
  }
}





























