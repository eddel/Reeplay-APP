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
  Switch,
  StatusBar,
} from "react-native";
import ReeplayCard from "./components/ReeplayCard";
import SuggesCard from "./components/SuggesCard";
import BottomMenu from "../../components/BottomMenu";
export default function Suggestions({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [showWatchList, setShowWatchList] = useState();
  const handlePress = () => {
    setShowWatchList(true);
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={{ marginBottom: 200 }}>
           
          <View style={{ marginBottom: hp("10%") }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.Backtxt}>Back</Text>
              </TouchableOpacity>
            </View>
            <ReeplayCard handlepress={handlePress} />
            <View style={styles.LogoWrapper}>
              <Image
                source={require("../../assets/Logo.png")}
                style={{ width: "80%", height: "80%" }}
                resizeMode="cover"
              />
            </View>
            <SuggesCard
              Holder="Write your message here.... "
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              isFocused={isFocused}
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomMenu
        homeimage={require("../../assets/HomwWhite.png")}
        searchimage={require("../../assets/SearchWhite.png")}
        liveimage={require("../../assets/LiveWhite.png")}
        upimage={require("../../assets/UpcomingWhite.png")}
        libimage={require("../../assets/lib.png")}
        textcolor="#fff"
        livetextcolor="#fff"
        LibraryText="#fff"
        UpcomngText="#fff"
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
  },
  header: {
    width: wp("90%"),
    height: hp("5%"),
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 10,
    marginBottom: 15,
    alignSelf: "center",
    marginTop: 30,
  },
  Backtxt: {
    fontSize: rf(12),
    color: "white",
    fontWeight: "400",
    fontFamily: "roboto",
  },
  LogoWrapper: {
    width: wp("100%"),
    height: hp("10%"),
    alignItems: "center",
    alignSelf: "center",
  },
  btn: {
    width: wp("70%"),
    height: hp("6%"),
    backgroundColor: "#FF1313",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("5%"),
    alignSelf: "center",
  },
  PopupClear: {
    height: hp("55%"),
    width: wp("90%"),
    backgroundColor: "#000000",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 15,
    bottom: hp("20%"),
    alignItems: "center",
    padding: 10,
    zIndex: 999,
    justifyContent: "center",
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
  },
  closeButtontxt: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FF1313",
    borderRadius: 15,
    margin: 15,
  },
  btnTxt: {
    fontSize: rf(11),
    fontFamily: "robotobold",
    color: "#fff",
  },
  TextView: {
    alignSelf: "center",
    justifyContent: "center",
  },
  Logo: {
    height: hp("10%"),
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4%"),
  },
});
