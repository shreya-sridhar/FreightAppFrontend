import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Home from "C:/Users/shrey/FreightApp/pages/home.js";
import Main from "./components/Main.js";
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import History from "C:/Users/shrey/FreightApp/components/History.js";
import Earnings from "C:/Users/shrey/FreightApp/components/Earnings.js";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import Profile from "C:/Users/shrey/FreightApp/components/Profile.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import ConfirmBooking from "C:/Users/shrey/FreightApp/components/ConfirmBooking.js";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";
import DrawerFunc from "C:/Users/shrey/FreightApp/Drawer.js";
import Splash from 'C:/Users/shrey/FreightApp/components/Splash.js';
import Login from 'C:/Users/shrey/FreightApp/components/Login.js';
// import { Video } from "expo-av";
// import VideoPlayer from "expo-video-player";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// // import Navigator from './routes/homeStack'

import { NavigationContainer } from "@react-navigation/native";

const ridesUrl = "http://192.168.1.181:8080/rides";
const usersUrl = "http://192.168.1.181:8080/users";

class App extends React.Component {
  state = {
    users: [{"id":1,"name":"shreya"}],
    rides: [],
  };

  componentDidMount() {
    fetch("https://192.168.1.181:8080/users")
      .then((res) => res.json())
      .then((data1) =>
        fetch("https://192.168.1.181:8080/rides")
          .then((res) => res.json())
          .then((data2) => {
            console.log("nooooo")
            this.setState({
              users: data1,
              rides: data2,
            });
          })
      );
  }

  AppNavigator = createAppContainer(
    createStackNavigator({
      // Main : {screen:Main},
      // History:{screen:History}
      Splash: {name: "Splash", screen: Splash},
      Login:{name:"Login",screen: Login},
      HomeMap: {
        name: "HomeMap",
        screen: (routerprops) =>
          DrawerFunc({ id: 21, users: this.state.users, ...routerprops }),
      },
      //  (routerprops) => DrawerFunc({id:21,users:this.state.users,...routerprops })},
      Booking: { name: "Booking", screen: Booking },
      ConfirmBooking: { name: "ConfirmBooking", screen: ConfirmBooking },
      Cars: { name: "Cars", screen: Cars },
      FindPlaces: { name: "FindPlaces", screen: FindPlaces },
    })
  );

  render() {
    return <this.AppNavigator />;
  }
}

export default App;
