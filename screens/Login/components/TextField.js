import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
export default function TextField(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.InputText}
        placeholder={props.isFocused ? "" : props.Holder}
        placeholderTextColor="#fff"
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("70%"),
    borderRadius: 30,
    borderColor: "#FF1313",
    borderWidth: 3,
    alignSelf: "center",
    paddingLeft: wp("5%"),
    marginTop: hp("3%"),
    overflow: "hidden",
  },
  InputText: {
    height: "100%",
    width: "100%",
    fontSize: rf(12),
    color: "#E5E5E5",
    fontFamily: "roboto",
  },
});
