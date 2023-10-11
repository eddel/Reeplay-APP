import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  dataLiveChanel,
  dataTrendingNow,
} from "../screens/Home/components/images";
import NewsChannelCard from "./newsChannelCard";
import LiveOther from "./liveOther";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const dataevents = [
  {
    source: require("../assets/liveEvent.png"),
    genre: "EVENT",
    title: "IYANYA",
    subtitle: "UK TOUR",
    screen: "MusicVideoPreview",
    infolive: require("../assets/infolive.png"),
  },
];
export default function LiveEvents({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LiveEventCard
        title={"Popular Events"}
        ContinueText={styles.ContinueText}
        data={dataevents}
        picStyle={{
          width: 350,
          height: 200,
          margin: 6,
          borderRadius: 5,
          marginLeft: 20,
        }}
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
       <Text style={{fontFamily:'robotobold',color:'#fff',fontSize:16,margin:2}}>Others in  Events</Text>
      <LiveOther data={dataTrendingNow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    marginBottom: 70,
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
function LiveEventCard(props) {
  return (
    <>
      <View
        style={{
          // marginHorizontal: 20,
          marginLeft: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 3,
          marginRight: 8,
        }}
      >
        <Text style={props.ContinueText}>{props.title}</Text>
        <TouchableOpacity onPress={() => alert("See All")}>
          <Text
            style={{
              fontSize: 10,
              color: "#FF1313",
              fontWeight: "400",
              fontFamily: "roboto",
            }}
          ></Text>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignContent: "center",
            // marginHorizontal: 10,
            marginRight: 10,
            alignItems: "center",
          }}
        >
          {props?.data?.map((x) => {
            return (
              <ImageBackground
                source={x?.source}
                style={[
                  props.picStyle,
                  {
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                resizeMode="cover"
              >
                {props.play && (
                  <LinearGradient
                    colors={["rgba(0,0,0,0.5)", "transparent"]}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      height: 500,
                      flexGrow: 1,
                    }}
                  />
                )}
                <Image source={props?.play} resizeMode="cover" />
              </ImageBackground>
            );
          })}
        </View>
      </View>
    </>
  );
}
