import React from "react";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import ConfirmBooking from "C:/Users/shrey/FreightApp/components/ConfirmBooking.js";
import LiveLocation from "C:/Users/shrey/FreightApp/components/LiveLocation.js";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";
import DrawerFunc from "C:/Users/shrey/FreightApp/Drawer.js";
import Login from "C:/Users/shrey/FreightApp/components/Login.js";
import OnBoarding from "C:/Users/shrey/FreightApp/components/OnBoarding.js";
import PushNotification from "C:/Users/shrey/FreightApp/components/PushNotification.js";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import AsyncStorage from "@react-native-async-storage/async-storage";
console.disableYellowBox = true;

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
    start_lat: null,
    start_lng: null,
    end_lat: null,
    end_lng: null,
    rideId: null,
  };

  componentDidMount() {
    console.log("before fetch");
    fetch("https://radiant-meadow-46440.herokuapp.com/users")
      .then((res) => res.json())
      .then((data1) =>
        fetch("https://radiant-meadow-46440.herokuapp.com/rides")
          .then((res) => res.json())
          .then((data2) => {
            console.log("nooooo");
            this.setState({
              users: data1,
              rides: data2,
            });
          })
      );
    const getData = async () => {
      try {
        console.log("storage on mount");
        const jsonValue = await AsyncStorage.getItem("@storage_Key");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        // error reading value
      }
    };
    if (getData) {
      this.persistUser(getData);
    }
  }

  findDriver = async () => {
    console.log("finding driver");
    try {
      let token = await AsyncStorage.getItem("@storage_Key");
      let test = JSON.parse(token);
      console.log("test", test);
      await fetch("https://radiant-meadow-46440.herokuapp.com/driver", {
        method: "GET",
        headers: { Authorization: `Bearer ${test}` },
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({ driver: data });
        });
      return;
    } catch (e) {
      console.log(e);
    }
    console.log(token);
  };

  getRideData = async (data) => {
    console.log("getRidedata");
    await this.setState({
      destination: data.destination,
      origin: data.origin,
      pickup_time: data.pickup_time,
      pickup_date: data.pickup_date,
      driver: data.driver,
      vehicle: "",
      start_lat: data.start_lat,
      start_lng: data.start_lng,
      end_lat: data.end_lat,
      end_lng: data.end_lng,
    });
  };

  getNav = (user) => {
    this.setState({ user: user });
  };

  persistUser = (token) => {
    console.log("persist");
    fetch("https://radiant-meadow-46440.herokuapp.com" + "/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.user.username) {
          this.setState({
            user: data.user,
          });
        }
      });
  };

  getVehicle = async (veh) => {
    console.log("vehicle arggh");
    await this.setState({ vehicle: veh });
  };

  bookRide = async () => {
    console.log("booking ride now");
    await fetch("https://radiant-meadow-46440.herokuapp.com/rides", {
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
        start_lat: this.state.start_lat,
        start_lng: this.state.start_lng,
        end_lat: this.state.end_lat,
        end_lng: this.state.end_lng,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        // let newOrders = this.state.order.concat(data)
        // this.setState({orders:newOrders})
        this.setState({ rideId: data.id });
      });
  };

  AppNavigator = createAppContainer(
    createStackNavigator(
      {
        // Main : {screen:Main},
        // History:{screen:History}
        // Splash: {name: "Splash", screen: Splash},

        OnBoarding: { name: "OnBoarding", screen: OnBoarding },
        Login: {
          name: "Login",
          screen: (routerprops) => {
            return (
              <Login
                getNav={this.getNav}
                user={this.state.user}
                getRideData={this.getRideData}
                // users: this.state.users,
                rides={this.state.rides}
                driver={this.state.driver}
                origin={this.state.origin}
                destination={this.state.destination}
                pickup_time={this.state.pickup_time}
                vehicle={this.state.vehicle}
                pickup_date={this.state.pickup_date}
                findDriver={this.findDriver}
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
              // users: this.state.users,
              rides: this.state.rides,
              driver: this.state.driver,
              origin: this.state.origin,
              destination: this.state.destination,
              pickup_time: this.state.pickup_time,
              vehicle: this.state.vehicle,
              pickup_date: this.state.pickup_date,
              start_lat: this.state.start_lat,
              start_lng: this.state.start_lng,
              end_lat: this.state.end_lat,
              end_lng: this.state.end_lng,
              findDriver: this.findDriver,
              ...routerprops,
            }),
        },
        LiveLocation: {
          name: "LiveLocation",
          screen: (routerprops) => {
            return (
              <LiveLocation
                driver={this.state.driver}
                origin={this.state.origin}
                user = {this.state.user}
                destination={this.state.destination}
                pickup_date={this.state.pickup_date}
                vehicle={this.state.vehicle}
                pickup_time={this.state.pickup_time}
                start_lat={this.state.start_lat}
                start_lng={this.state.start_lng}
                end_lat={this.state.end_lat}
                end_lng={this.state.end_lng}
                // getVehicle={this.getVehicle}
                // bookRide={this.bookRide}
                routerprops={routerprops}
              />
            );
          },
        },

        Booking: {
          name: "Booking",
          screen: (routerprops) => {
            return (
              <Booking
                driver={this.state.driver}
                origin={this.state.origin}
                destination={this.state.destination}
                pickup_date={this.state.pickup_date}
                vehicle={this.state.vehicle}
                pickup_time={this.state.pickup_time}
                start_lat={this.state.start_lat}
                start_lng={this.state.start_lng}
                end_lat={this.state.end_lat}
                end_lng={this.state.end_lng}
                getVehicle={this.getVehicle}
                bookRide={this.bookRide}
                routerprops={routerprops}
              />
            );
          },
        },
        ConfirmBooking: {
          name: "ConfirmBooking",
          screen: (routerprops) => {
            return (
              <ConfirmBooking
                driver={this.state.driver}
                origin={this.state.origin}
                user={this.state.user}
                destination={this.state.destination}
                pickup_date={this.state.pickup_date}
                start_lat={this.state.start_lat}
                start_lng={this.state.start_lng}
                end_lat={this.state.end_lat}
                end_lng={this.state.end_lng}
                vehicle={this.state.vehicle}
                pickup_time={this.state.pickup_time}
                routerprops={routerprops}
              />
            );
          },
        },

        PushNotification: {
          name: "PushNotification",
          screen: (routerprops) => {
            return (
              <PushNotification
                driver={this.state.driver}
                origin={this.state.origin}
                destination={this.state.destination}
                pickup_date={this.state.pickup_date}
                start_lat={this.state.start_lat}
                start_lng={this.state.start_lng}
                end_lat={this.state.end_lat}
                end_lng={this.state.end_lng}
                vehicle={this.state.vehicle}
                pickup_time={this.state.pickup_time}
                routerprops={routerprops}
              />
            );
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




