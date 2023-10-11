import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
export default function BillingCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.layer}>
        <View style={styles.firstRow}>
          <Text style={styles.BillingTxt}>BILLING</Text>
        </View>
        <View style={styles.SecondRow}>
          <View style={styles.InnerSecondRow}>
            <View style={styles.VisaCard}>
              <Image
                source={require("../../../assets/VisaCard.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <Text style={styles.SecondRowTxt}>**** **** **** 5071</Text>
          </View>

          <TouchableOpacity style={styles.ActiveBtn}>
            <Text style={styles.SubscriptionBtnTxt}>ACTIVE PLAN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ThirdRow}>
          <Text style={styles.ThirdRowTxt}>
            Your next billing date is January 14, 2022
          </Text>
          <TouchableOpacity>
            <AntDesign name="right" size={rf(12)} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.ThirdRow}>
          <Text style={styles.ThirdRowTxt}>
            Change Payment Method / Billing Details
          </Text>
          <TouchableOpacity>
            <AntDesign name="right" size={rf(12)} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.LastRow}>
          <View>
            <Text style={styles.LastRowTxt1}>₦300.00</Text>
            <Text style={styles.LastRowTxt2}>Balance</Text>
          </View>
          <TouchableOpacity onPress={props.navigation}
          style={styles.TopUpBtn}>
            <Text style={styles.TopUpBtnTxt}>TOP UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("95%"),
    height: hp("32%"),
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
  },
  layer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#1A1A1A",
    opacity: 0.8,
  },
  firstRow: {
    width: "100%",
    height: "17%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  BillingTxt: {
    fontSize: rf(12),
    fontFamily:'robotobold',
    color: "#fff",
  },
  SecondRow: {
    width: "100%",
    height: "12%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor:'#00000040',
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  ActiveBtn: {
    width:80,
    height:22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#00E3A3",
    alignItems: "center",
    justifyContent: "center",
  },
  SubscriptionBtnTxt: {
    fontSize: rf(9),
    color: "#00E3A3",
    fontFamily:'robotobold'
  },
  SecondRowTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily:'robotobold'
  },
  ThirdRow: {
    width: "100%",
    height: "17%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor:'#00000040',
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  ThirdRowTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontWeight: "400",
    fontFamily:'roboto'
  },
  VisaCard: {
    width: "20%",
    height: "60%",
    borderWidth: 1,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
  },
  InnerSecondRow: {
    flexDirection: "row",
  },
  LastRow: {
    height:'30%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  
  },
  TopUpBtn: {
    width: 125,
    height:50,
    borderRadius: 15,
    backgroundColor: "#FF1313",
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  TopUpBtnTxt: {
    fontSize: rf(12),
    fontFamily:'robotobold',
    color: "#fff",

  },
  LastRowTxt1: {
    fontSize: rf(12),
   
    color: "#FF1313",
    fontFamily:'robotobold',
    marginTop:15

  },
  LastRowTxt2: {
    fontSize: rf(10),
    color: "#fff",
    textAlign: "center",
    fontWeight:'400',
    fontFamily:'roboto'
  },
});
