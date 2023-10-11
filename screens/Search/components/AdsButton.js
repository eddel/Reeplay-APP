import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
export default function AdsButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.Txt}>BUY NOW</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#FF1313",
    flexDirection: "row",
    marginBottom: "5%",
  },
  Txt: {
    fontSize: rf(11),
    fontFamily: 'robotobold',
    color: "#fff",
  },
});
