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
import { AntDesign } from "@expo/vector-icons";
export default function RateCard(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.font1}>{props.title}</Text>
      <Text style={styles.font2}>{props.rate}</Text>
      {props.icon ? (
        <View style={styles.icons}>
         <AntDesign name="star" size={rf(10)} color="#FFCC00" />
          <AntDesign name="star" size={rf(10)} color="#FFCC00" />
          <AntDesign name="star" size={rf(10)} color="#FFCC00" />
          <AntDesign name="star" size={rf(10)} color="#FFCC00" />
          <View style={{ height: 10, width: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/StarWhite.png')}
              style={{ height: '100%', width: '100%' }}
              resizeMode='contain'
            />
          </View>
        </View>
      ) : props.txt ? (
        <Text style={styles.font1}>{props.discription}</Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("20%"),
    height: hp("10%"),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  font1: {
    color: "#C4C4C4",
    fontSize: rf(7),
    fontWeight: '400',
    fontFamily: 'roboto'
  },
  font2: {
    color: "#C4C4C4",
    fontSize: rf(9),
    fontFamily: 'robotobold'
  },
  icons: {
    flexDirection: "row",

  },
});
