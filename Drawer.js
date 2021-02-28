
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeMap from "C:/Users/shrey/FreightApp/components/HomeMap.js";
import FindPlaces from "C:/Users/shrey/FreightApp/components/FindPlaces.js";
import Booking from "C:/Users/shrey/FreightApp/components/Booking.js";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeMap">
        <Drawer.Screen name="HomeMap" component={HomeMap} />
        <Drawer.Screen name="FindPlaces" component={FindPlaces} />
        <Drawer.Screen name="Booking" component={Booking} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


