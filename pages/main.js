import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import React from "react";
import {StyleSheet, View, Text, Button } from "react-native";

const Main = (props) => {
  return (
    <View>
       <Button title="Welcome To Trucker"  onPress={() => props.navigation.navigate("HomeMap")}/>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_STRETCH,
          source: {uri: "https://vod-progressive.akamaized.net/exp=1614490335~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4967%2F16%2F424835330%2F1839569404.mp4~hmac=a3631a4b716efee2bf677a3d3826cbd20912e2a0666d1b86b85befe306f8937b/vimeo-prod-skyfire-std-us/01/4967/16/424835330/1839569404.mp4?filename=coros-3D-animation_PRO_RES.mp4"},
          isLooping:true
        }}
      />
    </View>
  );
};

export default Main;


