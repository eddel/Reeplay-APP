import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
export default function DashboardCard(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onclick}>
      <View style={styles.Inner}>
        <View style={{
          width: 18, height: 18, justifyContent: 'center', alignItems: 'center',
        }}>
          <Image source={props.photo}
            style={{ height: '100%', width: '100%' }}
            resizeMode='contain' />
        </View>

        <Text style={styles.title}>{props.title}</Text>
      </View>
      <TouchableOpacity>{props.ArrowIcon}</TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("7%"),
    borderBottomWidth: 1,
    borderColor: "#222",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  Inner: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#fff",
    marginLeft: 10,
    fontFamily: 'roboto'
  },
});
