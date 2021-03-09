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
import Splash from "C:/Users/shrey/FreightApp/components/Splash.js";
import Login from "C:/Users/shrey/FreightApp/components/Login.js";
import OnBoarding from "C:/Users/shrey/FreightApp/components/OnBoarding.js";
// import { Video } from "expo-av";
// import VideoPlayer from "expo-video-player";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// // import Navigator from './routes/homeStack'
import UrlBase from "C:/Users/shrey/FreightApp/UrlBase.js";
import { NavigationContainer } from "@react-navigation/native";

const ridesUrl = "http://192.168.1.181:8080/rides";
const usersUrl = "http://192.168.1.181:8080/users";

class App extends React.Component {
  state = {
    users: [],
    rides: [],
    user: {},
    destination: "",
    origin: "",
    pickup_date: "",
    pickup_time: "",
    driver: {},
    vehicle: "",
  };

  componentDidMount() {
    console.log("before fetch");
    fetch("http://10.0.2.2:8080/users")
      .then((res) => res.json())
      .then((data1) =>
        fetch("http://10.0.2.2:8080/rides")
          .then((res) => res.json())
          .then((data2) => {
            console.log("nooooo");
            this.setState({
              users: data1,
              rides: data2,
            });
          })
      );
  }

  findDriver = () => {
    console.log("finding driver")
      fetch('http://10.0.2.2:8080/driver')
      .then(response => response.json())
      .then(data => this.setState({driver:data}));
  }

  getRideData = (data) => {
    console.log("arrrgh");
    this.setState({
      destination: data.destination,
      origin: data.origin,
      pickup_time: data.pickup_time,
      pickup_date: data.pickup_date,
      driver: data.driver,
      vehicle: "",
    });
  };

  getNav = (user) => {
    this.setState({ user: user });
  };

  getVehicle = (veh) => {
    console.log("vehicle arggh");
    this.setState({ vehicle: veh });
  };

  bookRide = () => {
    console.log("booking ride now")
    fetch("http://10.0.2.2:8080/rides", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pickup_location: this.state.origin,
            drop_location: this.state.destination,
            pickup_time: this.state.pickup_time,
            vehicle_type: this.state.vehicle,
            driver: this.state.driver,
            customer: this.state.user,
          }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            // let newOrders = this.state.order.concat(data)
            // this.setState({orders:newOrders})
            console.log(data);
          });
  }

  AppNavigator = createAppContainer(
    createStackNavigator(
      {
        // Main : {screen:Main},
        // History:{screen:History}
        // Splash: {name: "Splash", screen: Splash},

        OnBoarding : {name: "OnBoarding",screen: OnBoarding},
        Login: {
          name: "Login",
          screen: (routerprops) => {
            return (
              <Login
                getNav={this.getNav}
                users={this.state.users}
                routerprops={routerprops}
              />
            );
          },
        },
        HomeMap: {
          name: "HomeMap",
          screen: (routerprops) =>
            DrawerFunc({
              user: this.state.user,
              getRideData: this.getRideData,
              id: 21,
              users: this.state.users,
              findDriver:this.findDriver,
              ...routerprops,
            }),
        },

        Booking: {
          name: "Booking",
          screen: (routerprops) => {
            return <Booking driver={this.state.driver} origin={this.state.origin} destination={this.state.destination} pickup_date={this.state.pickup_date} vehicle={this.state.vehicle} pickup_time = {this.state.pickup_time} getVehicle={this.getVehicle} bookRide={this.bookRide} routerprops={routerprops} />;
          },
        },

        ConfirmBooking: {
          name: "ConfirmBooking",
          screen: (routerprops) => {
            return <ConfirmBooking driver={this.state.driver} origin={this.state.origin} destination={this.state.destination} pickup_date={this.state.pickup_date} vehicle={this.state.vehicle} pickup_time = {this.state.pickup_time} routerprops={routerprops} />;
          },
        },

        Cars: { name: "Cars", screen: Cars },
        FindPlaces: { name: "FindPlaces", screen: FindPlaces },
      },
      {
        headerMode: "none",
        navigationOptions: {
          headerVisible: false,
        },
      }
    )
  );

  render() {
    return <this.AppNavigator />;
  }
}

export default App;
