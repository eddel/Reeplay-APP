import React, { useEffect, useState } from "react";
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
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import DashboardCard from "./components/DashboardCard";
import SignOutBtn from "./components/SignOutBtn";
import CloseBtn from "./components/CloseBtn";

export default function Dashboard({ navigation, route }) {
  const isSkipped = route.params;
  console.log(isSkipped);
  const [SignOut, setSignOut] = useState();
  const [Watchlist, setWatchList] = useState();
  const [showStore, setShowStore] = useState();
  const handleStore = () => {
    setShowStore(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setWatchList(false);
    }, 3000);
  }, [Watchlist]);
  const description = ` Kindly go through a ${"\n"}licensed agent, who already has ${"\n"}a relationship with Reeplay.`;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={[styles.Wrapper, { height: isSkipped ? "50%" : "57%" }]}>
          <View style={styles.layer}>
            {/* Dashboardcards */}
            {isSkipped ? (
              <DashboardCard
                onclick={() => navigation.navigate("Login")}
                title="Sign In"
                photo={require("../../assets/Icons/Account.png")}
                ArrowIcon={
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                }
              />
            ) : (
              <DashboardCard
                onclick={() => navigation.navigate("DashboardAccount")}
                title="Account"
                photo={require("../../assets/Icons/Account.png")}
                ArrowIcon={
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                }
              />
            )}
            {isSkipped ? (
              <View style={{ opacity: 0.4 }}>
                <DashboardCard
                  title="Downloads"
                  photo={require("../../assets/Icons/download.png")}
                  ArrowIcon={
                    <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                  }
                />
              </View>
            ) : (
              <DashboardCard
                onclick={() => navigation.navigate("DashboardDownload")}
                title="Downloads"
                photo={require("../../assets/Icons/download.png")}
                ArrowIcon={
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                }
              />
            )}
            {isSkipped ? (
              <View style={{ opacity: 0.4 }}>
                <DashboardCard
                  title="Watchlist"
                  photo={require("../../assets/Icons/Watch.png")}
                  ArrowIcon={
                    <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                  }
                />
              </View>
            ) : (
              <DashboardCard
                onclick={() => navigation.navigate("DashboardWatchlist")}
                title="Watchlist"
                photo={require("../../assets/Icons/Watch.png")}
                ArrowIcon={
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                }
              />
            )}
            {isSkipped ? (
              <View style={{ opacity: 0.4 }}>
                <DashboardCard
                  title="Create Ad"
                  onclick={handleStore}
                  photo={require("../../assets/Icons/Createadd.png")}
                  ArrowIcon={
                    <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                  }
                />
              </View>
            ) : (
              <DashboardCard
                title="Create Ad"
                onclick={handleStore}
                photo={require("../../assets/Icons/Createadd.png")}
                ArrowIcon={
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                }
              />
            )}

            {isSkipped ? (
              <View style={{ opacity: 0.4 }}>
                <DashboardCard
                  title="Notifications"
                  photo={require("../../assets/Icons/Bell.png")}
                  ArrowIcon={
                    <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                  }
                />
              </View>
            ) : (
              <DashboardCard
                onclick={() => {
                  navigation.navigate("Notifications");
                }}
                title="Notifications"
                photo={require("../../assets/Icons/Bell.png")}
                ArrowIcon={
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                }
              />
            )}

            <DashboardCard
              onclick={() => navigation.navigate("Suggestions")}
              title="Suggestions"
              photo={require("../../assets/Icons/suggestion.png")}
              ArrowIcon={
                <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
              }
            />
            {!isSkipped ? (
              <DashboardCard
                onclick={() => {
                  navigation.navigate("Gift");
                }}
                title="Gift card"
                photo={require("../../assets/giftsent.png")}
                ArrowIcon={
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                }
              />
            ) : null}
            {isSkipped ? (
              <View style={{ opacity: 0.4 }}>
                <TouchableOpacity style={styles.Settings}>
                  <View
                    style={{
                      height: 18,
                      width: 18,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../../assets/Icons/Setting.png")}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Setting</Text>
                  </View>

                  <TouchableOpacity>
                    <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("DashboardSettings")}
                style={styles.Settings}
              >
                <View
                  style={{
                    height: 18,
                    width: 18,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/Icons/Setting.png")}
                    style={{ height: "100%", width: "100%" }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.title}>Setting</Text>
                </View>

                <TouchableOpacity>
                  <AntDesign name="right" size={rf(12)} color="#C4C4C4" />
                </TouchableOpacity>
              </TouchableOpacity>
            )}

            {/* Dashboardcards */}
          </View>
        </View>

        <SignOutBtn
          onclick={() => {
            if (isSkipped === true) {
              navigation.navigate("Register");
            } else {
              setSignOut(true);
            }
          }}
          isSkipped={isSkipped}
        />
        <CloseBtn
          onclick={() => {
            navigation.goBack();
          }}
        />
        <Image
          source={require("../../assets/logoN.png")}
          style={{ height: 60, width: 200 }}
        />
        <Text
          style={{
            color: "#C4C4C4",
            position: "absolute",
            bottom: 15,
            fontFamily: "roboto",
            fontSize: 11,
            fontWeight: "400",
          }}
        >
          Version 1.0
        </Text>

        {SignOut == true ? (
          <View style={styles.PopupClear}>
            <Image
              source={require("../../assets/popupLgo.png")}
              style={{ height: 65, width: 65, marginBottom: 20 }}
              resizeMode="contain"
            />

            <View style={styles.TextView}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "roboto",
                  fontWeight: "600",
                  color: "black",
                  margin: 15,
                  marginTop: 0,
                  textAlign: "center",
                }}
              >
                Are you sure you want to Logout?
              </Text>
            </View>
            <View
              style={[
                styles.closeButtontxt,
                {
                  height: 37,
                  width: 148,
                  borderRadius: 7,
                  marginTop: 28,
                  marginBottom: 10,
                },
              ]}
            >
              <TouchableOpacity onPress={() => setSignOut(false)}>
                <Text style={styles.BtnText}>No</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                setSignOut(false);
                navigation.navigate("Login");
              }}
              style={[
                styles.RegisterBtn,
                { height: 37, width: 148, borderRadius: 7, marginTop: 0 },
              ]}
            >
              <Text style={styles.BtnText}>Yes</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                position: "absolute",
                bottom: 10,
              }}
              onPress={() => setSignOut(false)}
            >
              Close
            </Text>
          </View>
        ) : null}
        {Watchlist == true ? (
          <View style={styles.PopupClear}>
            <Image
              source={require("../../assets/alert1.png")}
              style={{ height: 64, width: 85 }}
              resizeMode="contain"
            />

            <View style={styles.TextView}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "roboto",
                  fontWeight: "600",
                  color: "black",
                  margin: 15,
                  marginBottom: 0,
                  textAlign: "center",
                }}
              >
                Your watchlist is empty,
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "roboto",
                  fontWeight: "600",
                  color: "black",
                  textAlign: "center",
                }}
              >
                You haven't added any content to your watchlist yet.
              </Text>
            </View>
          </View>
        ) : null}
        {showStore == true ? (
          <View style={styles.PopupClear}>
            <Image
              source={require("../../assets/popupLgo.png")}
              style={{ height: 65, width: 65, marginBottom: 5 }}
              resizeMode="contain"
            />

            <Text
              style={{
                fontSize: 14,
                fontFamily: "roboto",
                fontWeight: "bold",
                color: "black",
                margin: 15,
                marginVertical: 5,
                textAlign: "center",
                width: "80%",
              }}
            >
              Sorry, you are not authorized to create Ads.
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "roboto",
                fontWeight: "600",
                color: "black",
                margin: 10,
                textAlign: "center",
              }}
            >
              {description}
            </Text>

            <View
              style={[
                styles.closeButtontxt,
                {
                  backgroundColor: "#FF1313",
                  marginTop: 20,
                  width: 148,
                  height: 37,
                  marginBottom: "10%",
                },
              ]}
            >
              <TouchableOpacity onPress={() => setShowStore(false)}>
                <Text style={[styles.BtnText, { fontSize: 18 }]}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",

    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  Wrapper: {
    width: wp("90%"),
    height: hp("100%"),
    borderRadius: 15,
    backgroundColor: "#C4C4C4",
    marginTop: hp("10%"),
  },
  layer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#1A1A1A",
    opacity: 0.8,
  },
  Settings: {
    width: wp("90%"),
    height: hp("7%"),
    borderColor: "#222",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  Logo: {
    height: hp("10%"),
    width: wp("20%"),
    justifyContent: "center",
    alignItems: "center",
  },
  TextView: {
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
  RegisterBtn: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FF1313",
    borderRadius: 15,
    marginVertical: hp("4%"),
    marginBottom: hp("2%"),
  },
  closeButtontxt: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#676571",
    borderRadius: 4,
  },
  BtnText: {
    fontFamily: "robotobold",
    fontSize: rf(15),
    color: "#fff",
  },
  closetext: {
    position: "absolute",
    bottom: 0,
    fontFamily: "roboto",
    fontWeight: "400",
    fontSize: rf(15),
    color: "#C4C4C4",
  },
  PopupClear: {
    height: 368,
    width: 253,
    backgroundColor: "white",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    zIndex: 100,
    bottom: "30%",
  },

  title: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#fff",
    marginLeft: 10,
    fontFamily: "roboto",
  },
});
