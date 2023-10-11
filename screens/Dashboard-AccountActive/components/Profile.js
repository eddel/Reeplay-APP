import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
export default function Profile(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Profile}>
        <Image
          source={require("../../../assets/ProfilePic.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleTxt}>Edward Bette</Text>
      </View>
      <TouchableOpacity style={styles.Edit}>
        <Text style={styles.EditTxt}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("13%"),
    flexDirection: "row",
    alignItems: "center",
  },
  Profile: {
    width: hp("6%"),
    height: hp("6%"),
    borderRadius: 100,
    overflow: "hidden",
  },
  title: {
    width: "76%",
    height: "50%",
    justifyContent: "center",
    paddingHorizontal: "4%",
  },
  Edit: {
    width: "10%",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  titleTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily:'robotobold'
  },
  EditTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily:'roboto'
  },
});
