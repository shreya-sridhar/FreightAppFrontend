import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI';

const Booking = ({ origin, destination }) => {

    let originLoc = {
        latitude: null,
        longitude: null,
      };
    
    let destinationLoc = {
        latitude: null,
        longitude: null,
      };
   
    Geocoder.init(GOOGLE_MAPS_APIKEY);
    Geocoder.from(origin)
		.then(json => {
            console.log(originLoc)
			var location = json.results[0].geometry.location;
            originLoc.latitude = location.lat 
            originLoc.longitude = location.lng
            console.log(originLoc)
		})
		.catch(error => console.warn(error));

    Geocoder.init(GOOGLE_MAPS_APIKEY);
    Geocoder.from(destination)
        .then(json => {
            console.log(destinationLoc)
            var location = json.results[0].geometry.location;
            destinationLoc.latitude = location.lat 
            destinationLoc.longitude = location.lng
            console.log(destinationLoc)
        })
        .catch(error => console.warn(error));


  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      {/* <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={"Destination"}
      /> */}
    </MapView>

  );
};

export default Booking;



