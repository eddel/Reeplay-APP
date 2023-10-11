import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import NextBtn from "../../components/NextBtn";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as NavigationBar from "expo-navigation-bar";
export default function OnBoarding3({ navigation }) {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    Platform.OS === "android"
      ? NavigationBar.setVisibilityAsync('hidden')
      : null;
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent={true} />
      <ImageBackground
        source={require("../../assets/ONBOARDING3.jpg")}
        resizeMode="cover"
        style={styles.ImageWrapper}
      >
        <LinearGradient
          colors={["transparent","rgba(0,0,0,0.8)","rgba(0,0,0,0.9)", ]}
          style={styles.background}
        />
        <View style={styles.PicWrapper}>
          <ImageBackground
            source={require("../../assets/Group.png")}
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode="cover"
          >
            <View style={styles.ViewInImage}>
              <Image
                source={require("../../assets/BoardingTick.png")}
                style={{ height: "60%", width: "60%" }}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                backgroundColor: "#E5E5E5",
                width: "50%",
                height: 5,
                borderRadius: 10,
                position: "absolute",
                bottom: 5,
              }}
            />
          </ImageBackground>
        </View>
        <View style={styles.ProgressBarView}>
          <View style={styles.ProgressInnerBarView}></View>
        </View>

        <View style={styles.TextWrapper}>
          <Text style={[styles.TitleText, { marginTop: 20 }]}>
            Download Movies
          </Text>
          <Text style={[styles.TitleText, { marginBottom: hp("5%") }]}>
            with a Tap
          </Text>
          <Text style={styles.LableText}>Have something to watch</Text>
          <Text style={styles.LableText}>offline, any time.</Text>
        </View>
      </ImageBackground>
      <NextBtn
        title="CONTINUE"
        iconcolor="#7D0909"
        secondiconcolor="#7D0909"
        thirdiconcolor="#FF1313"
        navigation={() => navigation.navigate("Auth")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageWrapper: {
    flex: 1,
  },

  TitleText: {
    fontSize: 27,
    color: "#fff",
    textAlign: "center",
    fontFamily: "robotobold",
  },
  LableText: {
    fontSize: 21,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    fontFamily: "roboto",
  },
  PicWrapper: {
    height: hp("35%"),
    width: wp("35%"),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ffffff",
    overflow: "hidden",
    alignSelf: "center",
    margin: 5,
    marginTop: hp("10%"),
  },
  ViewInImage: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "#FF1313",
    justifyContent: "center",
    alignItems: "center",
  },
  ProgressBarView: {
    height: 7,
    width: wp("30%"),
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 5,
  },
  ProgressInnerBarView: {
    height: 7,
    width: wp("25%"),
    backgroundColor: "#FF1313",
    borderRadius: 10,
  },
  PopupWrapper: {
    height: hp("100%"),
    width: wp("100%"),
    position: "absolute",
  },
  BgLayer: {
    flex: 1,
    opacity: 0.9,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  PopupBody: {
    height: hp("40%"),
    width: wp("80%"),
    backgroundColor: "#FF1313",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  VerificationText: {
    fontSize: rf(16),
    fontWeight: "700",
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
});
