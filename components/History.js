import React, { Component } from "react";
import { FlatList, Text, ScrollView,Dimensions } from "react-native";
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

export default class History extends Component {
    state = {
      data: data
    };

    render() {
        return (
      //     <Card
      //       title={null}
      //       image={{ uri: "http://via.placeholder.com/160x160" }}
      //       containerStyle={{ padding: 0, width: 175, height:175 }}
      //     >
      //        <Text style={{ marginBottom: 10 }}>
      //   hello
      // </Text>
           
      //     </Card>

      <FlatList 
data={this.state.data}
renderItem={({ item: rowData }) => {
  return (
    <ScrollView>
    <Card
      title={null}
      image={{ uri: rowData.imageUrl }}
      containerStyle={{ padding: 0, width: Dimensions.get('window').width, height:175 }}
    >
      <Text style={{ marginBottom: 10 }}>
        {rowData.title}
      </Text>
    </Card>
    </ScrollView>
  );
}}
keyExtractor={(item, index) => index}
/>
        );
      }
}


 


