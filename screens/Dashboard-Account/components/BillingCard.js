import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { BottomSheet } from 'react-native-btr';



export default function BillingCard(props) {
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.layer}>
        <View style={styles.firstRow}>
          <Text style={styles.BillingTxt}>BILLING</Text>
        </View>
        <View style={styles.SecondRow}>
          <Text style={styles.SecondRowTxt}>YOU HAVE NO ACTIVE PLAN</Text>
          <TouchableOpacity style={styles.SubscriptionBtn} onPress={props.handlePress}>
            <Text style={styles.SubscriptionBtnTxt}>GET SUBSCRIPTION</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ThirdRow}>
          <Text style={styles.ThirdRowTxt}>Your next billing date is not available</Text>
          <TouchableOpacity>
            <AntDesign name="right" size={rf(12)} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.ThirdRow}>
          <Text style={styles.ThirdRowTxt}>
            Add Payment Method / Billing Details
          </Text>
          <TouchableOpacity>
            <AntDesign name="right" size={rf(12)} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.TopUpBtn} onPress={props.onPress}>
          <Text style={styles.TopUpBtnTxt}>TOP UP</Text>
        </TouchableOpacity>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("95%"),
    height: hp("33%"),
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
  },
  layer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#1A1A1A",
    opacity: 0.8,
    alignItems: "center",
  },
  firstRow: {
    width: "100%",
    height: "18%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  BillingTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily: 'robotobold'
  },
  SecondRow: {
    width: "100%",
    height: "13%",
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderColor: '#00000040'
  },
  SubscriptionBtn: {
    width: 110,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  SubscriptionBtnTxt: {
    fontSize: rf(9),
    color: "#fff",
    fontFamily: 'robotobold'
  },
  SecondRowTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily: 'robotobold'
  },
  ThirdRow: {
    width: "100%",
    height: "18%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: '#00000040',
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  ThirdRowTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontWeight: "400",
    fontFamily: 'roboto'
  },
  TopUpBtn: {
    width: "70%",
    height: "18%",
    borderRadius: 15,
    backgroundColor: "#FF1313",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  TopUpBtnTxt: {
    fontSize: rf(12),
    fontFamily: 'robotobold',
    color: "#fff",

  },
  bottomNavigationView: {
    backgroundColor: "transparent",
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ShareView: {
    height: hp('50%'),
    width: wp("100%"),
    backgroundColor: '#222',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  ShareText: {
    color: '#E5E5E5',
    fontSize: rf(12),
    fontWeight: '400',
    fontFamily: 'roboto'
  },
  TextView: {
    alignItems: 'center'
  },
});
