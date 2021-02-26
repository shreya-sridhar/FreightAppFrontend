import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import React from "react";
import {StyleSheet, View, Text } from "react-native";

const Main = (props) => {
  return (
    <View>
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_STRETCH,
          source: {uri: "https://vod-progressive.akamaized.net/exp=1614375568~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4967%2F16%2F424835330%2F1839569404.mp4~hmac=bf78a98c5e9244c0beb5358180b01a0e8525ac7065ec1b421807e5b1a70f2d9f/vimeo-prod-skyfire-std-us/01/4967/16/424835330/1839569404.mp4?filename=coros-3D-animation_PRO_RES.mp4"},
          isLooping:true
        }}
      />
    </View>
  );
};

export default Main;

