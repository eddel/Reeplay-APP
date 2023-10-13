import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import Logo from "./components/Logo";
import TextField from "./components/TextField";
import PasswordField from "./components/PasswordField";
import Btn from "./components/Btn";
import NumField from "./components/NumField";
import Pin from "./components/Pin"; // Import your Pin component
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView } from "react-native";

export default function Register({ navigation }) {
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isFocusedE, setIsFocusedE] = useState(false);
  const [pin, setPin] = useState(); // Add state for the PIN

  // ... (Other state and handler functions)

  const [PromotionToggle, setPromotionToggle] = useState(false);

  return (
    <View style={styles.container}>
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
            {/* ... (TextFields, Buttons, and other UI components) */}
            <Pin
              value={pin}
              onChange={(text) => setPin(text)} // Handle PIN input changes
            />
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
    paddingTop: 0, // Set padding to 0 to remove top padding
  },
  BackGround: {
    height: hp("100%"),
    width: wp("100%"),
  },
  background: {
    position: "absolute",
    right: 0,
    bottom: 0,
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
  },
  // ... (Other styles)
});
