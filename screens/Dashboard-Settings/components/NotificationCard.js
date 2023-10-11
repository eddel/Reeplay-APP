import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TouchableOpacity, View, Switch, Image } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
  Ionicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

export default function NotificationCard(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>


      <View style={styles.Inner}>

        <Text style={styles.title}>{props.title}</Text>
        {props?.downText ? (
          <Text style={{ fontSize: 10, color: 'white', width: '80%' }} >{props.downText}</Text>
        ) : null}
      </View>

      {props?.switch ? (
        <Switch
          trackColor={{ false: "#767577", true: "#222" }}
          thumbColor={isEnabled ? "#FF1313" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : null}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("95%"),
    height: hp("7%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  Inner: {
    flexDirection: "column",

    flex: 1
  },
  title: {

    color: "#fff",

    fontSize: rf(14),
    fontWeight: "400",
    fontFamily: 'roboto',
  },
});
