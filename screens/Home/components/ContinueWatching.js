import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function ContinueWatching(props) {
  const navigation=useNavigation()
  return (
    <View>
         
      <TouchableOpacity onPress={props.navigation} style={styles.PictureBody}>
        <Image
          source={props.Image}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
        <Image
          source={require('../../../assets/crossblack.png')}
          style={{ height: 13, width: 13,position:'absolute',right:5,top:6}}
          resizeMode="contain"
        />
        <View style={styles.WatchTimeBar}>
          <View
            style={[
              styles.WatchTimeBar,
              {
                backgroundColor: "#FF1313",
                width: "80%",
              },
            ]}
          ></View>
        </View>

        <TouchableOpacity onPress={props.popup} style={styles.DotView}>
          <Entypo name="dots-three-vertical" size={rf(14)} color="#fff" />
        </TouchableOpacity>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#000000",
          marginLeft: 10,
          marginRight: 8,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          {props.location && (
            <Text style={{ color: "#fff", fontFamily: "roboto", fontSize: 9 }}>
              {props.location}
            </Text>
          )}
          <Text
            style={{ color: "#fff", fontFamily: "robotobold", fontSize: 12 }}
          >
            {props.name}
          </Text>
          <Text style={{ color: "#fff", fontFamily: "roboto", fontSize: 10 }}>
            {props.genre}
          </Text>
        </View>
        <TouchableOpacity  onPress={()=>navigation.navigate('MusicVideoPreview')}>
        <Image
          source={require("../../../assets/info.png")}
          resizeMode="contain"
          style={{ width: 33, height: 13 }}
        />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  PictureBody: {
    height: 108,
    width: 188,
    overflow: "hidden",
    marginLeft: wp("3%"),
  },
  WatchTimeBar: {
    height: 2,
    width: "100%",
    backgroundColor: "#c4cB1ADAD4c4",
    position: "absolute",
    bottom: 0,
  },
  offDotView: {
    position: "absolute",
    right: 10,
    bottom: 20,
  },
});
