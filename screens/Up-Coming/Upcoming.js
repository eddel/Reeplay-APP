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
  StatusBar,
} from "react-native";
import UpcomingCards from "./components/UpcomingCards";
import UpcomingCards2 from "./components/UpcomingCards2";
import BottomMenu from "../../components/BottomMenu";

export default function Upcoming({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ marginBottom: hp("5%") }}>
          <View style={styles.Wrapper}>
            <View style={styles.title}>
              <Text style={styles.titleTxt}>COMING SOON</Text>
            </View>
            <UpcomingCards img={require("../../assets/upcoming1.png")} />
            {/* <TouchableOpacity  onPress={()=>navigation.navigate('ActorProfile')}>
              <Text style={{color:'#fff',fontSize:22,fontFamily:'roboto'}}>Go To Actor Profile</Text>
            </TouchableOpacity> */}
            <UpcomingCards2 img={require("../../assets/upcoming2.png")} />
            <UpcomingCards2 img={require("../../assets/upcoming3.png")} />
            <UpcomingCards2 img={require("../../assets/MSS.png")} />
            <UpcomingCards img={require("../../assets/upcoming3.png")} />
          </View>
        </View>
      </ScrollView>
      <BottomMenu
        homeimage={require("../../assets/HomwWhite.png")}
        searchimage={require("../../assets/SearchWhite.png")}
        liveimage={require("../../assets/LiveWhite.png")}
        upimage={require("../../assets/UpcomingRed.png")}
        libimage={require("../../assets/lib.png")}
        textcolor="#fff"
        livetextcolor="#fff"
        LibraryText="#fff"
        UpcomngText="#FF1313"
        Searchcolor="#fff"
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  Wrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("3%"),
  },
  title: {
    width: wp("90%"),
    height: hp("4%"),
    justifyContent: "flex-end",
    paddingHorizontal: wp(3),
  },
  titleTxt: {
    fontSize: rf(17),
    color: "#E5E5E5",
    fontFamily: "robotobold",
  },
});
