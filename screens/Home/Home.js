import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import ContinueWatching from "./components/ContinueWatching";
import TrendingNow from "./components/TrendingNow";
import Live from "./components/Live";
import BottomMenu from "../../components/BottomMenu";
import { BlurView } from "expo-blur";
import HomeMenuCard, { HomeMenuCardPop } from "../../components/homemenuCard";
import {
  dataCAROUSEL,
  dataComingSoon,
  dataLiveChanel,
  dataNewMusic,
  dataNewSkits,
  dataTop10,
  dataTrendingNow,
  infoIcon,
  playIcon,
  replayIcon,
  searchIcon,
} from "./components/images";
import HomeMenuCard2, {
  HomeMenuCard3,
  HomeMenuCard4,
} from "../../components/homemenuCard2";
import Generes from "./components/geners";
import Carousel from "react-native-reanimated-carousel";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export default function Home({ navigation, route }) {
  const isSkipped = route.params;
  console.log("is", isSkipped);
  const [showpop, setShowPop] = useState();
  const [imgActive, setimgActive] = useState(0);
  const [showblur, setShowblur] = useState();
  const [index, setIndex] = useState(0);
  const colors = [
    ["#000000", "#C841BF", "#7C328E", "#33094F", "#000000"],
    ["#000000", "#B3C5CF", "#E0E0DE", "#404241", "#000000"],
    ["#000000", "#CD0924", "#52060B", "#4C030A", "#000000"],
  ];
  const colors2 = [
    ["transparent", "transparent", "#33094F"],
    ["transparent", "transparent", "#404241"],
    ["transparent", "transparent", "#4C030A"],
  ];
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={false}/>
      <ScrollView>
        <View style={{ marginBottom: hp("8%") }}>
          <View style={[styles.Wrap]}>
            <ScrollView
              onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              style={styles.Wrap}
            >
              <LinearGradient
                colors={colors[index]}
                style={styles.background}
              />
              <Carousel
                loop
                style={{ marginTop: 20 }}
                width={WIDTH}
                height={HEIGHT / 1.7}
                pagingEnabled={true}
                mode="parallax"
                data={dataCAROUSEL}
                scrollAnimationDuration={200}
                onSnapToItem={(index) => {
                  console.log("current index:", index);
                  setIndex(index);
                }}
                renderItem={({ index, item }) => (
                  <View style={{ flex: 1 }}>
                    <ImageBackground
                      source={item.source}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 10,
                        marginTop: 40,
                        alignSelf: "center",
                        overflow: "hidden",
                      }}
                      resizeMode="cover"
                    >
                      <LinearGradient
                        colors={colors2[index]}
                        style={styles.background}
                      />
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "70%",
                          marginRight: 17,
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 14,
                            top: Platform.OS === "ios" ? 41 : 21,
                            fontFamily: "roboto",
                            alignSelf: "center",
                          }}
                        >
                          {item.series}
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 40,
                            top: Platform.OS === "ios" ? 48 : 28,
                            fontFamily: "robotobold",
                            alignSelf: "center",
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 14,
                            top: Platform.OS === "ios" ? 50 : 30,
                            fontFamily: "roboto",
                            alignSelf: "center",
                          }}
                        >
                          {item.genre}
                        </Text>

                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            // alignItems: "center",
                            // marginTop: 360,
                            //  marginRight: 17,
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => navigation.navigate(item.screen)}
                          >
                            <Image
                              source={require("../../assets/heroLbutton.png")}
                              resizeMode="cover"
                              style={{
                                height: 50,
                                width: 70,
                                //top: 2,
                                bottom: Platform.OS === "ios" ? -65 : -41,
                                alignSelf: "center",
                              }}
                            />
                          </TouchableOpacity>
                          <View style={{ margin: 1 }}></View>
                          <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} >
                            <Image
                              source={require("../../assets/heroRbutton.png")}
                              resizeMode="cover"
                              style={{
                                height: 50,
                                width: 145,
                                // top: 25,
                                bottom: Platform.OS === "ios" ? -65 : -41,
                                borderRadius: 0,
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                                alignSelf: "center",
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                )}
              />
            </ScrollView>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "red",
                    width: 25,
                    height: 5,
                    borderRadius: 10,
                    alignSelf: "center",
                    margin: 3,
                    opacity: 0.5,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "red",
                    width: 25,
                    height: 5,
                    borderRadius: 10,
                    alignSelf: "center",
                    margin: 3,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "red",
                    width: 25,
                    height: 5,
                    borderRadius: 10,
                    alignSelf: "center",
                    margin: 3,
                    opacity: 0.5,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "red",
                    width: 25,
                    height: 5,
                    borderRadius: 10,
                    alignSelf: "center",
                    margin: 3,
                    opacity: 0.5,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "red",
                    width: 25,
                    height: 5,
                    borderRadius: 10,
                    alignSelf: "center",
                    margin: 3,
                    opacity: 0.5,
                  }}
                />
              </View>
            </View>
          </View>

          {isSkipped ? (
            <>
              <View style={styles.ContnueBody}>
                <Text style={styles.ContinueText}>Continue Watching</Text>
              </View>

              <View style={styles.ContinueWrapper}>
                <ScrollView horizontal={true}>
                  <ContinueWatching
                    Image={require("../../assets/WatchingMovie.png")}
                    navigation={() => navigation.navigate("VideoScreen")}
                    popup={() => setShowblur(true)}
                    name="Swallow"
                    genre="Film"
                  />
                  <ContinueWatching
                    Image={require("../../assets/peru.png")}
                    navigation={() => navigation.navigate("VideoScreen")}
                    popup={() => setShowblur(true)}
                    location="PERU"
                    name="Fireboy x Edsheran"
                    genre="Music Video"
                  />
                  <ContinueWatching
                    Image={require("../../assets/bbn.png")}
                    navigation={() => navigation.navigate("VideoScreen")}
                    popup={() => setShowblur(true)}
                    location="SEASON 9"
                    name="Big Broda Naija"
                    genre="Live Tv Show"
                  />
                </ScrollView>
              </View>
            </>
          ) : (
            <>
              <HomeMenuCard
                ContnueBody={styles.ContnueBody}
                title="Popular on REEPLAY"
                ContinueText={styles.ContinueText}
                data={dataTrendingNow}
                picStyle={{
                  width: 95,
                  height: 162,
                  margin: 6,
                  left: 15,
                  borderRadius: 5,
                  overflow: "hidden",
            
                }}
              />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                      opacity: 0.5,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                      opacity: 0.5,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "red",
                      width: 10,
                      height: 10,
                      borderRadius: 10,
                      alignSelf: "center",
                      margin: 3,
                      opacity: 0.5,
                    }}
                  />
                </View>
              </View>
            </>
          )}
          <Generes title={"Genre"} ContinueText={styles.ContinueText} />
          <HomeMenuCard
            ContnueBody={styles.ContnueBody}
            title="Trending Now"
            ContinueText={styles.ContinueText}
            data={dataTrendingNow}
            picStyle={{
              width: 108,
              height: 162,
              margin: 6,
              left: 10,
              borderRadius: 5,
            }}
          />
          <HomeMenuCardPop
            ContnueBody={styles.ContnueBody}
            title="Top 10 in NIGERIA"
            ContinueText={styles.ContinueText}
            data={dataTop10}
            picStyle={{
              width: 100,
              height: 162,
              margin: 6,
              left: 10,
              borderRadius: 5,
              overflow: "hidden",
            }}
          />
          <HomeMenuCard3
            title={"New Music Videos"}
            ContinueText={styles.ContinueText}
            data={dataNewMusic}
            picStyle={{
              width: 140,
              height: 131,
              margin: 6,
              left: 10,
              borderRadius: 5,
              
            }}
          />
          <HomeMenuCard4
            title={"New Skits"}
            ContinueText={styles.ContinueText}
            data={dataNewSkits}
            picStyle={{
              width: 167,
              height: 131,
              margin: 6,
              left: 10,
              borderRadius: 5,
             
            }}
          />
          <HomeMenuCard2
            title={"Live Channel"}
            ContinueText={styles.ContinueText}
            data={dataLiveChanel}
            picStyle={{
              width: 167,
              height: 131,
              margin: 6,
              left: 10,
              borderRadius: 5,
               
            }}
          />
          <HomeMenuCard
            ContnueBody={styles.ContnueBody}
            title="Comming Soon"
            ContinueText={styles.ContinueText}
            data={dataComingSoon}
            picStyle={{
              width: 108,
              height: 162,
              margin: 6,
              left: 10,
              borderRadius: 5,
              
            }}
          />
        </View>
        {/* <View style={styles.WrapDot}>
          <View style={imgActive == 0 ? styles.dotActive : styles.dot}></View>
          <View style={imgActive == 1 ? styles.dotActive : styles.dot}></View>
          <View style={imgActive == 2 ? styles.dotActive : styles.dot}></View>
          <View style={imgActive == 3 ? styles.dotActive : styles.dot}></View>
          <View style={imgActive == 4 ? styles.dotActive : styles.dot}></View>
        </View> */}
      </ScrollView>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Dashboard", isSkipped)}
        style={{
          position: "absolute",
          top: 45,
          left: 10,
        }}
      >
        <Ionicons name="menu" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        style={{
          position: "absolute",
          top: 46,
          right: 15,
        }}
      >
        <Image
          source={searchIcon}
          style={{ width: 27.5, height: 27.5 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Image
        source={replayIcon}
        style={{
          width: 110,
          height: 90,
          position: "absolute",
          top: 20,
          alignSelf: "center",
        }}
        resizeMode="contain"
      /> */}
      <BlurView
        intensity={10}
        tint="default"
        
        style={{ padding: 40, position: "absolute", top: 0, right: 0, left: 0 }}
      >
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Dashboard", isSkipped)}
            style={{
              position: "absolute",
              top: -10,
              left: -20,
            }}
          >
            <Ionicons name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={{
              position: "absolute",
              top: -10,
              right: -15,
            }}
          >
            <Image
              source={searchIcon}
              style={{ width: 27.5, height: 27.5 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={replayIcon}
            style={{
              width: 110,
              height: 55,
              position: "absolute",
              top: -20,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />
        </View>
      </BlurView>
      <BottomMenu
        homeimage={require("../../assets/HomeRed.png")}
        liveimage={require("../../assets/LiveWhite.png")}
        upimage={require("../../assets/UpcomingWhite.png")}
        libimage={require("../../assets/lib.png")}
        textcolor="#FF1313"
        livetextcolor="#fff"
        LibraryText="#fff"
        UpcomngText="#fff"
        Searchcolor="#fff"
        navigation={navigation}
      />
      {showpop == true ? (
        <View style={styles.PopupClear}>
          <Image
            source={require("../../assets/popupLgo.png")}
            style={{ height: 100, width: 90, marginTop: 10 }}
            resizeMode="contain"
          />

          <View style={styles.popupTextView}>
            <Text style={styles.Text1}>You don’t have an active </Text>
            <Text style={styles.Text1}>subscription </Text>
            <Text style={styles.Text2}>TO WATCH PREMIUM</Text>
            <Text style={[styles.Text1, { fontWeight: "400" }]}>
              This is a premium content,{" "}
            </Text>
            <Text style={[styles.Text1, { fontWeight: "400" }]}>
              you must Subscribe to watch.{" "}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("TopupSummary")}
            style={{
              height: 45,
              width: 174,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: "#FF1313",
              borderRadius: 4,
              marginVertical: 15,
            }}
          >
            <Text style={styles.BtnText}>Subscribe</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowPop(false)}>
            <Text style={styles.closetext}>Close</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {showblur == true ? (
        <BlurView intensity={120} tint="dark" style={styles.BlurPopUp}>
          <TouchableOpacity style={styles.BottomBorder}>
            <Text style={styles.TextInfo}>Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BottomBorder}>
            <Text style={styles.TextInfo}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BottomBorder}>
            <Text style={styles.TextInfo}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowblur(false)}
            style={[styles.BottomBorder, { borderBottomWidth: 0 }]}
          >
            <Text style={[styles.TextInfo, { color: "#FF1313" }]}>Close</Text>
          </TouchableOpacity>
        </BlurView>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000000",
    //backgroundColor:'#fff'
  },

  Wrap: {
    width: WIDTH,
    height: HEIGHT / 1.6,
  },
  WrapDot: {
    position: "absolute",
    top: hp("50%"),
    left: wp("32.5%"),
    flexDirection: "row",
    alignItems: "center",
  },
  dotActive: {
    height: 5,
    width: 20,
    backgroundColor: "#FF1313",
    margin: 3,
    borderRadius: 10,
  },
  dot: {
    height: 5,
    width: 20,
    backgroundColor: "#7D0909",
    margin: 3,
    borderRadius: 10,
  },
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 500,
    flexGrow: 1,
  },
  FlimText: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "roboto",
  },
  FlimTitle: {
    fontSize: rf(17),
    fontFamily: "robotobold",
    color: "#fff",
    textAlign: "center",
  },
  PlayBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  WatchText: {
    fontSize: rf(9),
    color: "#C4C4C4",
    fontFamily: "roboto",
  },
  PlayBtn: {
    height: hp("6%"),
    width: wp("40%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF1313",
    borderRadius: 15,
    flexDirection: "row",
  },
  PlayText: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#fff",
  },
  ContinueText: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#fff",
  },
  ContnueBody: {
    height: hp("6%"),
    paddingHorizontal: wp("5%"),
    justifyContent: "center",
  },
  ContinueWrapper: {
    flexDirection: "row",
    paddingHorizontal: wp("3%"),
  },
  PopupPremium: {
    height: hp("60%"),
    width: wp("90%"),
    backgroundColor: "#000000",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 15,
    bottom: hp("20%"),
    alignItems: "center",
    padding: 10,
    zIndex: 999,
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
    fontSize: rf(14),
    color: "#E5E5E5",
    fontWeight: "bold",
    textAlign: "center",
  },
  Text2: {
    fontFamily: "robotobold",
    fontSize: rf(17),
    color: "#E5E5E5",
    textAlign: "center",
    marginVertical: 20,
  },
  TextView: {
    marginTop: hp("3%"),
    alignSelf: "center",
    justifyContent: "space-between",
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
    fontSize: rf(12),
    color: "#fff",
  },
  closetext: {
    fontFamily: "roboto",
    fontWeight: "400",
    fontSize: rf(17),
    color: "black",
  },
  BlurPopUp: {
    height: hp("25%"),
    width: wp("100%"),
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  BottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C41A",
    width: "90%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  TextInfo: {
    color: "#C4C4C4",
    fontSize: rf(12),
    fontFamily: "roboto",
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
  popupTextView: {
    marginTop: 10,
    alignSelf: "center",
  },
  Text1: {
    fontFamily: "roboto",
    fontSize: rf(14),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  Text2: {
    fontFamily: "robotobold",
    fontSize: rf(17),
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  BtnText: {
    fontFamily: "robotobold",
    fontSize: 15,
    color: "#fff",
  },
});
