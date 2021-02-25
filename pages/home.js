import React from "react";
import { StyleSheet, Text, Image, View, Dimensions } from "react-native";
import MapView from "C:/Users/shrey/FreightApp/node_modules/react-native-maps";
// import HomeMap from '../components/HomeMap/index.js';
import RaspberryStrip from "C:/Users/shrey/FreightApp/components/RaspberryStrip.js";
import SearchBar from "C:/Users/shrey/FreightApp/components/Searchbar.js";
// import Carousel from "../components/Carousel";
// import HomeSearch from '../../components/HomeSearch';
// import taxiimg from './../assets/taxiimg.jpg';
// import {dummyData} from '../data/Data'
// import Video from 'react-native-video';

const Home = (props) => {
  return (
    <View>
      <SearchBar />
      {/* <View style={{height: Dimensions.get('window').height - 400}}> */}
      {/* <HomeMap /> */}
      {/* </View>  */}
      {/* <Carousel data={dummyData}/> */}
      {/* <Image source={taxiimg} style={{ width: 305, height: 159 }} />  */}

      {/*  Bottom Comp*/}
      <RaspberryStrip />
      <MapView style={styles.map} />
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Home;
