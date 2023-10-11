import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";

export default function UpcomingCards2(props) {
  const [color,setColor]=useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.FirstRow}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.VedioCard}
          onPress={props.onclick}
        >
          <Image
            source={props.img}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
          <View style={styles.playIcon}>
            <FontAwesome5 name="play" color={"white"} size={wp(10)} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.SecondRow}>
        <View style={styles.row}>
          <Text style={styles.seriesText}>Series</Text>
          <Text style={styles.titlefont}>MUMMY SOLDIER</Text>
        </View>
        <View style={styles.Inner}>
          <Text style={styles.Innertxt1}>COMING DECEMBER 27</Text>
          <TouchableOpacity style={{ marginBottom: 5 }} onPress={()=>setColor(!color)} >
            <MaterialCommunityIcons
              name="bell-ring"
              size={rf(14)}
              color={color?'red':"#FFFFFF"}
            />
          </TouchableOpacity>
          <Text style={styles.Innertxt2}>Remind me</Text>
        </View>
        <Text style={styles.DiscriptionText}>
          2 Sisters set out to Impress the World {"\n"} in a thrilling show of
          Bravery and Comedic Trickery.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("40%"),
    alignSelf: "center",
    marginBottom: 10,
  },
  FirstRow: {
    width: "100%",
    height: "65%",
    borderBottomWidth: 1,
    borderColor: "#C4C4C412",
    alignItems: "center",
    justifyContent: "center",
  },
  SecondRow: {
    width: "100%",
    height: "35%",
    borderBottomWidth: 1,
    borderColor: "#C4C4C412",
    alignItems: "center",
    justifyContent: "center",
  },
  VedioCard: {
    width: "90%",
    height: "90%",
    borderRadius: wp(5),
    overflow: "hidden",
  },
  Inner: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:hp(.5)
  },

  DiscriptionText: {
    fontSize: rf(12),
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontFamily: "roboto",
  },
  MoreTxt: {
    color: "#FFCC00",
    fontSize: rf(8),
    fontWeight: "400",
    fontFamily: "roboto",
  },
  titlefont: {
    fontSize: rf(20),
    color: "#fff",
    fontFamily: "robotobold",
  },
  Innertxt1: {
    fontSize: rf(9),
    color: "#C4C4C4",
    marginRight: 5,
    marginBottom: 5,
    fontFamily: "robotobold",
  },
  Innertxt2: {
    fontSize: rf(8),
    color: "#FFFFFF",
    marginLeft: 5,
    fontWeight: "400",
    marginBottom: hp(1),
    fontFamily: "roboto",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seriesCont: {
    backgroundColor: "red",
    marginHorizontal: wp(1),
    height: wp(3),
    justifyContent: "center",
    alignItems: "center",
  },
  seriesText: {
    color: "white",
    fontSize: rf(7),
    paddingHorizontal: wp(1.5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginHorizontal: wp(1),
    height: wp(3),
  },
  playIcon: {
    position: "absolute",
    top: "40%",
    left: "47%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});
