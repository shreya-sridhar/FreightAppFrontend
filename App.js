import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text,Button } from "react-native";
import Home from "C:/Users/shrey/FreightApp/pages/home.js";
import Main from "./pages/Main.js";
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import History from "C:/Users/shrey/FreightApp/components/History.js";
import Earnings from "C:/Users/shrey/FreightApp/components/Earnings.js";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";
import DrawerContent from "C:/Users/shrey/FreightApp/DrawerContent.js";
// import { Video } from "expo-av";
// import VideoPlayer from "expo-video-player";
import {createAppContainer} from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Navigator from './routes/homeStack'


import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerFunc() {
  return (
    // <DrawerContent/>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeMap">
      <Drawer.Screen name="Book A Truck" component={HomeMap} />
        <Drawer.Screen name="Earnings" component={Earnings} />
        {/* <Drawer.Screen name="FindPlaces" component={FindPlaces} /> */}
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="Booking" component={Booking} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const AppNavigator = createStackNavigator({
//   Main : {screen:Main},
  // History:{screen:History}
  HomeMap : {name:"HomeMap", screen:DrawerFunc},
  FindPlaces:{screen:FindPlaces},
  Booking:{name:"Booking", screen:Booking},
  Cars:{screen:Cars}
})


const App = createAppContainer(AppNavigator);

export default App;




