import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import Logo from "./components/Logo";
import TextField from "./components/TextField";
import PasswordField from "./components/PasswordField";
import Btn from "./components/Btn";
import NumField from "./components/NumField";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView } from "react-native";
export default function Register({ navigation }) {
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isFocusedE, setIsFocusedE] = useState(false);

  const handleFocusE = () => {
    setIsFocusedE(true);
  };

  const handleBlurE = () => {
    setIsFocusedE(false);
  };
  const [isFocusedP, setIsFocusedP] = useState(false);

  const handleFocusP = () => {
    setIsFocusedP(true);
  };

  const handleBlurP = () => {
    setIsFocusedP(false);
  };
  const [isFocusedF, setIsFocusedF] = useState(false);

  const handleFocusF = () => {
    setIsFocusedF(true);
  };

  const handleBlurF = () => {
    setIsFocusedF(false);
  };

  const [PromotionToggle, setPromotionToggle] = useState();

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
        <ScrollView>
          <Logo />

          <KeyboardAvoidingView style={styles.FieldsWrapper}>
            <TextField
              Holder="Full Names"
              handleFocus={handleFocusF}
              handleBlur={handleBlurF}
              isFocused={isFocusedF}
              value={name}
              onChangeText={(t) => setname(t)}
            />
            <NumField />
            <TextField
              Holder="Email"
              handleFocus={handleFocusE}
              handleBlur={handleBlurE}
              isFocused={isFocusedE}
              value={email}
              onChangeText={(t) => setEmail(t)}
            />
            <PasswordField
              password="Password"
              handleFocus={handleFocusP}
              handleBlur={handleBlurP}
              isFocused={isFocusedP}
              value={password}
              onChangeText={(t) => setPassword(t)}
            />
            <View style={styles.PromotionWrapper}>
              <TouchableOpacity
                onPress={() => setPromotionToggle(!PromotionToggle)}
                style={[
                  styles.PromotionToggleView,
                  {
                    backgroundColor:
                      PromotionToggle == 1 ? "#fff" : "transparent",
                  },
                ]}
              >
                {PromotionToggle == 1 ? (
                  <Ionicons name="md-checkmark-sharp" size={12} color="red" />
                ) : null}
              </TouchableOpacity>
              <Text style={styles.PromotionText}>
                Receive promotion and notification emails
              </Text>
            </View>
            <Btn
              color="#FF1313"
              Title="Create a New Account"
              navigation={() => navigation.navigate("VerifyEmail")}
            />

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={[styles.AccountText, { marginVertical: 12 }]}>
                Login
              </Text>
            </TouchableOpacity>
            <Text style={styles.ForgotPassText}>
              if you already have a Reeplay Account
            </Text>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
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
    opacity: 0.7,
  },
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 900,
    left: 0,
    flexGrow: 1,
  },
  FieldsWrapper: {
    height: hp("60%"),
    width: wp("90%"),
    backgroundColor: "#0B0B0B",
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    marginBottom: 200,
  },
  AccountText: {
    fontSize: rf(13),

    color: "#FF1313",
    textAlign: "center",
    fontFamily: "robotobold",
  },
  ForgotPassText: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#E5E5E5",
    textAlign: "center",
    fontFamily: "roboto",
  },
  PromotionToggleView: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  PromotionText: {
    color: "#C4C4C4",
    fontSize: rf(9),
    fontWeight: "400",
    fontFamily: "roboto",
  },
  PromotionWrapper: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: hp("2%"),
  },
});
