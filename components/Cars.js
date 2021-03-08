
import img1 from 'C:/Users/shrey/FreightApp/assets/images/flatbed.png';
import img2 from 'C:/Users/shrey/FreightApp/assets/images/small_truck.jpg';
import img3 from 'C:/Users/shrey/FreightApp/assets/images/trailer.png';
import img4 from 'C:/Users/shrey/FreightApp/assets/images/truck6ft.jpg';
import img5 from 'C:/Users/shrey/FreightApp/assets/images/ref_6.jpg';


import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Image } from 'react-native';
import { Card, Button } from 'react-native-elements'; // 0.19.0

import { FontAwesome } from '@expo/vector-icons'; // 6.2.2

const images = [
  {
    key: 1,
    name: "Flatbed Truck",
    uri: img1
  },
  {
    key: 2,
    name: "Small Truck",
    uri: img2
  },
  {
    key: 3,
    name: "Trailer Truck (8ft)",
    uri: img3
  },
  {
    key: 4,
    name: "Standard Truck (6ft)",
    uri: img4
  },
  {
    key: 5,
    name: "Refridgerated Truck (6ft)",
    uri: img5
  }
];

class Store extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="user" size={24} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView horizontal contentContainerStyle={{ paddingVertical: 0 }}>
          {images.map(({ name, uri, key }) => (
            <Card onClick = {()=> this.props.selectVehicle(name)} key={key}>
               <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: 'contain'
            }}
            source={uri}
          />   
              <Text style={{ marginBottom: 10 }}>
                {name}
              </Text>
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Store;


