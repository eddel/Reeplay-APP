import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  BackHandler,
} from "react-native";
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
    Platform.OS === "android"
      ? NavigationBar.setVisibilityAsync('hidden')
      : null;
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
    <View style={styles.container}>
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
    </View>
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

  TitleText: {
    fontSize: 27,
    fontFamily: "robotobold",
    color: "#fff",
    textAlign: "center",
  },
  LableText: {
    fontSize: 21,
    fontFamily: "roboto",
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    backgroundColor: "transparent",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 17,
    color: "#fff",
  },
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 900,
    left: 0,
    flexGrow: 1,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#E5E5E5",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: "40%",
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});
