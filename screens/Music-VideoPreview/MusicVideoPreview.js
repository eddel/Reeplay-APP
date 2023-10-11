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
import CastCard from "./components/CastCard";
import RelatedMovieCard from "./components/RelatedMovieCard";
export default function MusicVideoPreview({ navigation }) {
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
                source={require("../../assets/Music.png")}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.CastIcon}>
                <Image source={require('../../assets/Vector99.png')}
                  style={{ height: '100%', width: '100%' }}
                  resizeMode='contain' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CrossIcon}>
                <Entypo name="cross" size={rf(11)} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          {/* vedioWrapper */}
          {/* Title */}
          <View style={styles.title}>
            <TouchableOpacity onPress={()=>setColor(!color)}>
              <MaterialCommunityIcons name="youtube-subscription" size={rf(16)} color= {color?'red':  "#C4C4C4"} />
            </TouchableOpacity>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.titleFont1}>PERU</Text>
              <Text style={styles.titleFont2}>FireBoy X ED Sheeran</Text>
            </View>

            <TouchableOpacity style={styles.Btn}>
              <Text style={styles.BtnTxt}>FREE</Text>
            </TouchableOpacity>
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
              rate="298+"
              discription="Tap to Add"
            />
            <View style={styles.bar}></View>
            <RateCard txt title="DURATION" rate="4m" discription="2021" />
          </View>
          {/* Cards components*/}
          {/* Discription */}
          <View style={styles.Discription}>
            <Text style={styles.DiscriptionText1}>MUSIC VIDEO</Text>
            <Text style={styles.DiscriptionText2}>
              2 Sisters set out to Impress the World {"\n"} in a thrilling show
              of Bravery and Comedic Trickery.
              <Text style={styles.MoreTxt}> More</Text>
            </Text>
          </View>
          {/* Discription */}
          {/* Tap Ratings component*/}
          <TapRating Icon />
          {/* Tap Ratings components */}
          {/* Button component */}
          <View style={styles.ButtonRow}>
            <Button />
          </View>
          {/* Button component */}

          <View style={styles.RelatedMovies}>
            <Text style={styles.RelatedMoviesTxt}>Related Movies</Text>
          </View>
          <View style={styles.RelatedMoviesCards}>
            <RelatedMovieCard />
            <RelatedMovieCard />
            <RelatedMovieCard />
          </View>
          <View style={styles.RelatedMoviesCards}>
            <RelatedMovieCard />
            <RelatedMovieCard />
            <RelatedMovieCard />
          </View>
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
    height: hp("28%"),
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
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%')
  },
  titleFont1: {
    fontSize: rf(18),
    color: "#E5E5E5",
    fontFamily: 'robotobold'
  },
  titleFont2: {
    fontSize: rf(10),
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
    fontWeight: "400",
    fontFamily: 'roboto'
  },
  DiscriptionText2: {
    fontSize: rf(10),
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontFamily: 'roboto'
  },
  MoreTxt: {
    color: "#FFCC00",
    fontSize: rf(9),
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
  CastWrapper: {
    width: wp("90%"),
    height: hp("7%"),
    borderTopWidth: 1,
    borderColor: "grey",
  },
  CastTxt: {
    fontSize: rf(11),
    fontWeight: "700",
    color: "#fff",
  },
  CastBar: {
    width: "55%",
    height: "8%",
    backgroundColor: "#fff",
    borderRadius: 100,
  },
  InnerCast: {
    width: "20%",
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
    fontSize: rf(13),
    color: "#fff",
    fontWeight: "700",
  },
  Btn: {
    width: wp("11%"),
    height: 20,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#FFCC00",
    alignItems: "center",
    justifyContent: "center",
  },
  BtnTxt: {
    fontSize: rf(8),
    color: "#FFCC00",
    fontFamily: 'roboto',
    fontWeight: '400'
  },
  CastCards: {
    width: wp("90%"),
    height: hp("15%"),
    flexDirection: "row",
  },
  RelatedMovies: {
    width: wp("90%"),
    height: hp("6%"),
    justifyContent: "center",
  },
  RelatedMoviesTxt: {
    fontSize: rf(14),
    fontFamily: 'robotobold',
    color: "#fff",
  },
  RelatedMoviesCards: {
    width: wp("90%"),
    height: hp("20%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
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
