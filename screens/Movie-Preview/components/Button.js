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
export default function Button(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.Txt}>₦300.00</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("80%"),
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#FF1313",
    flexDirection: "row",
  },
  Txt: {
    fontSize: rf(12),
    color: "#E5E5E5",
    fontFamily:'robotobold'
  },
});
