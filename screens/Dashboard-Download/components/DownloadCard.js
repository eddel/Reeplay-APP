import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default function DownloadCard(props) {
  return (
    <TouchableOpacity onPress={props.navigation}
      style={styles.container}>
      <View style={styles.PicView}>
        <Image
          source={props.img}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.discription}>
        <Text style={styles.discriptionTxt1}>{props.Title}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.discriptionTxt2}>
            <Text style={{ color: "#FFCC00" }}>{props.Pg}</Text>  |   {props.Mb}
          </Text>
          <TouchableOpacity style={{
            height: 15, width: 20, justifyContent: 'center', alignItems: 'center',
            marginLeft: 5,

          }}
            onPress={() => props.handlePress()}
          >
            <Image source={require('../../../assets/Waste.png')}
              style={{ height: '60%', width: '60%' }}
              resizeMode='contain' />
          </TouchableOpacity>
        </View>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("16%"),
    borderBottomWidth: 1,
    borderColor: '#c4c4c417',
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: wp('10%')
  },
  PicView: {
    width: 200,
    height: 120,
    borderRadius: 10,
    overflow: "hidden",
  },
  discription: {
    width: "45%",
    height: "90%",
    justifyContent: "space-evenly",
    paddingHorizontal: "5%",
    paddingVertical: "5%",

  },
  discriptionTxt1: {
    fontSize: rf(16),
    fontFamily: 'robotobold',
    color: "#ffffff",
  },
  discriptionTxt2: {
    fontSize: rf(11),
    color: "#C4C4C4",
    fontFamily: 'roboto'
  },
});
