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
export default function CastCard(props) {
  return (
    <TouchableOpacity onPress={props.navigation}
    style={styles.container}>
      <View style={styles.PicView}>
        <Image
          source={props.img}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.font}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("18%"),
    height: hp("12%"),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  PicView: {
    width: "80%",
    height: "65%",
    borderRadius: 10,
    overflow: "hidden",
  },
  font: {
    fontSize: rf(5),
    color: "#fff",
    fontWeight: "400",
    fontFamily:'roboto'
  },
});
