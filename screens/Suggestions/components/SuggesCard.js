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
  TextInput,
} from "react-native";
export default function SuggesCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.FirstRow}>
        <Text style={styles.ReeplayFont}>SUGGESTION</Text>
        <Text style={styles.AdsFont}>
          We appreciate your Ideas and Suggestions. We want to make REEPLAY
          better, for you and everyone. write us your suggestions.
        </Text>
      </View>
      <View style={styles.AdsPicWrapper}>
        {/* <TextInput
          placeholder="Write your message here.... "
          placeholderTextColor="#C4C4C4A6"
          style={styles.TextField}
           
          
        /> */}
        <TextInput
          style={styles.TextField}
          placeholderTextColor="#C4C4C4A6"
          placeholder={props.isFocused ? "" : props.Holder}
          onFocus={props.handleFocus}
          onBlur={props.handleBlur}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("27%"),
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: "5%",
    alignSelf: "center",
  },

  FirstRow: {
    width: "100%",
    height: "40%",
    paddingHorizontal: 10,
    justifyContent: "center",
  },

  ReeplayFont: {
    fontSize: rf(16),
    fontFamily: "robotobold",
    color: "white",
    fontWeight: "bold",
  },
  AdsFont: {
    fontSize: rf(10),
    fontWeight: "bold",
    color: "white",
    marginTop: 2,
    fontFamily: "roboto",
  },
  AdsPicWrapper: {
    width: "98%",
    height: "58%",
    backgroundColor: "#000000",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  TextField: {
    width: "90%",
    height: "50%",
    fontSize: rf(12),
    fontWeight: "400",
    fontFamily: "roboto",
    color: "#fff",
    textAlign: "left",
    marginLeft: 10,
  },
});
