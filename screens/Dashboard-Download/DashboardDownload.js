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
  StatusBar,
  Image,
} from "react-native";
import ReeplayCard from "./components/ReeplayCard";
import DownloadCard from "./components/DownloadCard";
import BottomMenu from "../../components/BottomMenu";

export default function DashboardDownload({ navigation }) {
  const [showWatchList, setShowWatchList] = useState();
  const [deleted, setDeleted] = useState();
  const [showStore, setShowStore] = useState(false);
  const handlePress = () => {
    setShowWatchList(true);
  };
  const handleStore = () => {
    setShowStore(true);
  };
  const del = `Are you sure you want to ${"\n"}delete this content from ${"\n"}downloads?`;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.BackTxt}>Back</Text>
        </TouchableOpacity>
      </View>
      <ReeplayCard handlePress={handleStore} />
      <ScrollView>
        <View style={{ marginBottom: hp("4%") }}>
          <View style={styles.main}>
            <View style={styles.DownloadsWrapper}>
              <View style={styles.DownloadsWrapperInner}>
                <Text style={styles.DownloadFont}>DOWNLOADS</Text>
                <View style={styles.BottomBar}></View>
              </View>
              <TouchableOpacity>
                <Text style={styles.downTxt}>25 downloads</Text>
              </TouchableOpacity>
            </View>
            {!deleted ? (
              <DownloadCard
                img={require("../../assets/MOVIEART.png")}
                handlePress={handlePress}
                Title="NKOYO"
                Pg="13 +"
                Mb="48 Mb  | "
                navigation={() => navigation.navigate("SeriesPreview")}
              />
            ) : null}

            <DownloadCard
              img={require("../../assets/MOVIEART2.png")}
              handlePress={handlePress}
              Title="MUMMY SOLDIER"
              Pg="13 +"
              Mb="48 Mb  | "
            />
            <DownloadCard
              img={require("../../assets/MOVIEART.png")}
              handlePress={handlePress}
              Title="NKOYO"
              Pg="13 +"
              Mb="48 Mb  | "
            />
            <DownloadCard
              img={require("../../assets/MOVIEART.png")}
              handlePress={handlePress}
              Title="NKOYO"
              Pg="13 + "
              Mb="48 Mb  | "
            />
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
      {showWatchList == true ? (
        <View style={styles.PopupClear}>
          <Image
            source={require("../../assets/Delalert.png")}
            style={{ height: 123, width: 168, marginBottom: 10 }}
            resizeMode="contain"
          />

          <View style={styles.TextView}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "roboto",
                fontWeight: "600",
                color: "black",
                textAlign: "center",
              }}
            >
              {del}
            </Text>
          </View>
          <View style={styles.RegisterBtn}>
            <TouchableOpacity onPress={() => setShowWatchList(false)}>
              <Text style={[styles.BtnText, { marginRight: 10 }]}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowWatchList(false);
                setDeleted(true);
              }}
            >
              <Text style={styles.BtnText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  Logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4%"),
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
    bottom: "27%",
  },
  TextView: {
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  BtnText: {
    fontFamily: "robotobold",
    fontSize: rf(14),
    color: "black",
  },
  closeButtontxt: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FF1313",
    borderRadius: 15,
    marginTop: 10,
  },
  RegisterBtn: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    flexDirection: "row",
  },
  main: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("3%"),
  },
  header: {
    width: wp("90%"),
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 30,
  },
  BackTxt: {
    fontSize: rf(10),
    color: "#C4C4C4",
    fontWeight: "400",
    fontFamily: "roboto",
  },
  DownloadsWrapper: {
    width: wp("90%"),
    height: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  BottomBar: {
    width: "80%",
    height: "3%",
    backgroundColor: "#C4C4C4",
    borderRadius: 100,
  },
  DownloadsWrapperInner: {
    alignItems: "center",
  },
  DownloadFont: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#C4C4C4",
    marginBottom: 3,
  },
  downTxt: {
    fontSize: rf(7),
    color: "#FFCC00",
    fontWeight: "400",
    fontFamily: "roboto",
  },
});
