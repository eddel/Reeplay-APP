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
export default function ReeplayCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.FirstRow}>
        <View>
          <Text style={styles.ReeplayFont}>REEPLAY</Text>
          <Text style={styles.AdsFont}>Ads that meet your interest</Text>
        </View>
        <TouchableOpacity
          style={styles.BuyBtn}
          onPress={() => props.handlePress()}
        >
          <Text style={styles.BuyTxt}>VISIT STORE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.AdsPicWrapper}>
        <View style={styles.AdsPic}>
          
            <Image
              source={require("../../../assets/downloadAd.png")}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
      
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("33%"),
    backgroundColor: "#FF1313",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: "5%",
  },

  FirstRow: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  BuyBtn: {
    width: "30%",
    height: "40%",
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ReeplayFont: {
    fontSize: rf(17),
    fontFamily: "robotobold",
    color: "#fff",
  },
  AdsFont: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#fff",
    fontFamily: "roboto",
  },
  BuyTxt: {
    fontSize: rf(11),
    fontFamily: "robotobold",
    color: "#FF1313",
  },
  AdsPicWrapper: {
    width: "98%",
    height: "69%",
    backgroundColor: "#222",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  AdsPic: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
  },
  Layer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    opacity: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
});
