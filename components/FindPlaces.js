import React, {useState, useEffect} from 'react';
import {View, TextInput, StyleSheet,SafeAreaView,Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { useNavigation } from '@react-navigation/native';
// import PlaceRow from "./PlaceRow";

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const FindPlaces = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

//   const navigation = useNavigation();

//   const checkNavigation = () => {
//     if (originPlace && destinationPlace) {
//       navigation.navigate('SearchResults', {
//         originPlace,
//         destinationPlace,
//       })
//     }
//   }

//   useEffect(() => {
//     checkNavigation();
//   }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          // onPress={(data, details = null) => {
          //   setOriginPlace({data, details});
          // }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI',
            language: 'en',
          }}
          // renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          // onPress={(data, details = null) => {
          //   setDestinationPlace({data, details});
          // }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI',
            language: 'en',
          }}
          // renderRow={(data) => <PlaceRow data={data} />}
        />
        <Text>Helooooo</Text>
        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
      width:'100%'
    },
    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
      marginLeft: 20,
      width:'100%'
    },
  
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    listView: {
      position: 'absolute',
        top: 105,
        width:'100%'
    },
    autocompleteContainer: {
      position: 'absolute',
      top: 0,
      left: 10,
      right: 10,
      width:'100%'
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationText: {
  
    },
  
    circle: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 20,
      left: 15,
      borderRadius: 5,
    },
    line: {
      width: 1,
      height: 50,
      backgroundColor: '#c4c4c4',
      position: 'absolute',
      top: 28,
      left: 17,
    },
    square: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 80,
      left: 15,
    },
  });
  

export default FindPlaces;





