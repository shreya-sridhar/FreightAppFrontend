import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text,Button } from "react-native";
import Home from "C:/Users/shrey/FreightApp/pages/home.js";
import Main from "./pages/Main.js"; 
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import History from "C:/Users/shrey/FreightApp/components/History.js";
import Earnings from "C:/Users/shrey/FreightApp/components/Earnings.js";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import Profile from "C:/Users/shrey/FreightApp/components/Profile.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import ConfirmBooking from "C:/Users/shrey/FreightApp/components/ConfirmBooking.js";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";
import DrawerFunc from "C:/Users/shrey/FreightApp/Drawer.js";
// import { Video } from "expo-av";
// import VideoPlayer from "expo-video-player";
import {createAppContainer} from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
// // import Navigator from './routes/homeStack'


import { NavigationContainer } from '@react-navigation/native';

const ridesUrl = "http://localhost:3000/rides"
const usersUrl = "http://localhost:3000/users"


class App extends React.Component{

  state = {
    users:[{"id":1,"name":"aron","address":"25593 Hubert Plains, New Russel, IA 47237","email":"cheyenne_parker@barrows-beatty.org","wallet":"cash","driver_star_rating":4.702301532955114,"customer_star_rating":1.7368474089430108,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"43.24200555593805","longitude":"-68.86437869438639"},{"id":2,"name":"caron","address":"Suite 790 79509 Hyatt Views, Jacquelinefurt, ME 26383-9126","email":"coreen.ferry@dicki.com","wallet":"cash","driver_star_rating":4.79284208536484,"customer_star_rating":1.2158890470374555,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"-50.99309119289477","longitude":"-140.2449739451542"},{"id":3,"name":"porfirio","address":"Suite 919 46428 Timothy Walk, South Lavernachester, NJ 26790","email":"homer@mccullough-armstrong.name","wallet":"cash","driver_star_rating":3.6342351593855096,"customer_star_rating":4.678219845701733,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"62.29004618029643","longitude":"86.36628767708584"},{"id":4,"name":"willis.legros","address":"Suite 882 5309 Jona Ways, Alexisburgh, DE 44218","email":"elisha_volkman@nikolaus.co","wallet":"cash","driver_star_rating":4.091851266629834,"customer_star_rating":1.5736488527232724,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"4.023075075753496","longitude":"-25.375290339782197"},{"id":5,"name":"matt","address":"Apt. 370 22336 Ortiz Plaza, New Shennaville, VT 70097","email":"tommie_ritchie@von.com","wallet":"cash","driver_star_rating":2.404972154401988,"customer_star_rating":2.685001484077616,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"-51.18977613074028","longitude":"-100.98242236252452"},{"id":6,"name":"edwardo.kulas","address":"7959 Homenick Rapid, Port Yolonda, PA 30072-6876","email":"elvera@huel.com","wallet":"cash","driver_star_rating":4.344211002149842,"customer_star_rating":4.669075738669061,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"-51.923602806778746","longitude":"-6.702186449111281"},{"id":7,"name":"jazmin_murazik","address":"Suite 642 1388 Fritsch Oval, East Nomachester, IA 14523","email":"nikki@gleason.net","wallet":"cash","driver_star_rating":2.011796007754294,"customer_star_rating":0.7382983551934269,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"36.540037345510314","longitude":"3.4528893150064164"},{"id":8,"name":"casie","address":"94641 Medhurst Lakes, Lake Jiton, OK 19512","email":"milagros@batz.net","wallet":"cash","driver_star_rating":3.7220353770015264,"customer_star_rating":4.966440372796376,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"67.60221564759746","longitude":"-100.51865343547293"},{"id":9,"name":"jefferson","address":"Apt. 944 79293 Ondricka Trail, South Ramonaside, ID 62241-1515","email":"lilian@konopelski-hoeger.net","wallet":"cash","driver_star_rating":4.027532518356498,"customer_star_rating":3.553469806821889,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"5.552688794535143","longitude":"-115.25493975897325"},{"id":10,"name":"layla.nikolaus","address":"Suite 304 88726 Stark Vista, Wenonaborough, UT 04797-9466","email":"dylan@ferry.org","wallet":"cash","driver_star_rating":1.278910779915607,"customer_star_rating":1.618400484620373,"status":"idle","is_driver":false,"vehicle_type":"truck","vehicle_number":"789","password_digest":"12345","latitude":"-53.046237913112584","longitude":"65.15544771602097"}],
    rides:[]
  }

  componentDidMount() {
    fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data1 => fetch("http://localhost:3001/rides")
    .then(res => res.json())
    .then(data2 => {
      this.setState(
        {
        users:data1,
        rides:data2,
      })}))
    }

   AppNavigator = createAppContainer(createStackNavigator({
      // Main : {screen:Main},
      // History:{screen:History}
      HomeMap : {name:"HomeMap", screen:(routerprops) => DrawerFunc({id:21,users:this.state.users,...routerprops })},
      //  (routerprops) => DrawerFunc({id:21,users:this.state.users,...routerprops })},
      Booking:{name:"Booking", screen:Booking},
      ConfirmBooking:{name:"ConfirmBooking", screen:ConfirmBooking},
      Cars:{name:"Cars", screen:Cars},
      FindPlaces:{name:"FindPlaces", screen:FindPlaces}
    }))

    render(){
      return(
        <this.AppNavigator/>
      )
    }
}

export default App;



