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
  ImageBackground,
  Image,
  StatusBar,
  Switch,
} from "react-native";

import NotificationCard from "./components/NotificationCard";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header/Header";

export default function Notifications({ navigation }) {
  const notification = [
    {
      image: require("../../assets/notification4.png"),
      title: "NEW ARRIVAL",
      desc: "Comedy I Horror I Adventure I Thriller I Romance I Crime I Epic",
      time: "2: 38 pm",
    },
    {
      image: require("../../assets/notification3.png"),
      title: "NEW ARRIVAL",
      desc: "Comedy I Horror I Adventure I Thriller I Romance I Crime I Epic",
      time: "1 hour ago",
    },
    {
      image: require("../../assets/notification2.png"),
      title: "NEW ARRIVAL",
      desc: "Comedy I Horror I Adventure I Thriller I Romance I Crime I Epic",
      time: "2 days ago",
    },
    {
      image: require("../../assets/notification1.png"),
      title: "NEW ARRIVAL",
      desc: "Comedy I Horror I Adventure I Thriller I Romance I Crime I Epic",
      time: "3 Weeks ago",
    },
  ];
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={{ margin: 20 }}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "robotobold",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Notifications
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        {notification.map((item, index) => {
          return (
            <View style={{ marginLeft: 20, marginBottom: 15 }} key={item.id}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={item.image}
                  style={{ borderRadius: 15, height: 100, width: 150 }}
                ></Image>
                <View style={{ width: "60%" }}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ color: "white", fontSize: 14, marginLeft: 10 }}
                  >
                    {item.desc}
                  </Text>
                  <Text
                    style={{
                      color: "#FFCC00",
                      fontSize: 14,
                      marginLeft: 10,
                      fontWeight: "bold",
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    width: wp("100%"),
    height: hp("6%"),
    backgroundColor: "#FF1313",
    justifyContent: "center",
    paddingHorizontal: wp("5%"),
  },
  headertxt: {
    fontSize: rf(15),
    color: "#fff",
    fontFamily: "roboto",
    fontWeight: "400",
  },
  title: {
    width: wp("90%"),
    height: hp("10%"),
    justifyContent: "center",
  },
  titletxt: {
    fontSize: rf(11),
    fontFamily: "robotobold",
    color: "#fff",
  },
  Wrapper: {
    width: wp("100%"),
    height: hp("7%"),
    backgroundColor: "#92919614",
    alignItems: "center",
  },
  PopupPremium: {
    height: hp("55%"),
    width: wp("90%"),
    backgroundColor: "#000000",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 15,
    bottom: hp("20%"),
    alignItems: "center",
    padding: 10,
    zIndex: 999,
    justifyContent: "center",
  },
  Logo: {
    height: hp("10%"),
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("4%"),
  },
  Text1: {
    fontFamily: "roboto",
    fontSize: rf(7),
    color: "#E5E5E5",
    fontWeight: "400",
    textAlign: "center",
  },
  Text2: {
    fontFamily: "robotobold",
    fontSize: rf(11),
    color: "#E5E5E5",
    textAlign: "center",
    marginVertical: 20,
  },
  TextView: {
    alignSelf: "center",
    justifyContent: "center",
  },
  RegisterBtn: {
    height: hp("7%"),
    width: wp("70%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FF1313",
    borderRadius: 15,
    marginVertical: hp("3%"),
  },
  BtnText: {
    fontFamily: "robotobold",
    fontSize: rf(11),
    color: "#fff",
  },
  closetext: {
    position: "absolute",
    bottom: 0,
    fontFamily: "roboto",
    fontWeight: "400",
    fontSize: rf(11),
    color: "#C4C4C4",
  },
  Layer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A",
    opacity: 1,
  },
});
const Biometric = StyleSheet.create({
  Wrapper: {
    width: wp("100%"),
    height: hp("8%"),
    backgroundColor: "#C4C4C4",
  },
  Layer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A",
    opacity: 0.8,
    alignItems: "center",
  },
  Biometric: {
    width: wp("95%"),
    height: hp("8%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  Inner: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  NotificationTxt: {
    fontSize: rf(10),
    fontWeight: "400",
    fontFamily: "roboto",
    color: "#fff",
    marginLeft: 10,
  },
  Notificationdisc: {
    fontSize: rf(6),
    color: "#fff",
    marginLeft: 12,
    fontWeight: "400",
    fontFamily: "roboto",
  },
});
