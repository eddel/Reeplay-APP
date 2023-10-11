import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import TrendingNow from "./components/TrendingNow";
import { BlurView } from "expo-blur";
import PagerView from "react-native-pager-view";
import { Linking } from "react-native";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function ActorProfile({ navigation }) {
  const [share, setShare] = useState(true);
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ height: hp("60%"), width: wp("100%") }}>
        <View style={styles.Wrap}>
          <Image
            source={require("../../assets/Actor.png")}
            style={{ height: "100%", width: WIDTH }}
            resizeMode="cover"
          />
          {/* <Image
            source={require("../../assets/Actor1.png")}
            style={{ height: HEIGHT * 0.55, width: WIDTH }}
            resizeMode="cover"
          />
          <Image
            source={require("../../assets/Actor2.png")}
            style={{ height: HEIGHT * 0.55, width: WIDTH }}
            resizeMode="cover"
          /> */}
        </View>
        <LinearGradient
          // Background Linear Gradient
          colors={[ "#000000","transparent","transparent","transparent","transparent","transparent", "#000000"]}
          style={styles.background}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: hp("3%"),
            left: wp("4%"),
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Ionicons name="menu" size={rf(23)} color="#fff" />
        </TouchableOpacity>
        <View style={{ bottom: hp("2%"), position: "absolute", width: "100%" }}>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <Text style={styles.FlimText}>ACTOR</Text>
            <Text style={styles.FlimTitle}>Richard Mofe</Text>
          </View>
          <View style={styles.PlayBtnWrapper}>
            <TouchableOpacity
              onPress={() =>Linking.openURL('https://instagram.com/reeplayinc')}
              style={styles.PlayBtn}
            >
              <Text style={styles.PlayText}>FAN PAGE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.TextWrapper}>
        <Text style={styles.ActorDescriptionText}>
          #2skidBette #enterpreneur #upcomingartist Editor | Developer | Talent
          | Music Artiste | BusinessReady to Pick the Dreams that chosed Me.
        </Text>
      </View>
      <View style={styles.OtherMovies}>
        <Text style={styles.OtherMoviesText}>OTHER MOVIES FEATURED ON</Text>
      </View>
      <View style={styles.FeaturedMovies}>
        <ScrollView horizontal={true}>
          <TrendingNow Image={require("../../assets/Upcoming.png")} />
          <TrendingNow Image={require("../../assets/Upcoming.png")} />
          <TrendingNow Image={require("../../assets/Upcoming.png")} />
        </ScrollView>
      </View>
      {share == true ? (
        <BlurView intensity={160} tint="dark" style={styles.ShareView}>
          <TouchableOpacity style={styles.TextView}>
            <Text style={styles.ShareText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>navigation.goBack()}
            style={styles.TextView}
          >
            <Text style={styles.ShareText}>Close</Text>
          </TouchableOpacity>
        </BlurView>
      ) : null}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  Wrap: {
    width: WIDTH,
    height: HEIGHT * 0.55,
  },
  WrapDot: {
    position: "absolute",
    left: wp("40%"),
    flexDirection: "row",
    alignItems: "center",
    top: hp("50%"),
  },
  dotActive: {
    height: 5,
    width: 20,
    backgroundColor: "#FF1313",
    margin: 3,
    borderRadius: 10,
  },
  dot: {
    height: 5,
    width: 20,
    backgroundColor: "#7D0909",
    margin: 3,
    borderRadius: 10,
  },

  FlimText: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  FlimTitle: {
    fontSize: rf(27),
    fontFamily: "robotobold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },

  PlayBtn: {
    height: hp("6%"),
    width: wp("40%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF1313",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  PlayText: {
    fontSize: rf(10),
    fontFamily: "robotobold",
    color: "#fff",
  },
  ProgressBar: {
    height: 5,
    width: wp("5%"),
    backgroundColor: "#FF1313",
    marginHorizontal: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  ProgressBarWrapper: {
    flexDirection: "row",
    alignSelf: "center",
  },

  background: {
    height: hp("55%"),
    width: wp("100%"),
    position: "absolute",
  },
  ActorDescriptionText: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#ffff",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "roboto",
  },
  TextWrapper: {
    width: wp("80%"),
    alignSelf: "center",
  },
  OtherMovies: {
    width: wp("90%"),
    alignSelf: "center",
  },
  OtherMoviesText: {
    fontSize: rf(10),
    color: "#ffff",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "robotobold",
  },
  FeaturedMovies: {
    flexDirection: "row",
    marginVertical: 12,
  },
  ShareView: {
    height: hp("12%"),
    width: wp("100%"),
    backgroundColor: "#222",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  ShareText: {
    color: "#E5E5E5",
    fontSize: rf(10),
    fontWeight: "400",
    fontFamily: "roboto",
  },
  TextView: {
    alignItems: "center",
  },
});
