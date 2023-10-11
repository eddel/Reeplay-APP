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
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Header from "../../components/Header/Header";
import { Entypo } from "@expo/vector-icons";
export default function TopupSummary({ navigation }) {
  const [pickerValue, setpickerValue] = useState("1 Month");
  const [pickerPrice, setPickerPrice] = useState("500");
  var fromTopup = false;
  const [Topup, setTopup] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", left: 10, top: 20 }}
      >
        <Entypo name="chevron-left" size={24} color="#fff" />
      </TouchableOpacity>
      <View style={[styles.Logo, { alignSelf: "center" }]}>
        <Image
          source={require("../../assets/LogoReply.png")}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 24,
           
            alignSelf: "center",
            marginVertical: "20%",
            marginBottom: 0,
            fontFamily:'roboto'
          }}
        >
          ₦{pickerPrice}.00
        </Text>
      </View>
      <View style={styles.PickerView}>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 13,
              fontFamily:'roboto',
              marginLeft: 10,
            }}
          >
            {pickerValue}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setTopup(true);
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FF1313",
                fontSize: 13,
                fontFamily:'roboto',
                marginRight: 5,
              }}
            >
              Select
            </Text>
            <FontAwesome
              name="caret-down"
              size={15}
              color="red"
              style={{ marginRight: 15 }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 41,
          width: "50%",
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "#FF1313",
          borderRadius: 27,
          marginTop: 45,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            fromTopup = true;
            navigation.navigate("TopupScreen", fromTopup);
          }}
        >
          <Text
            style={{
              fontSize: 15,
              
              fontFamily: "roboto",
              color: "white",
              textAlign: "center",
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      {Topup == true ? (
        <BlurView
          intensity={120}
          tint="dark"
          style={{ position: "absolute", bottom: 0, flex: 1, width: "100%" }}
        >
          <View style={{ flex: 1, marginTop: 50 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                padding: 5,
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setpickerValue("1 Month");
                  setTopup(false);
                  setPickerPrice("500");
                }}
              >
                <Text
                  style={[
                    styles.ShareText,
                    {
                      textAlign: "center",
                      fontSize: 14,
                      fontFamily:'roboto',
                      color: "white",
                    },
                  ]}
                >
                  1 Month
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                padding: 5,
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setpickerValue("3 Month");
                  setTopup(false);
                  setPickerPrice("1300");
                }}
              >
                <Text
                  style={[
                    styles.ShareText,
                    {
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: "500",
                      color: "white",
                      fontFamily:'roboto'
                    },
                  ]}
                >
                  3 Month
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                padding: 5,
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setpickerValue("6 Month");
                  setTopup(false);
                  setPickerPrice("2600");
                }}
              >
                <Text
                  style={[
                    {
                      textAlign: "center",
                      fontSize: 14,
                      fontWeight: "500",
                      color: "white",
                      fontFamily:'roboto'
                    },
                  ]}
                >
                  6 Month
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                padding: 5,
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setpickerValue("1 year");
                  setTopup(false);
                  setPickerPrice("5300");
                }}
              >
                <Text
                  style={[
                    {
                      textAlign: "center",
                      fontSize: 14,
                      fontFamily:'roboto',
                      color: "white",
                    },
                  ]}
                >
                  1 year
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
  },
  header: {
    width: wp("100%"),
    height: hp("6%"),
    backgroundColor: "#FF1313",
    justifyContent: "center",
    paddingHorizontal: wp("5%"),
    position: "absolute",
    top: 0,
  },
  PickerView: {
    borderColor: "#FF1313",
    borderWidth: 1,
    height: 54,
    width: "70%",
    alignSelf: "center",
    alignContent: "center",
    marginTop: 54,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 18,
    flexDirection: "row",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  customText: {
    marginRight: 5,
  },
  Pickerr: {
    fontSize: 10,
    color: "white",
    height: 40,
    width: 40,
  },
  PickerInnerView: {
    height: "50%",
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
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
    width: wp("25%"),
    justifyContent: "center",
    alignItems: "center",
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
