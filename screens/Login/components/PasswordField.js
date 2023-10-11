import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons, Feather } from "@expo/vector-icons";
export default function PasswordField(props) {
  const [Password, setPassword] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.InputText}
        placeholder={props.isFocused ? "" : props.password}
        onFocus={props.handleFocus}
        onBlur={props.handleBlur}
        placeholderTextColor="#fff"
        secureTextEntry={Password ? true : false}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <TouchableOpacity
        style={{
          height: 20,
          width: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => setPassword(!Password)}
      >
        <Image
          source={require("../../../assets/Eye.png")}
          style={{ height: "70%", width: "70%" }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("70%"),
    borderRadius: 30,
    borderColor: "#FF1313",
    borderWidth: 3,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    alignItems: "center",
    marginTop: hp("3%"),
    overflow: "hidden",
  },
  InputText: {
    height: "100%",
    width: "90%",
    fontSize: rf(11.5),
    color: "#E5E5E5",
    fontFamily: "roboto",
  },
});
