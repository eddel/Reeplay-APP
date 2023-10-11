import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import TextField from "./components/TextField";
import Btn from "./components/Btn";
import { LinearGradient } from "expo-linear-gradient";
import { Keyboard } from "react-native";
export default function VerifyEmail({ navigation }) {
  const [popup, setPopup] = useState();
  useEffect(() => {
    if (popup == true) {
      setTimeout(() => {
         navigation.navigate('InterestsScreen');
      }, 3000);
    }
  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageBackground
        source={require("../../assets/ONBOARDING.png")}
        style={styles.BackGround}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
          style={styles.background}
        />
        <View style={{ justifyContent: "center", flex: 1 }}>
          <View style={styles.FieldsWrapper}>
            <Text style={styles.VerifyText}>VERIFY PHONE NUMBER</Text>
            <TextField Holder="Full Names" />
            <Btn
              color="#FF1313"
              Title="VERIFY"
              navigation={() => {
                Keyboard.dismiss();
                setPopup(true);
              }}
            />
            <Text style={styles.ForgotPassText}>
              Code expires in 10 minuites
            </Text>
          </View>
        </View>
      </ImageBackground>
      {popup == true ? (
        <ImageBackground
          source={require("../../assets/ONBOARDING1.jpg")}
          style={styles.PopupWrapper}
        >
          <View style={styles.BgLayer}>
            <TouchableOpacity
              onPress={() => setPopup(false)}
              style={styles.PopupBody}
            >
              <Image
                source={require("../../assets/wtick.png")}
                style={{ height: 40, width: 40 }}
                resizeMode="contain"
              />
              <Text style={styles.VerificationText}>VERIFICATION</Text>
              <Text style={styles.VerificationText2}>SUCCESSFUL</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 900,
    left: 0,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  BackGround: {
    height: hp("100%"),
    width: wp("100%"),
  },
  BgLayer: {
    // height: hp("100%"),
    // width: wp("100%"),
    // backgroundColor: "#000000",
    // opacity: 1,
    justifyContent: "center",
  },
  FieldsWrapper: {
    height: hp("30%"),
    width: wp("90%"),
    backgroundColor: "#1a1a1a",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    opacity: 1,
  },
  ForgotPassText: {
    fontSize: rf(9),
    fontWeight: "400",
    color: "#E5E5E5",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "roboto",
  },
  VerifyText: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#E5E5E5",
    textAlign: "center",
  },
  PopupWrapper: {
    height: hp("100%"),
    width: wp("100%"),
    position: "absolute",
  },
  BgLayer: {
    flex: 1,
    opacity: 0.85,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  PopupBody: {
    height: hp("45%"),
    width: wp("90%"),
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  VerificationText: {
    fontSize: rf(13),
    color: "#fff",
    fontFamily: "roboto",
  },
  VerificationText2: {
    fontSize: rf(13),
    fontFamily: "roboto",
    color: "#fff",
  },
});
