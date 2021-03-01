import React from "react";
import { View, Text } from "react-native";
import {StyleSheet} from 'react-native';
// import styles from '../styles';

const RaspberryStrip = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deliver Now at Discounted Rates!</Text>
      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your projects to be updated
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8a307f',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: '#bed9ff',
    fontSize: 15,
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default RaspberryStrip;

