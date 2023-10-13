import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  BackHandler,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import NextBtn from "../components/NextBtn";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import ExitApp from "../components/existAlert";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import NoInternet from "../components/nonternetAlert";

export default function OnBoarding({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  
  useEffect(() => {
    Platform.OS === "android" ? NavigationBar.setVisibilityAsync('hidden') : null;
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (navigation.isFocused()) {
          toggleModal();
          return true;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [navigation])
  );

  return (
    <SafeAreaView style={styles.container}>
      <NoInternet />
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("../assets/ONBOARDING1.jpg")}
        resizeMode="cover"
        style={styles.ImageWrapper}
      >
        <ExitApp
          modalVisible={modalVisible}
          setModalVisible={() => setModalVisible(!modalVisible)}
          exitYes={() => {
            BackHandler.exitApp();
          }}
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)","rgba(0,0,0,0.8)"]}
          style={styles.background}
        />
        <LinearGradient colors={["transparent", "transparent", "transparent"]}>
          <Text style={styles.TitleText}>Watch everything</Text>
          <Text style={[styles.TitleText, { marginBottom: hp("5%") }]}>
            in one place
          </Text>
        </LinearGradient>
        <Text style={styles.LableText}>See your Favorite Content</Text>
        <Text style={styles.LableText}> on REEPLAY</Text>

        <NextBtn
          title="NEXT"
          iconcolor="#FF1313"
          icon={"chevron-right"}
          secondiconcolor="#7D0909"
          thirdiconcolor="#7D0909"
          navigation={() => navigation.navigate("OnBoarding2")}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  // Your other styles remain the same
});
