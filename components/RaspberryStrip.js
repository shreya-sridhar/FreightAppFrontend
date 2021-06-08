import React from "react";
import { View, Text } from "react-native";
import {StyleSheet} from 'react-native';

const RaspberryStrip = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deliver Now at Discounted Rates!</Text>
      <Text style={styles.text}>
        {/* Upgrading this package often requires the font files linked to your projects to be updated */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  text: {
    color: '#bed9ff',
    fontSize: 8,
    marginBottom: 0,
  },
  learnMore: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  }
});

export default RaspberryStrip;



