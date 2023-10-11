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
export default function ReeplayCard({ handlepress }) {
  const [showWatchList, setShowWatchList] = useState();
  const handleFlow = () => {
    handlepress();
  }
  return (
    <View style={styles.container}>
      <View style={styles.FirstRow}>
        <View>
          <Text style={styles.ReeplayFont}>REEPLAY</Text>
          <Text style={styles.AdsFont}>Ads that meet your interest</Text>
        </View>
        <TouchableOpacity style={styles.BuyBtn} onPress={() => handleFlow()}>
          <Text style={styles.BuyTxt}>BUY NOW</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.AdsPicWrapper}>
        <View style={styles.AdsPic}>
          <Image
            source={require("../../../assets/AdsSuggestion.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
          <View style={{
            backgroundColor: '#000000', position: 'absolute',
            bottom: 10, left: 15, borderRadius: 7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{ fontSize: rf(9), color: '#E5E5E5' }}>    AD    </Text>
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("29%"),
    backgroundColor: "#FF1313",
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: "1%",
    alignSelf: 'center'
  },

  FirstRow: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  BuyBtn: {
    width: "32%",
    height: "40%",
    borderRadius: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ReeplayFont: {
    fontSize: rf(15),
    fontFamily: 'robotobold',
    color: "#fff",
  },
  TextView: {

    alignSelf: 'center',
    justifyContent: 'center'

  },
  Logo: {
    height: hp('10%'),
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('4%')
  },
  AdsFont: {
    fontSize: rf(10),
    fontWeight: "bold",
    color: "#fff",
    fontFamily: 'roboto'
  },
  BuyTxt: {
    fontSize: rf(9),
    fontFamily: 'robotobold',
    color: "#FF1313",

  },
  AdsPicWrapper: {
    width: "98%",
    height: "68%",
    backgroundColor: "#222",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  AdsPic: {
    width: "95%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  PopupClear: {
    height: hp('55%'),
    width: wp('90%'),
    backgroundColor: '#000000',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 15,
    bottom: hp('20%'),
    alignItems: 'center',
    padding: 10,
    zIndex: 999,
    justifyContent: 'center'
  }, RegisterBtn: {
    height: hp('7%'),
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF1313',
    borderRadius: 15,
    marginVertical: hp('2%')
  },
  closeButtontxt: {
    height: hp('7%'),
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#6765718F',
    borderRadius: 15,

  },
});
