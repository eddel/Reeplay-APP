import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import NextBtn from "../../components/NextBtn";
import { LinearGradient } from "expo-linear-gradient";
import * as NavigationBar from "expo-navigation-bar";

export default function OnBoarding3({ navigation }) {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    Platform.OS === "android" ? NavigationBar.setVisibilityAsync('hidden') : null;
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/ONBOARDING3.jpg")}
        resizeMode="cover"
        style={styles.ImageWrapper}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)", "rgba(0,0,0,0.9)"]}
          style={styles.background}
        />
        {/* Rest of your UI */}
      </ImageBackground>
      <NextBtn
        title="CONTINUE"
        iconcolor="#7D0909"
        secondiconcolor="#7D0909"
        thirdiconcolor="#FF1313"
        navigation={() => navigation.navigate("Auth")}
      />
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  ImageWrapper: {
    flex: 1,
    width: width,
    height: height,
  },
  // Rest of your styles remain the same
});
