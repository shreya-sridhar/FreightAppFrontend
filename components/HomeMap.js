import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
  Switch,
  View,
  StyleSheet,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import img from "C:/Users/shrey/FreightApp/assets/images/comfort.jpeg";
import img1 from "C:/Users/shrey/FreightApp/assets/images/truck2.png";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import RaspberryStrip from "C:/Users/shrey/FreightApp/components/RaspberryStrip.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import { Permissions } from "expo-permissions";
import { Location } from "expo-location";
import { render } from "react-dom";
import Geocoder from "react-native-geocoding";
import Icon from "react-native-vector-icons/FontAwesome5";
import { faThList } from "@fortawesome/free-solid-svg-icons";
const GOOGLE_MAPS_APIKEY = "AIzaSyC8whO4wSgNifJRFnCKMwVml2yB6AtbQ-8";
const cars = [
  {
    id: "0",
    type: "UberX",
    latitude: 37.7749,
    longitude: -122.4194,
    heading: 47,
  },
  {
    id: "1",
    type: "Comfort",
    latitude: 37.3382,
    longitude: -121.8863,
    heading: 190,
  },
  {
    id: "2",
    type: "UberXL",
    latitude: 32.7157,
    longitude: -117.1611,
    heading: 99,
  },
  {
    id: "3",
    type: "Comfort",
    latitude: 37.3861,
    longitude: -122.0839,
    heading: 120,
  },
  {
    id: "4",
    type: "Comfort",
    latitude: 37.5485,
    longitude: -121.9886,
    heading: 120,
  },
  {
    id: "5",
    type: "Comfort",
    latitude: 37.5630,
    longitude: -122.3255,
    heading: 120,
  },
  {
    id: "6",
    type: "Comfort",
    latitude: 37.4848,
    longitude: -122.2281,
    heading: 120,
  },
];

export default class HomeMap extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    switchValue: false,
    searchFocused: false,
    destination: "",
    origin: "",
    // vehicle_type: "Standard Truck (6ft)",
    // users: this.props.users,
    pickup_date: null,
    pickup_time: null,
    start_lat: null,
    start_lng: null,
    end_lat: null,
    end_lng: null,
  };

  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

  setLocation = () => {
    console.log(this.state.origin);
    Geocoder.init(GOOGLE_MAPS_APIKEY);
    Geocoder.from(this.state.origin)
      .then((json) => {
        console.log(this.state.origin);
        let location = json.results[0].geometry.location;
        this.setState({ latitude: location.lat, longitude: location.lng });
      })
      .catch((error) => console.warn(error));
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position["coords"]["latitude"],
          longitude: position["coords"]["longitude"],
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        this.setState({ latitude, longitude });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
        distanceFilter: 1,
      }
    );
  }

  onFocus = () => {
    this.setState({ searchFocused: true });
  };

  onBlur = () => {
    this.setState({ searchFocused: false });
  };

  setOrigin = (data, details) => {
    console.log("set origin");
    this.setState({ origin: data.description });
  };

  setDestination = (data, details) => {
    this.setState({ destination: data.description });
  };

  getDate = (date) => {
    console.log("herre");
    this.setState({ pickup_date: date, pickup_time: date });
  };

  getLatLng = async () => {
    console.log("inside latlng")
    Geocoder.init(GOOGLE_MAPS_APIKEY);
    await Geocoder.from(this.state.origin).then(async(json1) => {
      Geocoder.init(GOOGLE_MAPS_APIKEY);
      await Geocoder.from(this.state.destination).then((json2) => {
        var location = json2.results[0].geometry.location;
        let end_lat = location.lat;
        let end_lng = location.lng;
        var location = json1.results[0].geometry.location;
        let start_lat = location.lat;
        let start_lng = location.lng;
        console.log(start_lat)
        this.setState({
          start_lat: start_lat,
          start_lng: start_lng,
          end_lat: end_lat,
          end_lng: end_lng,
        });
      });
    });
  };

  combined =  async () => {
    await this.getLatLng();
    console.log("lat",this.state.start_lat)
    await this.props.route.params.catId.getRideData(this.state)
    await this.props.route.params.catId.findDriver()
    console.log(this.props)
     this.props.route.params.catId.navigation.navigate("Booking")
  };

  render() {
    return (
      <>
        <View>
          {/* <Text>{this.props.users[0].name}</Text> */}
          <Icon name="bell" style={{ fontSize: 25 }} />
          <Text>
            {this.state.switchValue
              ? "You are now a Driver"
              : "You are now a Passenger"}
          </Text>
          <Switch
            style={{ marginTop: 30 }}
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <MapView
          style={{ width: "100%",height: "56%" , position: "absolute",
          top: Platform.select({ ios: 20, android: 150 })}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            // placeId: this.state.sourceId,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
           {cars.map((car) => (
            <Marker
              key={car.id}
              coordinate={{ latitude: car.latitude, longitude: car.longitude }}
            >
              <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain"
                }}
                source={img1}
              /> 
            </Marker>
          ))}

          {this.state.latitude?<Marker
              // key='current loc'
              coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
            />:null} 
        {this.state.latitude ? (
            <Marker
              // key='current loc'
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
              }}
            >
              {/* <Image
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: "contain",
                }}
                source={img1}
              /> */}
            </Marker>
          ) : null}

        </MapView>
        <View style={styles.bottom} onPress={() => this.getDate}>
          <RaspberryStrip />
          <Button title="CONTINUE" onPress={this.combined} />
        </View>
        <View
          keyboardShouldPersistTaps="always"
          style={{
            padding: 0,
            margin: 0,
            position: "absolute",
            top: 2,
            width: "100%",
          }}
        >
          <FindPlaces
            getDate={this.getDate}
            latitude={this.state.latitude}
            longitude={this.state.longitude}
            searchFocused={this.searchFocused}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            setOrigin={this.setOrigin}
            setDestination={this.setDestination}
            destination={this.destination}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 0,
  },
});


