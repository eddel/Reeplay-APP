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
export default function EpisodeCard(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.SeasonPic}>
        <Image
          source={require("../../../assets/SeasonPic.png")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
        <View style={{
          height: 5, width: '100%', position: 'absolute', backgroundColor: '#C4C4C4',
          bottom: 0
        }}>
          <View style={{
            height: 5, width: '60%', position: 'absolute', backgroundColor: '#FF1313',
            bottom: 0
          }}>

          </View>

        </View>
      </View>
      <View style={styles.discription}>
        <Text style={styles.font1}>1. Introduction</Text>
        <Text style={styles.font2}>
          Two Sisters set out to Impress the World in an interesting & thrilling show of Bravery yet Comedic Trickery.
        </Text>
      </View>
      <View style={styles.Icon}>
        <TouchableOpacity>

          <AntDesign name="arrowdown" size={rf(13)} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("18%"),
    flexDirection: "row",
    marginBottom: 0,
  },
  SeasonPic: {
    width: "50%",
    height: "70%",
    borderRadius: 10,
    overflow: "hidden",
  },
  discription: {
    width: "40%",
    height: "90%",
    paddingHorizontal: 5,
  },
  font1: {
    fontSize: rf(11),
    marginTop: 5,
    color: "#fff",
    fontWeight: '400',
    marginLeft: 5,
    fontFamily: 'roboto'
  },
  font2: {
    fontSize: rf(9),
    marginTop: 8,
    color: "#fff",
    fontWeight: '400',
    marginLeft: 5,
    fontFamily: 'roboto'
  },
  Icon: {
    width: "10%",
    height: "90%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
