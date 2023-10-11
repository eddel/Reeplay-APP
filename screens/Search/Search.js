import React, { useState, useEffect } from "react";
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
  TextInput,
  StatusBar,
  Keyboard,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import ReeplayCard from "./components/ReeplayCard";
import AdsButton from "./components/AdsButton";
import SearchCards from "./components/SearchCrads";
import BottomMenu from "../../components/BottomMenu";
import Header from "../../components/Header/Header";
import { dataRecentSearches } from "../Home/components/images";

export default function Search({ navigation }) {
  const [inputValue, setInputValue] = useState("");

  const handleResetButtonPress = () => {
    setInputValue("");
  };
  const [showWatchList, setShowWatchList] = useState();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsFocused(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsFocused(false);
      }
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        <View style={{ marginBottom: hp("3%") }}>
          <View style={styles.Wrapper}>
            <View style={styles.heading}>
              <Text style={styles.headingtxt}>Search</Text>
            </View>
            {/* Reeplay Card Component */}
            <ReeplayCard />
            {/* Reeplay Card Component */}
            {/* Ads Button Component */}
            <AdsButton onPress={() => setShowWatchList(true)} />
            {/* Ads Button Component */}
            <SearchCards title="RECENT" disc="YOUR RECENT SEARCHES" data={dataRecentSearches}/>
            <SearchCards title="SUGGESTIONS" disc="POPULAR REEPLAY SEARCHES" data={dataRecentSearches} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.SearchBarBody}>
        <TouchableOpacity>
          <FontAwesome name="search" size={rf(14)} color="#C4C4C4" />
        </TouchableOpacity>
        <TextInput
          style={styles.SearchText}
          placeholder={!isFocused ? "Search Movies, Shows, Anime" : ""}
          placeholderTextColor="#FFF"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <TouchableOpacity onPress={handleResetButtonPress}>
          <AntDesign name="closecircle" size={rf(14)} color="#C4C4C4" />
        </TouchableOpacity>
      </View>

      {!isFocused && (
        <BottomMenu
          homeimage={require("../../assets/HomwWhite.png")}
          searchimage={require("../../assets/SearchRed.png")}
          liveimage={require("../../assets/LiveWhite.png")}
          upimage={require("../../assets/UpcomingWhite.png")}
          libimage={require("../../assets/lib.png")}
          textcolor="#fff"
          livetextcolor="#fff"
          LibraryText="#fff"
          UpcomngText="#fff"
          Searchcolor="#FF1313"
          navigation={navigation}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    marginTop: 15,
  },
  Wrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("3%"),
  },
  heading: {
    width: wp("100%"),
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  headingtxt: {
    fontSize: rf(15),
    color: "#fff",
    fontFamily: "robotobold",
  },
  SearchBarBody: {
    height: hp("7%"),
    width: wp("90%"),
    borderRadius: 30,
    backgroundColor: "#000000",
    position: "absolute",
    bottom: hp("10%"),
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
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
  SearchText: {
    height: "100%",
    width: "70%",
    fontSize: 13,
    fontWeight: "400",
    fontFamily: "roboto",
    textAlign: "center",
    color: "#fff",
  },
  Logo: {
    height: hp("10%"),
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4%"),
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
    backgroundColor: "#6765718F",
    borderRadius: 15,
  },
  BtnText: {
    fontFamily: "robotobold",
    fontSize: rf(11),
    color: "#fff",
  },
});
