import React, { useState } from "react";
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

// Import the "Pin" component
import Pin from "./components/pin";

export default function Register({ navigation }) {
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isFocusedE, setIsFocusedE] = useState(false);

  // Add the showPin state variable and togglePin function
  const [showPin, setShowPin] = useState(false);

  const handleFocusE = () => {
    setIsFocusedE(true);
  };

  const handleBlurE = () => {
    setIsFocusedE(false);
  };

  // Other functions and state variables...

  // Function to toggle the display of the "Pin" component
  const togglePin = () => {
    setShowPin(!showPin);
  };

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
          <View style={{ paddingTop: StatusBar.currentHeight }}>
            <Logo />
          </View>
          <KeyboardAvoidingView style={styles.FieldsWrapper}>
            {/* Your existing code for text fields, buttons, and other components */}
            <Btn
              color="#FF1313"
              Title="Create a New Account"
              navigation={togglePin} // Call togglePin function
            />
          </KeyboardAvoidingView>
        </ScrollView>
        {showPin && <Pin navigation={navigation} />}
      </ImageBackground>
    </View>
  );
}

// Your existing styles...
