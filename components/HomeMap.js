import React, { useState, useEffect } from "react";
import { Image,Text, Button,Dimensions,TouchableOpacity, Switch,View} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import img from 'C:/Users/shrey/FreightApp/assets/images/comfort.jpeg';
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import RaspberryStrip from "C:/Users/shrey/FreightApp/components/RaspberryStrip.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import {Permissions} from 'expo-permissions'
import {Location} from 'expo-location'
import { render } from "react-dom";
import Icon from 'react-native-vector-icons/FontAwesome5';

const cars = [
    {
      id: '0',
      type: 'UberX',
      latitude: 28.450627,
      longitude: -16.263045,
      heading: 47,
    },
    {
      id: '1',
      type: 'Comfort',
      latitude: 28.456312,
      longitude: -16.252929,
      heading: 190,
    },
    {
      id: '2',
      type: 'UberXL',
      latitude: 28.456208,
      longitude: -16.259098,
      heading: 99,
    },
    {
      id: '3',
      type: 'Comfort',
      latitude: 28.450627,
      longitude:-16.263045,
      heading: 120,
    },
  ];

export default class HomeMap extends React.Component {
 
    state = {
		latitude: null,
        longitude:null,
        switchValue: false
	};

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({ switchValue: value });
    //state changes according to switch
    //which will result in re-render the text
  };

	// findCoordinates = () => {
	// 	navigator.geolocation.getCurrentPosition(
	// 		position => {
	// 			const location = JSON.stringify(position);

	// 			this.setState({ location });
	// 		},
	// 		error => Alert.alert(error.message),
	// 		{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
	// 	);
	// };

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ latitude:position["coords"]["latitude"],longitude:position["coords"]["longitude"] });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
    }

  render(){
    debugger
  return (
      <>
      <View>
      <Icon name='bell' style={{ fontSize: 25 }} />
    <Text>{this.state.switchValue ? 'You are now a Driver' : 'You are now a Passenger'}</Text>
    <Switch
          style={{ marginTop: 30 }}
          onValueChange={this.toggleSwitch}
          value={this.state.switchValue}
        />
        </View>
    <FindPlaces />
    <Text>{JSON.stringify(this.state.location)}</Text> 
    <MapView
      style={{width: '100%', height: '44%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        //{this.state.latitude}
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={img}
          />
        </Marker>
      ))}
    </MapView>
    <RaspberryStrip />
    <Button title="CONFIRM PICKUP TIME"  onPress={() => this.props.navigation.navigate('Booking')} />
    </>
  );}
};







