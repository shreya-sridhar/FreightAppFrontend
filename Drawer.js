import React from "react";
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import History from "C:/Users/shrey/FreightApp/components/History.js";
import Earnings from "C:/Users/shrey/FreightApp/components/Earnings.js";
import Profile from "C:/Users/shrey/FreightApp/components/Profile.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";
import BarCode from "C:/Users/shrey/FreightApp/components/BarCode.js";
import DeliveryCheck from "C:/Users/shrey/FreightApp/components/DeliveryCheck.js";
import BarCodeScanner from "C:/Users/shrey/FreightApp/components/BarCodeScanner.js";
import Wallet from "C:/Users/shrey/FreightApp/components/Wallet.js";
import Feedback from "C:/Users/shrey/FreightApp/components/StarRating.js";
import ConfirmBooking from "C:/Users/shrey/FreightApp/components/ConfirmBooking.js";
import Inventory from "C:/Users/shrey/FreightApp/components/Dashboard.js";
import {Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerFunc(props) {
    
  return (
    // <DrawerContent/>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeMap">
      <Drawer.Screen name="Book A Truck"  component={HomeMap} initialParams={{ catId: props }} />
      {/* screen: (props) => <MyNotificationsScreen {...props} propName={val1} /> */}
        <Drawer.Screen name="Earnings" component={Earnings} initialParams={{ catId: props }} />
        {/* <Drawer.Screen name="FindPlaces" component={FindPlaces} /> */}
        <Drawer.Screen name="History" component={History} initialParams={{ catId: props}} />
        <Drawer.Screen name="BarCode" component={BarCode} initialParams={{ catId: props}} />
        <Drawer.Screen name="DeliveryCheck" component={DeliveryCheck} initialParams={{ catId: props}} />
        <Drawer.Screen name="Scan QR Codes" component={BarCodeScanner} initialParams={{ catId: props}} />
        <Drawer.Screen name="Choose Payment Options" component={Wallet} initialParams={{ catId: props }} />
        <Drawer.Screen name="End Ride" component={Feedback} initialParams={{ catId: props }} />
        <Drawer.Screen name="Inventory Tracking" component={Inventory} initialParams={{ catId: props }} />
        <Drawer.Screen name="Profile" component={Profile} initialParams={{ catId: props }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerFunc;


