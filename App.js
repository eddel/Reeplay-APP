import React from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import Appnavigator from "./routes/Appnavigator";
import { SafeAreaView, View, Text } from "react-native";
import Home from "./screens/Home/Home";
import { StatusBar } from "expo-status-bar";
export default (props) => {
  const [loaded] = useFonts({
    robotobold: require("./assets/Font/Roboto-Bold.ttf"),
    roboto: require("./assets/Font/RobotoRegular.ttf"),
    lato: require("./assets/Font/lato/Lato-Black.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Appnavigator/>
  );
};
