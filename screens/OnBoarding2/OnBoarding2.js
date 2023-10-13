import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

export default function OnBoarding2({ navigation }) {
  useEffect(() => {
    StatusBar.setHidden(true); // Hide the status bar
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/ONBOARDING2.jpg")}
        resizeMode="cover"
        style={styles.ImageWrapper}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={styles.background}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.PicContainer}>
            <Image
              source={require("../../assets/MovieThree.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
          <View style={[styles.PicContainer, { width: wp("25%") }]}>
            <Image
              source={require("../../assets/MovieTwo.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={styles.PicWrapper}>
          <Image
            source={require("../../assets/Movie.png")}
            style={{ height: "100%", width: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={[styles.TitleText, { marginTop: 15 }]}>Watch</Text>
          <Text style={[styles.TitleText, { marginBottom: 20 }]}>
            on any device
          </Text>
        </View>
        <Text style={styles.LableText}>Stream on your Phone,</Text>
        <Text style={styles.LableText}>Tablet and Laptop,</Text>
        <Text style={styles.LableText}>without paying more.</Text>
      </ImageBackground>
      {/* Your NextBtn component remains the same */}
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
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0, // Make it cover the entire screen
  },
  TitleText: {
    fontSize: 27,
    fontFamily: "robotobold",
    color: "#fff",
    textAlign: "center",
  },
  LableText: {
    fontSize: 21,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    fontFamily: "roboto",
  },
  PicContainer: {
    height: hp("20%"),
    width: wp("30%"),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    overflow: "hidden",
    margin: 5,
    marginTop: hp("10%"),
  },
  PicWrapper: {
    height: hp("20%"),
    width: wp("55%"),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    overflow: "hidden",
    alignSelf: "center",
    margin: 5,
    marginBottom: 15,
  },
});
