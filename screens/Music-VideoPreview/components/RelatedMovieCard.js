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
export default function RelatedMovieCard(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../../../assets/RelatedMovie.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("28%"),
    height: hp("18%"),
    borderRadius: 10,
    overflow: "hidden",
  },
});
