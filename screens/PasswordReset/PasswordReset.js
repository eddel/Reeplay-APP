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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import TextField from "./components/TextField";
import Btn from "./components/Btn";
import Logo from "./components/Logo";
import CreateAccountBtn from "./components/CreateAccountBtn";
import { LinearGradient } from "expo-linear-gradient";
export default function PasswordReset({ navigation }) {
  const [resetpopup, setResetPopup] = useState(false);
  useEffect(() => {
    if (resetpopup == true) {
      setTimeout(() => {
        navigation.navigate("Login");
      }, 3000);
    } else {
      return;
    }
  }, [resetpopup]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        <ImageBackground
          source={require("../../assets/ONBOARDING.png")}
          style={styles.BackGround}
        >
            <LinearGradient
          colors={[ "rgba(0,0,0,0.8)","rgba(0,0,0,0.8)"]}
          style={styles.background}
        />
          <Logo />
          <View style={styles.FieldsWrapper}>
            <Text style={styles.VerifyText}>Reset your Password</Text>
            <TextField Holder="Email" />
            <View style={{ margin: 2 }}></View>
            <Btn
              color="#FF1313"
              Title="Reset Password"
              navigation={() => setResetPopup(true)}
            />
            <View style={{ marginTop: 20 }}></View>
          </View>
          <View style={styles.CreateAccountWrapper}>
            <CreateAccountBtn
              Title="Create a new Account"
              navigation={() => navigation.navigate("Register")}
            />
            <CreateAccountBtn
              Title="Login"
              navigation={() => navigation.navigate("Login")}
            />
          </View>
        </ImageBackground>
        {resetpopup == true ? (
          <ImageBackground
            source={require("../../assets/ONBOARDING.png")}
            style={styles.PopUpWrapper}
          >
            <View style={styles.PopUpLayer}>
              <TouchableOpacity
                onPress={() => setResetPopup(false)}
                style={styles.PopUpBody}
              >
                <View
                  style={{
                    height: 70,
                    width: 70,
                  //  backgroundColor: "#fff",
                    borderRadius: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 15,
                  }}
                >
                  <Image
                    source={require("../../assets/wtick.png")}
                    style={{ height: "60%", width: "60%" }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.PopupText}>PASSWORD RESET LINK</Text>
                <Text style={styles.PopupText2}>WAS SENT TO YOUR EMAIL</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  BackGround: {
    height: hp("100%"),
    width: wp("100%"),
  },
  BgLayer: {
    height: hp("100%"),
    width: wp("100%"),
    backgroundColor: "#000000",
    opacity: 0.85,
  },
  FieldsWrapper: {
    height: hp("26%"),
    width: wp("90%"),
    backgroundColor: "#1a1a1a",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-evenly",
  },
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 900,
    left: 0,
    flexGrow: 1,
  },
  ForgotPassText: {
    fontSize: rf(11),
    fontWeight: "400",
    color: "#E5E5E5",
    textAlign: "center",
    marginTop: 10,
  },
  VerifyText: {
    fontSize: rf(13),
    fontFamily: "robotobold",
    color: "#E5E5E5",
    textAlign: "center",
  },
  CreateAccountWrapper: {
    height: hp("20%"),
    width: wp("100%"),
    justifyContent: "space-evenly",
  },
  PopUpWrapper: {
    height: hp("100%"),
    width: wp("100%"),
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  PopUpBody: {
    height: hp("45%"),
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#FF1313",
    borderRadius: 15,
  },
  PopUpLayer: {
    height: hp("100%"),
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    opacity: 0.85,
  },
  PopupText: {
    fontSize: rf(13),
    fontFamily: "roboto",
    color: "#fff",
  },
  PopupText2: {
    fontSize: rf(13),
    fontFamily: "roboto",
    color: "#fff",
  },
});
