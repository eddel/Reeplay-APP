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
  ImageBackground,
  ScrollView,
  Switch,
  StatusBar
} from "react-native";
import Card from "./components/Card";
import BottomMenu from "../../components/BottomMenu";
export default function DashboardWatchlist({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar style='auto'/>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.titleTxt}>My Watchlist</Text>
            </View>
            <View style={styles.Back}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.BackTxt}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Cards Components */}
          <View style={styles.CardsRow}>
            <Card img={require("../../assets/Library2.png")} />
            <Card img={require("../../assets/Library3.png")} />
            <Card img={require("../../assets/Library1.png")} />
          </View>
          {/* Cards Components */}
          {/* Cards Components */}
          <View style={styles.CardsRow}>
            <Card img={require("../../assets/Library2.png")} />
            <Card img={require("../../assets/Library3.png")} />
            <Card img={require("../../assets/Library1.png")} />
          </View>
          {/* Cards Components */}
          {/* Cards Components */}
          <View style={styles.CardsRow}>
            <Card img={require("../../assets/Library2.png")} />
            <Card img={require("../../assets/Library3.png")} />
            <Card />
          </View>
          {/* Cards Components */}
        </View>
      </ScrollView>
      <BottomMenu
        homeimage={require('../../assets/HomwWhite.png')}
        searchimage={require('../../assets/SearchWhite.png')}
        liveimage={require('../../assets/LiveWhite.png')}
        upimage={require('../../assets/UpcomingWhite.png')}
        libimage={require('../../assets/lib.png')}
        textcolor='#fff'
        livetextcolor='#fff'
        LibraryText='#fff'
        UpcomngText='#fff'
        Searchcolor='#fff'
        navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  main: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("3%"),
  },
  header: {
    width: wp("100%"),
    height: hp("7%"),
    flexDirection: "row",
    paddingVertical: "5%",
    marginTop:20
  
  },
  title: {
    width: "70%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  titleTxt: {
    fontSize: rf(11),
    fontFamily: 'robotobold',
    color: "#C4C4C4",
    marginRight:wp('5%')

  },
  Back: {
    width: "30%",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: "5%",
  },
  BackTxt: {
    fontSize: rf(9),
    color: "#C4C4C4",
    fontFamily:'roboto',
    fontWeight:'400'
  },
  CardsRow: {
    width: wp("90%"),
    height: hp("20%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
