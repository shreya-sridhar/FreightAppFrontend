import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { StyleSheet, Image, Text, Button } from "react-native";
import img from "C:/Users/shrey/FreightApp/assets/images/comfort.jpeg";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";

const GOOGLE_MAPS_APIKEY = "AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI";

class ConfirmBooking extends React.Component {
  state = {
    driver_lat: 28.450627,
    driver_lng: -16.263045,
  };

  // componentDidMount() {
  //   // this.setState(
  //   //   {
  //   //     driver_lat:parseInt(this.props.navigation.state.params.users[0].latitude),
  //   //     driver_lng:parseInt(this.props.navigation.state.params.users[0].longitude)
  //   //   }
  //   // )
  //   fetch("http://10.0.2.2:8080/rides", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       pickup_location: this.props.origin,
  //       drop_location: this.props.destination,
  //       pickup_time: this.props.pickup_time,
  //       vehicle_type: this.props.vehicle,
  //       driver: this.props.driver,
  //       customer: this.props.customer,
  //     }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // let newOrders = this.state.order.concat(data)
  //       // this.setState({orders:newOrders})
  //       console.log(data);
  //     });
  // }

  render() {
    return (
      <>
        <Text>Hello</Text>
        {/* <Text>{this.props.navigation.state.params.origin}</Text>
        <Text>{this.props.navigation.state.params.destination}</Text> */}
        {/* <MapView
      style={{width: '100%', height: '54%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      
      initialRegion={{
        latitude: this.state.driver_lat,
        // parseInt(this.props.navigation.state.params.users[0].latitude),
        //{this.state.latitude}
        longitude: this.state.driver_lng,
        // parseInt(this.props.navigation.state.params.users[0].longitude),
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121 ,
      }}/> */}

        {/* <Text>{this.props.users}</Text> */}
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
    );
  }
}

export default ConfirmBooking;
