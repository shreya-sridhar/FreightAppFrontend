import React from 'react';
import { Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
function GooglePlacesInput(props){
  const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
const currentLocation = { description: 'currentLocation', geometry: { location: { lat: props.latitude, lng: props.longitude } }}; 

  return (
    <>
    <GooglePlacesAutocomplete
      placeholder='Enter Pickup Location'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      props.setOrigin(data,details)
        console.log(data.place_id);
      }}
 
      getDefaultValue={() => ''}
 
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
 
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
 
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
  
      
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
      }}
 
      predefinedPlaces={[homePlace, workPlace]}
 
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderLeftButton={() => <Text>From?</Text>}
    />
    <GooglePlacesAutocomplete
    placeholder='Enter Dropoff Location'
    minLength={2} // minimum length of text to search
    autoFocus={false}
    returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
    keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
    listViewDisplayed='auto'    // true/false/undefined
    fetchDetails={true}
    renderDescription={row => row.description} // custom description render
    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      props.setDestination(data,details)
      console.log(data.place_id);
    }}

    getDefaultValue={() => ''}

    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: 'AIzaSyC0UZckU_eK8heofiWpXTUYU-IpJo0KhnI',
      language: 'en', // language of the results
      types: '(cities)' // default: 'geocode'
    }}

    styles={{
      textInputContainer: {
        width: '100%',
        padding: 0,
      },
      description: {
        fontWeight: 'bold'
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      }
    }}

    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
    currentLocationLabel="Current location"
    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    GoogleReverseGeocodingQuery={{
      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    }}

    
    GooglePlacesDetailsQuery={{
      // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
      fields: 'formatted_address',
    }}

    predefinedPlaces={[homePlace, workPlace]}

    debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    renderLeftButton={() => <Text>To?</Text>}
  />
  </>

  );
}


export default GooglePlacesInput

