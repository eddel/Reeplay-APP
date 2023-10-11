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
  StatusBar
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import RateCard from "./components/RateCrad";
import TapRating from "./components/TapRating";
import Button from "./components/Button";
import EpisodeCard from "./components/EpisodeCard";

export default function SeriesPreview({ navigation }) {
  const handleNavigation = () => {
    let fromEvents = false;
    let fromShows = false;
    let rotate = false;
    let fromSeries = true;
    navigation.navigate('NewsPlayer', { fromEvents, fromShows, rotate, fromSeries });
  }
  const [color,setColor]=useState(false)
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <ScrollView>
        <View
          style={{
            width: wp("100%"),
            alignItems: "center",
            marginBottom: hp("3%"),

          }}
        >
          {/* vedioWrapper */}
          <View style={styles.VedioWrapper}>
            <View style={styles.Vedio}>
              <Image
                source={require("../../assets/MOVIEART.png")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.CastIcon}>
                <Image source={require('../../assets/Vector99.png')}
                  style={{ height: '100%', width: '100%' }}
                  resizeMode='contain' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CrossIcon}>
                <Entypo name="cross" size={rf(12)} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          {/* vedioWrapper */}
          {/* Title */}
          <View style={styles.title}>
            <TouchableOpacity onPress={()=>setColor(!color)}>
              <MaterialCommunityIcons name="youtube-subscription" size={rf(16)} color={color?'red' : "#C4C4C4"} />
            </TouchableOpacity>
            <View style={{ flex: 0.9, alignItems: 'center' }}>
              <Text style={styles.titleFont1}>MUMMY SOLDIER</Text>
              <Text style={styles.titleFont2}>Action ~ Suspense ~ Tragic</Text>
            </View>

          </View>
          {/* Title */}
          {/* Cards components */}
          <View style={styles.CardsWrapper}>
            <RateCard icon title="375K+ VIEWS" rate="4.6" />
            <View style={styles.bar}></View>
            <RateCard txt title="PG" rate="12+" discription="Years Old" />
            <View style={styles.bar}></View>
            <RateCard
              txt
              title="COMMENTS"
              rate="98+"
              discription="Tap to Add"
            />
            <View style={styles.bar}></View>
            <RateCard txt title="DURATION" rate="1h : 7m" discription="2021" />
          </View>
          {/* Cards components*/}
          {/* Discription */}
          <View style={styles.Discription}>
            <Text style={styles.DiscriptionText1}>TV SERIES</Text>
            <Text style={styles.DiscriptionText2}>
              2 Sisters set out to Impress the World {"\n"} in a thrilling show
              of Bravery and Comedic Trickery.
              <Text style={styles.MoreTxt}> More</Text>
            </Text>
          </View>
          {/* Discription */}
          {/* Tap Ratings component*/}
          <TapRating button />
          {/* Tap Ratings components */}
          {/* Button component */}
          <View style={styles.ButtonRow}>
            <Button onPress={handleNavigation} />
          </View>
          {/* Button component */}
          {/* Episodes Heading */}
          <View style={styles.EpiWrapper}>
            <View style={styles.InnerEpi}>
              <Text style={styles.EpiTxt}>EPISODES</Text>
              <View style={styles.EpiBar}></View>
            </View>
          </View>
          {/* Episodes Heading */}
          <View style={styles.Seasons}>
            <Text style={styles.SeasonsTxt}>Season 1</Text>
            <TouchableOpacity>
              <Entypo name="chevron-down" size={rf(18)} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* Episode Cards */}
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          {/* Episode Cards */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  VedioWrapper: {
    width: wp("100%"),
    height: hp("27%"),
    backgroundColor: "#000000",
    justifyContent: "center",
  },
  Vedio: {
    width: "100%",
    height: "85%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  CrossIcon: {
    position: "absolute",
    right: 15,
    top: 15,
    width: hp("3%"),
    height: hp("3%"),
    borderRadius: 100,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: wp("100%"),
    height: hp("10%"),
    backgroundColor: "#000000",
    alignItems: "center",
    flexDirection: 'row',
    paddingHorizontal: wp('5%')
  },
  titleFont1: {
    fontSize: rf(16),
    color: "#E5E5E5",
    fontFamily: 'robotobold'
  },
  titleFont2: {
    fontSize: rf(12),
    fontWeight: "400",
    color: "#C4C4C4",
    fontFamily: 'roboto'

  },
  CardsWrapper: {
    width: wp("90%"),
    height: hp("12%"),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#C4C4C412",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bar: {
    width: 0.5,
    height: "40%",
    backgroundColor: "#C4C4C412",
  },
  Discription: {
    width: wp("100%"),
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
  DiscriptionText1: {
    fontSize: rf(9),
    color: "#fff",
    fontWeight: '400',
    fontFamily: 'roboto'
  },
  DiscriptionText2: {
    fontSize: rf(9),
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontFamily: 'roboto'

  },
  MoreTxt: {
    color: "#FFCC00",
    fontSize: rf(10),
    fontWeight: "400",
    fontFamily: 'roboto'
  },
  ButtonRow: {
    width: wp("100%"),
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  EpiWrapper: {
    width: wp("95%"),
    height: hp("7%"),
    borderTopWidth: 1,
    borderColor: "#C4C4C412",
  },
  EpiTxt: {
    fontSize: rf(10),
    color: "#fff",
    fontFamily: 'robotobold'
  },
  EpiBar: {
    width: "50%",
    height: "8%",
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  InnerEpi: {
    width: "25%",
    alignItems: "center",
    height: "60%",
    marginTop: 5,
    justifyContent: "space-evenly",
  },
  Seasons: {
    width: wp("90%"),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  SeasonsTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontWeight: "400",
    fontFamily: 'roboto'
  },
  CastIcon: {
    position: "absolute",
    right: wp('12%'),
    top: 6,
    width: 30,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  }
});
