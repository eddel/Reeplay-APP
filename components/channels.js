import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import {
  dataLiveChanel,
  dataTrendingNow,
} from "../screens/Home/components/images";
import HomeMenuCard2 from "./homemenuCard2";
import LiveCard from "./liveCard";
import NewsChannelCard from "./newsChannelCard";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export default function LiveChannels({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NewsChannelCard
        title={"Popular Channels"}
        ContinueText={styles.ContinueText}
        data={dataLiveChanel}
        picStyle={{
          width: 280,
          height: 161,
          margin: 6,
          borderRadius: 5,
          marginLeft: 20,
        }}
        play={require('../assets/newsplay.png')}
      />
       <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                      opacity: 0.5,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                      opacity: 0.5,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                      opacity: 0.5,
                    }}
                  />
                </View>
              </View>
      <NewsChannelCard
        title={"News Channels"}
        ContinueText={styles.ContinueText}
        data={dataLiveChanel}
        picStyle={{
          width: 280,
          height: 161,
          margin: 6,
          borderRadius: 5,
          marginLeft: 20,
        }}
      />
      <NewsChannelCard
        title={"Sport Channels"}
        ContinueText={styles.ContinueText}
        data={dataLiveChanel}
        picStyle={{
          width: 280,
          height: 161,
          margin: 6,
          borderRadius: 5,
          marginLeft: 20,
        }}
      />
      <NewsChannelCard
        title={"kids Channels"}
        ContinueText={styles.ContinueText}
        data={dataLiveChanel}
        picStyle={{
          width: 280,
          height: 161,
          margin: 6,
          borderRadius: 5,
          marginLeft: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    marginBottom:70
  },
  BtnText: {
    fontFamily: "robotobold",
    fontSize: 15,
    color: "#fff",
  },
  PagerWrapper: {
    height: hp("20%"),
    width: wp("90%"),
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginHorizontal: 5,
  },
  ContinueText: {
    fontSize: rf(16),
    fontFamily: "robotobold",
    color: "#fff",
  },
  RegisterBtn: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FF1313",
    borderRadius: 15,
    marginVertical: hp("2%"),
    marginBottom: hp("2%"),
  },
  closeButtontxt: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#676571",
    borderRadius: 15,
  },
  PopupPremium: {
    height: 368,
    width: 253,
    backgroundColor: "#000000",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 15,
    bottom: hp("20%"),
    alignItems: "center",
    padding: 10,
    zIndex: 999,
  },
  Logo: {
    height: hp("10%"),
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4%"),
  },
  popupTextView: {
    marginTop: 10,
    alignSelf: "center",
  },
  Text1: {
    fontFamily: "roboto",
    fontSize: rf(13),
    color: "black",
    fontWeight: "400",
    textAlign: "center",
  },
  Text2: {
    fontFamily: "robotobold",
    fontSize: rf(15),
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  ContnueBody: {
    marginLeft: 8,
    justifyContent: "center",
  },
  WrapDot: {
    // position: 'absolute',
    // top: hp('50%'),
    // left: wp('32.5%'),
    marginTop: 15,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dotActive: {
    height: 5,
    width: 24,
    backgroundColor: "#FF1313",
    margin: 3,
    borderRadius: 10,
  },
  dot: {
    height: 5,
    width: 24,
    backgroundColor: "#7D0909",
    margin: 3,
    borderRadius: 10,
  },
  NewsWrapper: {
    paddingLeft: wp("4%"),
  },
  PopupClear: {
    height: 368,
    width: 253,
    backgroundColor: "white",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    zIndex: 100,
    bottom: "30%",
  },
  ProgressBar: {
    height: 5,
    width: wp("6%"),
    backgroundColor: "#FF1313",
    marginHorizontal: 4,
    borderRadius: 10,
  },
  ProgressBarWrapper: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 7,
  },
  TextView: {
    flexDirection: "row",
    alignSelf: "center",
    width: wp("80%"),
    height: hp("8%"),
    alignItems: "center",
  },
  popTextView: {
    alignSelf: "center",
    justifyContent: "center",
  },
  TVCText: {
    fontSize: rf(12),
    fontWeight: "400",
    color: "#C4C4C4",
    marginLeft: 15,
    fontFamily: "roboto",
  },
});
