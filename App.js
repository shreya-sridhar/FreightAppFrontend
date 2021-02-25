import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "C:/Users/shrey/FreightApp/node_modules/react-native-maps";
import Home from "./pages/home.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView style={styles.map} />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
