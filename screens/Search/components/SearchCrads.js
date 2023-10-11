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
export default function SearchCards(props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.FirstRow}>
          <Text style={styles.ReeplayFont}>{props.title}</Text>
          <Text style={styles.AdsFont}>{props.disc}</Text>
        </View>
        <View style={styles.AdsPicWrapper}>
          {props?.data?.map((x) => {
            return (
              <TouchableOpacity style={styles.AdsPic}>
                <Image
                  source={x.source}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("33%"),
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: "5%",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    // backgroundColor: "#1A1A1A",
    alignItems: "center",
  },

  FirstRow: {
    width: "100%",
    height: "30%",
    paddingHorizontal: 10,
    justifyContent: "center",
  },

  ReeplayFont: {
    fontSize: rf(18),
    fontFamily: "roboto",
    color: "#fff",
    fontWeight: "400",
  },
  AdsFont: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#fff",
    fontFamily: "roboto",
  },
  AdsPicWrapper: {
    width: "97%",
    height: "68%",
    backgroundColor: "#222",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  AdsPic: {
    width: "30%",
    height: "85%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
});
