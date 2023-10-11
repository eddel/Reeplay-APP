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
import { FontAwesome, AntDesign } from "@expo/vector-icons";
export default function TapRating(props) {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <TouchableOpacity style={{ height: 15, width: 13, justifyContent: 'center',
         alignItems: 'center' ,marginLeft:10}}>
          <Image source={require('../../../assets/ArrowDown.png')}
            style={{ height: '100%', width: '100%' }}
            resizeMode='contain' />
        </TouchableOpacity>
        <View style={styles.icons}>
        <FontAwesome name="star" size={rf(14)} color="#fff" />
        <FontAwesome name="star" size={rf(14)} color="#fff" />
        <FontAwesome name="star" size={rf(14)} color="#fff" />
        <FontAwesome name="star" size={rf(14)} color="#fff" />
        <FontAwesome name="star" size={rf(14)} color="#fff" />
        
        </View>
        {props.button ? (
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.Btntxt}>PREMIUM</Text>
          </TouchableOpacity>
        ) : props.Icon ? (
          <TouchableOpacity style={{ height: 15, width: 13, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../../assets/ArrowUp.png')}
            style={{ height: '100%', width: '100%' }}
            resizeMode='contain' />
        </TouchableOpacity>
        ) : null}
      </View>
      <TouchableOpacity>
        <Text style={styles.RateTxt}>Tap to Rate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("85%"),
    height: hp("9%"),
    alignItems: "center",
    justifyContent: "center",
  },
  firstRow: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
 
  },
  icons: {
    flexDirection: "row",
    width: "38%",
    justifyContent: "space-around",
    marginLeft:wp('10%')
    
  },
  Button: {
    width: "17%",
    height: "90%",
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#00E3A3",
  },
  Btntxt: {
    color: "#00E3A3",
    fontSize: rf(5),
    fontWeight:'400',
    fontFamily:'roboto'
  },
  RateTxt: {
    fontSize: rf(9),
    color: "#fff",
    fontWeight: '400',
    fontFamily:'roboto'
  },
});
