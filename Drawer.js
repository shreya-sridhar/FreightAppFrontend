import React from "react";
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import History from "C:/Users/shrey/FreightApp/components/History.js";
import Earnings from "C:/Users/shrey/FreightApp/components/Earnings.js";
import Profile from "C:/Users/shrey/FreightApp/components/Profile.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";


import { createDrawerNavigator } from '@react-navigation/drawer';
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
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Booking" component={Booking} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerFunc;





