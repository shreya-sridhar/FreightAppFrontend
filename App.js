import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View,Text } from "react-native";
import Home from "./pages/home.js";
// import Main from "./pages/main.js";
import { Video } from "expo-av";
import VideoPlayer from 'expo-video-player'
// import Navigator from './routes/homeStack'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Navigator /> */}
      <Home/>
      
      {/* <Main/> */}
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
});
