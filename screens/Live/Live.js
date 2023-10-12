import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HeadingBar from "./components/HeadingBar";
import TVCNews from "./components/TVCNews";
import Events from "./components/Events";
import Show from "./components/Show";
import BottomMenu from "../../components/BottomMenu";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import {
  dataCAROUSEL,
  dataLiveCarousel,
  dataLiveChanel,
  dataTrendingNow,
  infoIcon,
  playIcon,
  searchIcon,
} from "../Home/components/images";
import Carousel from "react-native-reanimated-carousel";
import Podcasts from "./components/Podcasts";
import { replayIcon } from "../Home/components/images";
import LiveCat from "../../components/liveCategories";
import HomeMenuCard2 from "../../components/homemenuCard2";
import HomeMenuCard from "../../components/homemenuCard";
import LiveCard from "../../components/liveCard";
import LiveChannels from "../../components/channels";
import LiveEvents from "../../components/liveEvents";
import { BlurView } from "expo-blur";
import Sports from "../../components/sports";
import TVShows from "../TVShows/TVShows";
import TVC from "../Channels/components/TVCNewsText";
import TVShow from "../../components/tvShows";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
export default function Live({ navigation, route }) {
  const [selectedCategory, setselectedCategory] = useState("All");
  let rotate = false;
  let fromEvents = false;
  let fromShows = false;
  const [SignOut, setSignOut] = useState();
  const [imgActive, setimgActive] = useState(0);
  const [channelActive, setchannelActive] = useState(false);
  const [All, setAll] = useState(true);
  const [Eventsbtn, setEventsbtn] = useState(false);
  const [Tvshow, setTvshow] = useState(false);
  const [sports, setSports] = useState(false);
  const [podcasts, setpodcasts] = useState(false);
  let fromMovie = false;
  let id = 0;
  const handleBTN = (id) => {
    console.log(id);
    if (id == 6) {
      setpodcasts(true);
      setSports(false);
      setTvshow(false);
      setEventsbtn(false);
      setAll(false);
      setchannelActive(false);
    } else if (id == 1) {
      setpodcasts(false);
      setSports(false);
      setTvshow(false);
      setEventsbtn(false);
      setAll(true);
      setchannelActive(false);
    } else if (id == 2) {
      setpodcasts(false);
      setSports(false);
      setTvshow(false);
      setEventsbtn(false);
      setAll(false);
      setchannelActive(true);
    } else if (id == 5) {
      setpodcasts(false);
      setSports(true);
      setTvshow(false);
      setEventsbtn(false);
      setAll(false);
      setchannelActive(false);
    } else if (id == 3) {
      setpodcasts(false);
      setSports(false);
      setTvshow(false);
      setEventsbtn(true);
      setAll(false);
      setchannelActive(false);
    } else if (id == 4) {
      setpodcasts(false);
      setSports(false);
      setTvshow(true);
      setEventsbtn(false);
      setAll(false);
      setchannelActive(false);
    }
  };
  const [showpop, setShowPop] = useState();

  // const [orientationIsLandscape, setOrientation] = useState()
  // async function changeScreenOrientation() {

  //     if (orientationIsLandscape == true) {
  //         ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  //     }
  //     else if (orientationIsLandscape == false) {
  //         ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
  //     }
  // }
  // useEffect(() => {
  //     changeScreenOrientation();
  // }, [rotation])
  const liveContent = `IYANYA ${"\n"} UK TOUR `;
  const tvShowContent = `DMW NAIJA  ${"\n"} SINGS`;
  const slideTwo = `DAVIDO ${"\n"} LIVE `;
  const handletouch = () => {
    // setOrientation(!orientationIsLandscape)
    rotate = true;
    fromEvents = false;
    fromShows = false;
    navigation.navigate("NewsPlayer", { rotate, fromEvents, fromShows });
    // changeScreenOrientation()
  };
  const handlePress = () => {
    // setOrienttion(!orientationIsLandscape)
    fromEvents = true;
    fromShows = false;
    rotate = false;
    navigation.navigate("NewsPlayer", { fromEvents, rotate, fromShows });
    // changeScreenOrientation()s
  };
  const handleNavigation = () => {
    // setOrienttion(!orientationIsLandscape)
    fromShows = true;
    fromEvents = false;
    rotate = false;
    navigation.navigate("NewsPlayer", { fromEvents, rotate, fromShows });
    // changeScreenOrientation()
  };
  const handleExclusive = () => {
    setSignOut(true);
  };
  onchange = (nativeEvent) => {
    console.log("onchange", nativeEvent);
    if (nativeEvent) {
      console.log("nativeEvent", nativeEvent);
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      console.log("slide", slide);
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  const handlePremium = () => {
    setShowPop(true);
  };
  const content = ` This is an Exclusive content,${"\n"}you must purchase to watch.`;
  const colors2 = [
    ["transparent", "transparent", "#000000", "#000000"],
    ["transparent", "transparent", "#000000", "#000000"],
    ["transparent", "transparent", "#000000", "#000000"],
  ];
  const [indx,setIndex]=useState(0)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        <Carousel
          loop
          style={{ marginTop: 50 }}
          width={WIDTH}
          height={HEIGHT / 1.8}
          pagingEnabled={true}
          mode="parallax"
          data={dataLiveCarousel}
          scrollAnimationDuration={500}
          onSnapToItem={(index) => setIndex(index)}
          renderItem={({ index, item }) => (
            <ImageBackground
              source={item.source}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 10,

                alignSelf: "center",
                overflow: "hidden",
              }}
              resizeMode="cover"
            >
               <LinearGradient
                colors={colors2[indx]}
                style={styles.background}
              />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "60%",
                  marginRight: 17,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 14,
                     top: Platform.OS === "ios" ? 48 : 35,
                    fontFamily: "roboto",
                    alignSelf: "center",
                  }}
                >
                  {item.genre}
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 30,
                    top: Platform.OS === "ios" ? 50 : 35,
                    fontFamily: "robotobold",
                    alignSelf: "center",
                  }}
                >
                  {item.title}
                </Text>

                <Text
                  style={{
                    color: "#fff",
                    fontSize: 30,
                    top: Platform.OS === "ios" ? 50 : 30,
                    fontFamily: "robotobold",
                    alignSelf: "center",
                  }}
                >
                  {item.subtitle}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                  >
                    <Image
                      source={item.infolive}
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                  >
                    <Image
                      source={require("../../assets/watchlive.png")}
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
          )}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: -20,
          }}
        >
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
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Dashboard")}
          style={{ position: "absolute", top: 45, left: 10 }}
        >
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Image
          source={replayIcon}
          style={{
            height: 60,
            width: 90,
            alignSelf: "center",
            position: "absolute",
            top: 30,
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Search")}
          style={{
            position: "absolute",
            top: 45,
            right: 10,
          }}
        >
          <Image
            source={searchIcon}
            style={{ width: 25, height: 25 }}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
        <LiveCat
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        {selectedCategory === "All" ? (
          <>
            <HomeMenuCard2
              title={"Channels"}
              ContinueText={styles.ContinueText}
              data={dataLiveChanel}
              picStyle={{ width: 160, height: 124, margin: 6, borderRadius: 5 }}
            />

            <LiveCard
              ContnueBody={styles.ContnueBody}
              title="Events"
              ContinueText={styles.ContinueText}
              data={dataTrendingNow}
            />
            <LiveCard
              ContnueBody={styles.ContnueBody}
              title="TV Shows"
              ContinueText={styles.ContinueText}
              data={dataTrendingNow}
            />
            <LiveCard
              ContnueBody={styles.ContnueBody}
              title="Podcasts"
              ContinueText={styles.ContinueText}
              data={dataTrendingNow}
            />
            <View style={{marginBottom:80}} />
          </>
        ) : selectedCategory === "Channels" ? (
          <LiveChannels />
        ) : selectedCategory === "Events" ? (
          <LiveEvents />
        ) : selectedCategory === "TV Shows" ? <TVShow/> : selectedCategory ===
          "Sports" ? <Sports/> : selectedCategory === "Podcast" ? (
          <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:"20%"}}>
            <Text style={{fontFamily:'roboto',color:'#757474'}}>No content available now,</Text>
            <Text style={{fontFamily:'roboto',color:'#757474'}}>Please check back later</Text>
          </View>
        ) : null}
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 20,
            marginBottom: 3,
          }}
        >
          <View
            style={{
              borderBottomColor: "#FF1F25",
              borderWidth: All == true ? 1 : 0,
              width: 30,
              height: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleBTN((id = 1));
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "roboto",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                All
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "#FF1F25",
              borderWidth: channelActive ? 1 : 0,
              height: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleBTN((id = 2));
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "roboto",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Channels
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "#FF1F25",
              borderWidth: Eventsbtn ? 1 : 0,
              height: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleBTN((id = 3));
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "roboto",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Events
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "#FF1F25",
              borderWidth: Tvshow ? 1 : 0,
              height: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleBTN((id = 4));
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "roboto",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                TV Shows
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: "#FF1F25",
              borderWidth: sports ? 1 : 0,
              height: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleBTN((id = 5));
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "roboto",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Sports
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderBottomColor: "#FF1F25",
              borderWidth: podcasts ? 1 : 0,
              height: 25,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                handleBTN((id = 6));
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "white",
                  fontFamily: "roboto",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Podcast
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
        {/* <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 3,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "700",
              fontFamily: "roboto",
            }}
          >
            Channels{" "}
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "#FF1313",
              fontWeight: "400",
              fontFamily: "roboto",
            }}
          >
            SEE All{" "}
          </Text>
        </View> */}
        {/* <View>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              alignContent: "center",
              marginHorizontal: 10,
              marginRight: 10,
              alignItems: "center",
            }}
          >
            <ScrollView horizontal>
              <View style={{ alignSelf: "center" }}>
                <Image
                  source={require("../../assets/bbcNew.png")}
                  style={{
                    height: 100,
                    width: 176,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Image
                  source={require("../../assets/traise.png")}
                  style={{
                    height: 100,
                    width: 176,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                    marginHorizontal: 7,
                  }}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Image
                  source={require("../../assets/worldchannel.png")}
                  style={{
                    height: 100,
                    width: 176,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Image
                  source={require("../../assets/aiesnews.png")}
                  style={{
                    height: 100,
                    width: 176,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                    marginHorizontal: 7,
                  }}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Image
                  source={require("../../assets/mtv.png")}
                  style={{
                    height: 100,
                    width: 176,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                  }}
                />
              </View>
              <View style={{ alignSelf: "center" }}>
                <Image
                  source={require("../../assets/SNews.png")}
                  style={{
                    height: 100,
                    width: 176,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignSelf: "center",
                    marginLeft: 7,
                  }}
                />
              </View>
            </ScrollView>
          </View>
        </View> */}
        {/* <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 3,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "700",
              fontFamily: "roboto",
            }}
          >
            Events{" "}
          </Text>
        </View> */}
        {/* <View style={styles.NewsWrapper}>
          <ScrollView horizontal={true}>
            <Events
              Image={require("../../assets/event3.png")}
              onpress={handlePremium}
              Title="ABUJA, NIGERIA"
              Des="AY LIVE"
              Pg="16+"
              Live="LIVE"
              Premium="PREMIUM"
            />
            <Events
              onpress={handleExclusive}
              Image={require("../../assets/eventsLondon.png")}
              Title="LONDON, UK"
              Des="DAVIDO LIVE"
              Pg="18+"
              Start="Starts In "
              ExclusiveTime=" 01:20:01"
              Exclusive="EXCLUSIVE"
            />
            <Events
              Image={require("../../assets/events1.png")}
              onpress={handlePress}
              Title="LAGOS, NIGERIA"
              Des={`BEAUTY WEDS ${"\n"}JOHN`}
              Pg="16+"
              Start="|Starts In "
              FreeTime=" 01:20:01"
              Free="FREE"
            />
          </ScrollView>
        </View> */}
        {/* <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 3,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "700",
              fontFamily: "roboto",
            }}
          >
            TV Shows{" "}
          </Text>
        </View> */}
        {/* <View style={styles.NewsWrapper}>
          <ScrollView horizontal={true}>
            <Show
              onpress={handleExclusive}
              Image={require("../../assets/season8.png")}
              Title="SEASON 8"
              Eighteen="16+"
              Des="NIGERIAN IDOL"
              Live="Live"
              Exclusive="EXCLUSIVE"
            />
            <Show
              onpress={handleNavigation}
              Image={require("../../assets/season9.png")}
              Title="Season 9"
              Eighteen="18+"
              Des="NIGERIAN IDOL"
              Live="Live"
              Free="FREE"
            />
            <Show
              onpress={handlePremium}
              Image={require("../../assets/tvshow31.png")}
              Title="Season 9"
              Des="NIGERIAN IDOL"
              Eighteen="18+"
              Start="Starts In"
              ExclusiveTime="1:00:00"
              Premium="PREMIUM"
            />
          </ScrollView>
        </View> */}
        {/* <View
          style={{
            marginHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 3,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "white",
              fontWeight: "700",
              fontFamily: "roboto",
            }}
          >
            Podcasts{" "}
          </Text>
        </View> */}
        {/* <View style={styles.NewsWrapper}>
          <ScrollView horizontal={true}>
            <Podcasts
              onpress={handlePremium}
              Image={require("../../assets/losetalk.png")}
              Title="THE BEST GIST"
              Eighteen="16+"
              Des="LOOSE TALK"
              Live="Live"
              Premium="PREMIUM"
            />
            <Podcasts
              onpress={handleNavigation}
              Image={require("../../assets/thehonest.png")}
              Title="FREE TALK ZONE"
              Eighteen="16+"
              Des={`THE HONEST ${"\n"} BUNCH`}
              Live="Live"
              Free="FREE"
            />
            <Podcasts
              onpress={handleExclusive}
              Image={require("../../assets/premiumpodcast.png")}
              Title="PREMIUM PODCAST"
              Des="WITH CHUDE"
              Eighteen="16+"
              Live="Live"
              Exclusive="EXCLUSIVE"
            />
          </ScrollView>
        </View> */}
      </ScrollView>
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
        homeimage={require("../../assets/HomwWhite.png")}
        searchimage={require("../../assets/SearchWhite.png")}
        liveimage={require("../../assets/LiveRed.png")}
        upimage={require("../../assets/UpcomingWhite.png")}
        libimage={require("../../assets/lib.png")}
        textcolor="#fff"
        livetextcolor="#FF1313"
        LibraryText="#fff"
        UpcomngText="#fff"
        Searchcolor="#fff"
        navigation={navigation}
      />
      {showpop == true ? (
        <View style={styles.PopupClear}>
          <Image
            source={require("../../assets/popupLgo.png")}
            style={{ height: 65, width: 65, marginTop: 10 }}
            resizeMode="contain"
          />

          <View style={styles.popupTextView}>
            <Text style={[styles.Text1, { fontWeight: "bold" }]}>
              You don’t have an active{" "}
            </Text>
            <Text style={[styles.Text1, { fontWeight: "bold" }]}>
              Subscription
            </Text>
            <Text style={styles.Text2}>TO WATCH PREMIUM</Text>
            <Text style={styles.Text1}>This is a premium content,</Text>
            <Text style={styles.Text1}>you must Subscribe to watch.</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("TopupSummary")}
            style={{
              height: 40,
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
      {SignOut == true ? (
        <View style={styles.PopupClear}>
          <Image
            source={require("../../assets/popupLgo.png")}
            style={{ height: 65, width: 65 }}
            resizeMode="contain"
          />

          <View style={styles.popTextView}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "roboto",
                fontWeight: "700",
                color: "black",
                margin: 10,
                marginTop: 27,
                textAlign: "center",
              }}
            >
              Sorry, This content is not free.
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "roboto",
                fontWeight: "600",
                color: "black",
                margin: 3,
                textAlign: "center",
                marginBottom: 1,
              }}
            >
              {content}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSignOut(false);
              fromMovie = true;
              navigation.navigate("FromMovie", fromMovie);
            }}
            style={[
              styles.RegisterBtn,
              { height: 37, width: 148, borderRadius: 7 },
            ]}
          >
            <Text style={styles.BtnText}>₦300</Text>
          </TouchableOpacity>
          <View
            style={[
              styles.closeButtontxt,
              { height: 37, width: 148, borderRadius: 7 },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setSignOut(false);
                handlePress();
              }}
            >
              <Text style={styles.BtnText}>Watch Trailer</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              setSignOut(false);
            }}
          >
            <Text
              style={[
                styles.BtnText,
                {
                  color: "black",
                  marginTop: 15,
                  fontWeight: "400",
                  fontSize: 15,
                  fontFamily: "roboto",
                },
              ]}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  BtnText: {
    fontFamily: "robotobold",
    fontSize: 15,
    color: "#fff",
  },
  PagerWrapper: {
    height: hp("20%"),
    width: wp("90%"),
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginHorizontal: 5,
  },
  ContinueText: {
    fontSize: rf(16),
    fontFamily: "robotobold",
    color: "#fff",
  },
  RegisterBtn: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#FF1313",
    borderRadius: 15,
    marginVertical: hp("2%"),
    marginBottom: hp("2%"),
  },
  closeButtontxt: {
    height: hp("7%"),
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#676571",
    borderRadius: 15,
  },
  PopupPremium: {
    height: 368,
    width: 253,
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
  popupTextView: {
    marginTop: 10,
    alignSelf: "center",
  },
  Text1: {
    fontFamily: "roboto",
    fontSize: rf(13),
    color: "black",
    fontWeight: "400",
    textAlign: "center",
  },
  Text2: {
    fontFamily: "robotobold",
    fontSize: rf(15),
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  ContnueBody: {
    marginLeft: 8,
    justifyContent: "center",
  },
  WrapDot: {
    // position: 'absolute',
    // top: hp('50%'),
    // left: wp('32.5%'),
    marginTop: 15,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dotActive: {
    height: 5,
    width: 24,
    backgroundColor: "#FF1313",
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
  dot: {
    height: 5,
    width: 24,
    backgroundColor: "#7D0909",
    margin: 3,
    borderRadius: 10,
  },
  NewsWrapper: {
    paddingLeft: wp("4%"),
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
  ProgressBar: {
    height: 5,
    width: wp("6%"),
    backgroundColor: "#FF1313",
    marginHorizontal: 4,
    borderRadius: 10,
  },
  ProgressBarWrapper: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 7,
  },
  TextView: {
    flexDirection: "row",
    alignSelf: "center",
    width: wp("80%"),
    height: hp("8%"),
    alignItems: "center",
  },
  popTextView: {
    alignSelf: "center",
    justifyContent: "center",
  },
  TVCText: {
    fontSize: rf(12),
    fontWeight: "400",
    color: "#C4C4C4",
    marginLeft: 15,
    fontFamily: "roboto",
  },
});
