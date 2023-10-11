import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";
export default function BottomMenu(props) {
  return (
    <BlurView intensity={200} tint="dark" style={styles.blurContainer}>
      {/* <LinearGradient
                    // Background Linear Gradient
                    colors={['#C4C4C4', '#1A1A1A']}
                    style={styles.background}
                /> */}
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.IconBody}
          onPress={() => props.navigation.navigate("Home")}
        >
          <Image
            source={props.homeimage}
            style={{ height: "60%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.HomeText, { color: props.textcolor }]}>Home</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.IconBody}
          onPress={() => props.navigation.navigate("Live")}
        >
          <Image
            source={props.liveimage}
            style={{ height: "60%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.HomeText, { color: props.livetextcolor }]}>
          Live
        </Text>
      </View>

      {/* <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.IconBody}
          onPress={() => props.navigation.navigate("Upcoming")}
        >
          <Image
            source={props.upimage}
            style={{ height: "60%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.HomeText, { color: props.UpcomngText }]}>
          Upcoming
        </Text>
      </View> */}

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.IconBody}
          onPress={() => props.navigation.navigate("Upcoming")}
        >
          <Image
            source={props.upimage}
            style={{ height: "60%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.HomeText, { color: props.UpcomngText }]}>
          Upcoming
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.IconBody}
          onPress={() => props.navigation.navigate("Library")}
        >
          <Image
            source={props.libimage}
            style={{ height: "60%", width: "100%" }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={[styles.HomeText, { color: props.LibraryText }]}>
          Library
        </Text>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  HomeText: {
    fontSize: rf(10),
    fontWeight: "500",
    color: "#E5E5E5",
    fontFamily: "roboto",
  },
  IconBody: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  blurContainer: {
    height: hp("8%"),
    width: wp("100%"),
    position: "absolute",
    bottom:   0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("7%"),
    paddingBottom:Platform.OS === "ios" ? 15 : 0,
  },
});
