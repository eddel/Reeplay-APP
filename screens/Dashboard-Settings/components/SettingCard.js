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

export default function SettingCard(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      {props?.ArrowIcon ? (<TouchableOpacity>{props.ArrowIcon}</TouchableOpacity>) : (
        <View style={{
          height: 18, width: 18,
          justifyContent: 'center', alignItems: 'center'
        }}>


          <Image source={props.Icon}
            style={{ height: '100%', width: '100%' }}
            resizeMode='contain' />
        </View>
      )}


      <View style={styles.Inner}>

        <Text style={styles.title}>{props.title}</Text>

      </View>
      {props?.switch ? (
        <Switch
          trackColor={{ false: "#767577", true: "#222" }}
          thumbColor={isEnabled ? "#FF1313" : "#C4C4C4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : props.RightIcon ? (
        <TouchableOpacity>
          <AntDesign name="right" size={rf(11)} color="#C4C4C4" />
        </TouchableOpacity>

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
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  title: {

    color: "#fff",
    marginLeft: 10,
    fontSize: rf(15),
    fontWeight: "400",
    fontFamily: 'roboto',
  },
});
