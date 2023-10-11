import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Image, Alert } from "react-native";
import { Video } from "expo-av";
import NetInfo from "@react-native-community/netinfo";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function SplashScreen({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [videoStatus, setVideoStatus] = React.useState(true);
  const [splash, setSplash] = useState(false);
  const [netinfo, setNetInfo] = React.useState(true);
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setNetInfo(state.isConnected);
    });
    return unsubscribe();
  }, []);
  useEffect(() => {
    if (status?.didJustFinish === true) {
      setSplash(true);
    }
  }, [status]);
  useEffect(() => {
    if (splash === true) {
      setTimeout(() => {
        navigation.navigate("OnBoarding");
      }, 2000);
    }
  });
  useEffect(() => {
    Platform.OS === "android"
      ? NavigationBar.setVisibilityAsync("hidden")
      : null;
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       
      {!netinfo &&
        Alert.alert(
          "No Internet Connection",
          "Please turn on your internet connection.",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        )}
      {splash === true ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={require("../../assets/LogoReply.png")}
            style={{ height: 100, width: 100 }}
            resizeMode="contain"
          />
          <View
            style={{ position: "absolute", bottom: 60, alignSelf: "center" }}
          >
            <ActivityIndicator size={"large"} color={"#FF1313"} />
          </View>
        </View>
      ) : (
        <Video
          ref={video}
          style={{ height: "100%", width: "100%" }}
          source={{
            uri: "https://res.cloudinary.com/dbx8adecl/video/upload/v1686582244/Streamable_Video_fgnhbh.mp4",
          }}
          useNativeControls={false}
          resizeMode="contain"
          isLooping={true}
          shouldPlay={videoStatus}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      )}
    </View>
  );
}
