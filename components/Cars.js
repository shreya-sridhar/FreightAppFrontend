// import React, { Component } from "react";
// import { FlatList, Text, ScrollView } from "react-native";
// import { Card } from "react-native-elements";
// import img1 from 'C:/Users/shrey/FreightApp/assets/images/flatbed.png';
// import img2 from 'C:/Users/shrey/FreightApp/assets/images/small_truck.jpg';
// import img3 from 'C:/Users/shrey/FreightApp/assets/images/trailer.png';
// import img4 from 'C:/Users/shrey/FreightApp/assets/images/truck6ft.jpg';
// import img5 from 'C:/Users/shrey/FreightApp/assets/images/ref_6.jpg';

// const data = [
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something two"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something three"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something four"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something five"
//   },
//   {
//     imageUrl: "http://via.placeholder.com/160x160",
//     title: "something six"
//   }
// ];

// export default class Cars extends Component {
//     state = {
//       data: data
//     };

//     render() {
//         return (
//       //     <Card
//       //       title={null}
//       //       image={{ uri: "http://via.placeholder.com/160x160" }}
//       //       containerStyle={{ padding: 0, width: 175, height:175 }}
//       //     >
//       //        <Text style={{ marginBottom: 10 }}>
//       //   hello
//       // </Text>
           
//       //     </Card>

//       <FlatList horizontal
// data={this.state.data}
// renderItem={({ item: rowData }) => {
//   return (
//     <ScrollView horizontal>
//     <Card
//       title={null}
//       // image={{ uri: "http://via.placeholder.com/160x160" }}
//       containerStyle={{ padding: 0, width: 175, height:175 }}
//     >
//       <Card.Image uri="https://s23527.pcdn.co/wp-content/uploads/2019/01/Aquamarine.jpg.optimal.jpg"></Card.Image>
//       <Text style={{ marginBottom: 10 }}>
//         {rowData.title}
//       </Text>
//     </Card>
//     </ScrollView>
//   );
// }}
// keyExtractor={(item, index) => index}
// />
//         );
//       }

    
// }


import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Image } from 'react-native';
import { Card, Button } from 'react-native-elements'; // 0.19.0

import { FontAwesome } from '@expo/vector-icons'; // 6.2.2

const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign1_byvldn.png'},
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign2_hfbowa.png'},
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign3_utrh6j.jpg'},
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "John Towner",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign4_wlc7p1.jpg'},
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  },
  {
    key: 5,
    name: "John Towner",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817882/campaign5_wudgxu.jpg'},
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  },
  {
    key: 6,
    name: "John Towner",
    uri: {uri: 'https://res.cloudinary.com/donglyhya/image/upload/v1516817597/campaign6_lfiwwo.jpg'},
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  },
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
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          {images.map(({ name, uri, url, key }) => (
            <Card key={key}>
               <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain'
            }}
            source={uri}
          />   
              <Text style={{ marginBottom: 10 }}>
                Photo by Jim.

              </Text>
              <Button
                buttonStyle={{backgroundColor: "#03A9F4"}}
                text="View more"
                onPress={() => Linking.openURL(url)}
              />
            </Card>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Store;


