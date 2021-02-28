import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Home from "C:/Users/shrey/FreightApp/pages/home.js";
import Main from "./pages/Main.js";
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
// import History from "C:/Users/shrey/FreightApp/components/History.js";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import Cars from "C:/Users/shrey/FreightApp/components/Cars.js";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import {createAppContainer} from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'
// // import Navigator from './routes/homeStack'

// const Stack = createStackNavigator();

// const App = () => {
//   var currentdate = new Date();
//   var datetime =
//     "Last Sync: " +
//     currentdate.getDate() +
//     "/" +
//     (currentdate.getMonth() + 1) +
//     "/" +
//     currentdate.getFullYear() +
//     " @ " +
//     currentdate.getHours() +
//     ":" +
//     currentdate.getMinutes() +
//     ":" +
//     currentdate.getSeconds();
//   console.info(datetime);
//   return (
//     <>
//       <View style={styles.container}>
//         {/* <StatusBar style="auto" /> */}
//         {/* <Navigator /> */}
//         {/* <Home /> */}
//         {/* <HomeMap/> */}
//         <AppNavigator/>
//         {/* <FindPlaces /> */}
//         {/* <Main/> */}
//         {/* <Booking origin={"Bangalore"} destination={"Mysore"} /> */}
//       </View>

//       {/* <Stack.Navigator
//         screenOptions={{
//         headerShown: false,
//         }}
//         >
//           <Stack.Screen name={"Home"} component={Home} />
//           <Stack.Screen name={"Main"} component={Main} />
//           <Stack.Screen name={"HomeMap"} component={HomeMap} />
//       </Stack.Navigator>*/}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 0,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

const AppNavigator = createStackNavigator({
  Main : {screen:Main},
  // History:{screen:History}
  HomeMap : {screen:HomeMap},
  FindPlaces:{screen:FindPlaces},
  Booking:{screen:Booking},
  Cars:{screen:Cars}
})


const App = createAppContainer(AppNavigator);

export default App;



