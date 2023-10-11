import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Header from "../../components/Header/Header";
import BillingCard from "./components/BillingCard";
import CancelMembership from "./components/CancelMembership";
import Profile from "./components/Profile";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native";
export default function DashboardAccountActive({ navigation }) {
  const [Topup, setTopup] = useState(false);

  const renderModal = () => {
    return (
      <Modal
        isVisible={Topup}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        backdropOpacity={0}
        backdropColor="black"
        onBackdropPress={() => setTopup(false)}
        onBackButtonPress={() => setTopup(false)}
        style={styles.modalCont}
      >
        {/* <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
       
        </BlurView> */}
        {/* <View style={{backgroundColor:"white",height:'50%'}}>

        </View> */}

        {/* <Text style={styles.InnerEmailTxt}>Reeplayapp@gmail.com</Text> */}
        <View style={styles.PopupPremium}>
          <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                alignItems: "center",
                height: 60,
                marginBottom: 6,
              }}
            >
              <AntDesign
                name="creditcard"
                size={24}
                color="#fff"
                style={{ height: 25, width: 35, marginLeft: 20 }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TopupSummary");
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
                  VISA|MASTERCARD|VERVE
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={rf(12)}
                color="#fff"
                style={{ marginRight: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                alignItems: "center",
                height: 60,
                marginBottom: 6,
              }}
            >
              <Image
                source={require("../../assets/applepay.png")}
                style={{ height: 18, width: 50, marginLeft: 15 }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TopupSummary");
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
                  APPLE PAY
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={rf(12)}
                color="#fff"
                style={{ marginRight: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                alignItems: "center",
                height: 60,
                marginBottom: 6,
              }}
            >
              <Image
                source={require("../../assets/paypal.png")}
                style={{ height: 18, width: 18, marginLeft: 20 }}
              />
              <TouchableOpacity
                style={[{ alignSelf: "center" }]}
                onPress={() => {
                  navigation.navigate("TopupSummary");
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
                  PAY PAL
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={rf(12)}
                color="#fff"
                style={{ marginRight: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                alignItems: "center",
                height: 60,
                marginBottom: 6,
              }}
            >
              <Image
                source={require("../../assets/bank.png")}
                style={{ height: 22, width: 22, marginLeft: 20 }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TopupSummary");
                }}
              >
                <Text
                  style={[
                    {
                      textAlign: "left",
                      fontSize: 14,
                      fontWeight: "500",
                      color: "white",
                      fontFamily:'roboto'
                    },
                  ]}
                >
                  USSD | BANK TRANSFER
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={rf(12)}
                color="#fff"
                style={{ marginRight: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                alignItems: "center",
                height: 60,
                marginBottom: 6,
              }}
            >
              <Image
                source={require("../../assets/crypto.png")}
                style={{ height: 20, width: 21, marginLeft: 20 }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("TopupSummary");
                }}
              >
                <Text
                  style={[
                    {
                      fontSize: 14,
                      fontWeight: "500",
                      color: "white",
                      textAlign: "left",
                      fontFamily:'roboto'
                    },
                  ]}
                >
                  CRYPTO
                </Text>
              </TouchableOpacity>
              <AntDesign
                name="right"
                size={rf(12)}
                color="#fff"
                style={{ marginRight: 10 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginHorizontal: 2,
                backgroundColor: "#00000040",
                alignItems: "center",
                height: 60,
                marginBottom: 6,
              }}
            >
              <TouchableOpacity onPress={() => setTopup(false)}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: "500",
                    color: "#FF1313",
                    fontFamily:'roboto'
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      </Modal>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <View style={{ alignItems: "center" }}>
          <Profile />
          <View style={styles.Membership}>
            <Text style={styles.MembershipFont}>Membership</Text>
          </View>
          {/* Email Wrapper */}
          <View style={styles.EmailWarrper}>
            <View style={styles.InnerEmail}>
              <Text style={styles.InnerEmailTxt}>Reeplayapp@gmail.com</Text>
              <TouchableOpacity>
                <Text style={styles.ChangeEmailTxt}>Change Email</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Email Wrapper */}
          {/* Email Wrapper */}
          <View style={styles.PasswordWarrper}>
            <View style={styles.InnerPassword}>
              <Text style={styles.InnerpasswordTxt}>Password: ***********</Text>
            </View>
            <View style={styles.InnerPassword}>
              <Text style={styles.InnerpasswordTxt}>REEPLAY PIN: ****</Text>
              <TouchableOpacity>
                <Text style={styles.EditTxt}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Email Wrapper */}
          <View style={styles.Phone}>
            <Text style={styles.PhoneTxt}>Phone: 070123456789</Text>
            <TouchableOpacity>
              <Text style={styles.PhoneEditTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
          {/* Billing card*/}
          <BillingCard navigation={() => setTopup(true)} />
          <CancelMembership />
          {renderModal()}
          {/* Billing card*/}
          <View
            style={{
              height: hp("12%"),
              width: wp("50%"),
              alignSelf: "center",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: "#C4C4C4",
                position: "absolute",
                bottom: 15,
                fontFamily: "roboto",
                fontSize: 11,
                fontWeight: "400",
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              Version 1.0
            </Text>
          </View>
        </View>
      </View>
      <SafeAreaView
        style={{
          backgroundColor: "red",
          // flex: 1,
          // borderWidth: 3,
          // borderColor: "red",
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: "black",
  },
  CloseText: {
    fontFamily: "roboto",
    fontSize: rf(12),
    color: "red",
    fontWeight: "400",
  },
  blurContainer: {
    height: hp("63%"),
    width: wp("100%"),
    backgroundColor: "transparent",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-end",
  },

  header: {
    width: wp("100%"),
    height: hp("6%"),
    backgroundColor: "#FF1313",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  headertxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily: "roboto",
  },
  Membership: {
    width: wp("90%"),
  },
  MembershipFont: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#fff",
  },
  EmailWarrper: {
    width: wp("100%"),
    height: hp("6%"),
    alignItems: "flex-end",
  },
  PopupPremium: {
    height: hp("55%"),
    width: "100%",
    backgroundColor: "#353333CC",
    borderRadius: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  modalCont: {
    width: "100%",
    marginLeft: 0,
    marginBottom: 0,
    justifyContent: "flex-end",
    height: hp(100),
  },
  InnerEmail: {
    width: "95%",
    height: "100%",
    borderBottomWidth: 1,
    borderColor: "#00000040",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InnerEmailTxt: {
    fontSize: rf(12),
    color: "#929196",
    fontFamily: "roboto",
    fontWeight: "400",
  },
  ChangeEmailTxt: {
    fontSize: rf(12),
    color: "#fff",
    marginRight: wp("4%"),
    fontFamily: "roboto",
    fontWeight: "400",
  },
  PasswordWarrper: {
    width: wp("100%"),
    height: hp("12%"),
    alignItems: "flex-end",
  },
  InnerPassword: {
    height: "70%",
    width: "95%",
    borderBottomWidth: 1,
    borderColor: "#00000040",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InnerpasswordTxt: {
    fontSize: rf(12),
    color: "#C4C4C4",
    fontFamily: "roboto",
    fontWeight: "400",
  },
  EditTxt: {
    fontSize: rf(12),
    color: "#fff",
    marginRight: wp("5%"),
    fontFamily: "roboto",
    fontWeight: "400",
  },
  Phone: {
    width: wp("90%"),
    height: hp("6%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  PhoneTxt: {
    fontSize: rf(12),
    fontWeight: "400",
    color: "#C4C4C4",
    fontFamily: "roboto",
  },
  PhoneEditTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily: "roboto",
  },
  CloseBtn: {
    height: hp("5%"),
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
