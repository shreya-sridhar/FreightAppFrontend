import React from "react";
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import History from "C:/Users/shrey/FreightApp/components/History.js";
import Earnings from "C:/Users/shrey/FreightApp/components/Earnings.js";
import Profile from "C:/Users/shrey/FreightApp/components/Profile.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import ConfirmBooking from "C:/Users/shrey/FreightApp/components/ConfirmBooking.js";
import {Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerFunc(props) {
    
  return (
    // <DrawerContent/>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeMap">
      <Drawer.Screen name="Book A Truck" component={() => <HomeMap {...props} />} />
      {/* screen: (props) => <MyNotificationsScreen {...props} propName={val1} /> */}
        <Drawer.Screen name="Earnings" component={Earnings} />
        {/* <Drawer.Screen name="FindPlaces" component={FindPlaces} /> */}
        <Drawer.Screen name="History" component={History} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerFunc;





