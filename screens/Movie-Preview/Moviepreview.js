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
  TextInput,
  ScrollView,
  StatusBar
} from "react-native";
import { BlurView } from 'expo-blur';
import { Entypo } from "@expo/vector-icons";
import RateCard from "./components/RateCrad";
import TapRating from "./components/TapRating";
import Button from "./components/Button";
import CastCard from "./components/CastCard";
import RelatedMovieCard from "./components/RelatedMovieCard";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function MoviewPreview({ navigation }) {


  const [comentpopup, setComentpopup] = useState()
  const [Iconcolor, setIconcolor] = useState()
  const [Ratingpopup, setRatingPopup] = useState();
  const [SignOut, setSignOut] = useState();
  const [color,setColor]=useState(false)
  let fromMovie = false;
  const handlePress = () => {
    setSignOut(true)
  }
  const content = ` This is an Exclusive content,${'\n'}you must purchase to watch.`
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
                source={require("../../assets/MoviePic.png")}
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
              <MaterialCommunityIcons name="youtube-subscription" size={rf(16)} color={color?'red' :"#C4C4C4"} />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text style={styles.titleFont1}>NKOYO</Text>
              <Text style={styles.titleFont2}>Comedy ~ Exciting ~ Drama</Text>
            </View>

            <TouchableOpacity style={styles.Btn} >
              <Text style={styles.BtnTxt}>EXCLUSIVE</Text>
            </TouchableOpacity>
          </View>
          {/* Title */}
          {/* Cards components */}
          <View style={styles.CardsWrapper}>
            <RateCard icon title="375K+ VIEWS" rate="4.6" />
            <View style={styles.bar}></View>
            <RateCard txt title="PG" rate="12+" discription="Years Old" />
            <View style={styles.bar}></View>
            <RateCard navigation={() => setComentpopup(true)}
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
            <Text style={styles.DiscriptionText1}>FLIM</Text>
            <Text style={styles.DiscriptionText2}>
              2 Sisters set out to Impress the World {"\n"} in a thrilling show
              of Bravery and Comedic Trickery.

              <Text style={styles.MoreTxt}> More</Text>


            </Text>
          </View>
          {/* Discription */}
          {/* Tap Ratings component*/}

          <TouchableOpacity onPress={() => setRatingPopup(true)}>
            <TapRating Icon />
          </TouchableOpacity>
          {/* Tap Ratings components */}
          {/* Button component */}
          <View style={styles.ButtonRow}>
            <Button onPress={handlePress} />
          </View>
          {/* Button component */}
          {/* cast Heading */}
          <View style={styles.CastWrapper}>
            <View style={styles.InnerCast}>
              <Text style={styles.CastTxt}>CASTS</Text>
              <View style={styles.CastBar}></View>
            </View>
          </View>
          {/* Cast Heading */}
          {/* Cast Cards*/}
          <View style={styles.CastCards}>
            <CastCard navigation={() => navigation.navigate('ActorProfile')}
              name="Richard Moffat"
              img={require("../../assets/Cast1.png")}
            />
            <CastCard
              name="Rita Donimic"
              img={require("../../assets/Cast2.png")}
            />
            <CastCard
              name="Mike Ezuronye"
              img={require("../../assets/Cast3.png")}
            />
            <CastCard
              name="Gevivieve Nnaji"
              img={require("../../assets/Cast4.png")}
            />
            <CastCard
              name="Eddles Bette"
              img={require("../../assets/Cast1.png")}
            />
          </View>
          {/* cast Card */}
          <View style={styles.RelatedMovies}>
            <Text style={styles.RelatedMoviesTxt}>Related Movies</Text>
          </View>
          <View style={styles.RelatedMoviesCards}>
            <RelatedMovieCard />
            <RelatedMovieCard />
            <RelatedMovieCard />
          </View>
        </View>
      </ScrollView>

      {/* PopupMenu */}
      {Ratingpopup == true ?

        <BlurView intensity={125}
          tint='dark'
          style={[{ height: '61%', padding: 0, position: 'absolute', bottom: 0, width: '100%', paddingHorizontal: 10, }]}>
          <Text style={[styles.CommentsText, { marginTop: 10, fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 37, marginTop: 37 }]}>Give Rating</Text>
          <View style={{ borderWidth: 2, paddingHorizontal: 10, borderColor: '#383838' }}></View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: 20, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', fontFamily: 'roboto' }}> 4.0/</Text>
                  <Text style={{ color: 'white', alignSelf: 'flex-end', fontSize: 15, fontFamily: 'roboto', fontWeight: 'bold' }}>5</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <AntDesign name="star" size={rf(20)} color="#FFCC00" />
                  <AntDesign name="star" size={rf(20)} color="#FFCC00" />
                  <AntDesign name="star" size={rf(20)} color="#FFCC00" />
                  <AntDesign name="star" size={rf(20)} color="#FFCC00" />
                  <AntDesign name="star" size={rf(20)} color="#C4C4C4" />
                </View>
                <Text style={{ color: '#C4C4C4', fontSize: 11, fontWeight: '400', fontFamily: 'roboto', marginTop: 5 }}>275K+ VOTES</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: '#FF131340', marginRight: 10, height: 110, marginLeft: 30 }}></View>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginRight: 10 }} >5</Text>
                <Image source={require('../../assets/bar.png')} ></Image>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginRight: 10 }}>4</Text>
                <Image source={require('../../assets/bar2.png')}  ></Image>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginRight: 10 }}>3</Text>
                <Image source={require('../../assets/bar3.png')}  ></Image>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginRight: 10 }}>2</Text>
                <Image source={require('../../assets/bar4.png')} ></Image>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginRight: 10 }}>1</Text>
                <Image source={require('../../assets/bar5.png')} ></Image>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'column', marginRight: 25, alignItems: 'center', alignContent: 'center', justifyContent: 'center', alignSelf: 'flex-end' }}>
            <View style={{ flexDirection: 'row', }}>
              <AntDesign name="star" size={rf(30)} color="#FFCC00" />
              <AntDesign name="star" size={rf(30)} color="#FFCC00" />
              <AntDesign name="star" size={rf(30)} color="#FFCC00" />
              <AntDesign name="star" size={rf(30)} color="#C4C4C4" />
              <AntDesign name="star" size={rf(30)} color="#C4C4C4" />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <View style={{ backgroundColor: '#92919687', marginRight: 10, height: 26, width: 80, justifyContent: 'center', borderRadius: 14 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', fontFamily: 'roboto', textAlign: 'center' }}>Cancel</Text>
              </View>
              <View style={{ backgroundColor: '#FF1313', height: 26, width: 80, justifyContent: 'center', borderRadius: 14 }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', fontFamily: 'roboto', textAlign: 'center' }}>Submit</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setRatingPopup(false)}
            style={styles.CloseBtn}>
            <Text style={{
              color: '#C4C4C4',
              fontSize: rf(10),
              fontWeight: '400',
              fontFamily: 'roboto'
            }}>
              Close
            </Text>
          </TouchableOpacity>
        </BlurView>


        : null}
      {comentpopup == true ?
        <View style={styles.ComentsPopupWrapper}>
          <BlurView intensity={130}
            tint='dark'
            style={styles.blurContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={[styles.CommentsText, { marginTop: 10 }]}>68 Comments</Text>
              <View style={styles.WriteCommentBody}>
                <View style={styles.PicBody}>
                  <Image source={require('../../assets/Commenter.png')}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='contain' />
                </View>
                <TextInput style={styles.TextInput}
                  placeholder="Write a comment..."
                  placeholderTextColor='#fff' />
              </View>
              <View style={styles.ComentWritenBody}>
                <View style={styles.PicBody}>
                  <Image source={require('../../assets/Commenter.png')}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='contain' />
                </View>

                <View style={styles.CommentBody}>
                  <Text style={styles.Comments}>
                    Sisters set out to Impress the World in a thrilling show of Bravery and Comedic
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.Comments, { color: '#FFCC00' }]}>
                      Rita Dominic
                    </Text>
                    <Text style={[styles.Comments, { marginHorizontal: 10 }]}>
                      1 hour ago
                    </Text>
                  </View>

                  <View style={{
                    flexDirection: 'row', alignItems: 'center'
                    , marginVertical: 10
                  }}>
                    <TouchableOpacity>
                      <AntDesign name="like1" size={rf(12)} color="#ffff" />
                    </TouchableOpacity>

                    <Text style={{
                      color: '#fff',
                      fontSize: rf(7),
                      marginHorizontal: 5,
                      fontFamily: 'roboto'
                    }}>29</Text>
                    <TouchableOpacity style={{ height: 10, width: 10, marginLeft: 10 }}>
                      <Image source={require('../../assets/reply.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='contain' />
                    </TouchableOpacity>
                    <Text style={{
                      color: '#FFCC00', marginHorizontal: 5,
                      fontSize: rf(7),
                      fontFamily: 'roboto'
                    }}>Reply</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Entypo name="dots-three-horizontal" size={rf(12)} color="#C4C4C4" />
                </TouchableOpacity>

              </View>

            </ScrollView>

          </BlurView>

          <TouchableOpacity
            onPress={() => setComentpopup(false)}
            style={styles.CloseBtn}>
            <Text style={{
              color: '#C4C4C4',
              fontSize: rf(10),
              fontWeight: '400',
              fontFamily: 'roboto'
            }}>
              Close
            </Text>
          </TouchableOpacity>
        </View> : null}
      {SignOut == true ? <View style={styles.PopupClear}>

        <Image source={require('../../assets/popupLgo.png')}
          style={{ height: 65, width: 65 }}
          resizeMode='contain' />

        <View style={styles.popTextView}>
          <Text style={{ fontSize: 14, fontFamily: 'roboto', fontWeight: '700', color: 'black', margin: 10, marginTop: 27, textAlign: 'center' }}>
            Sorry, This content is not free.
          </Text>
          <Text style={{ fontSize: 14, fontFamily: 'roboto', fontWeight: '600', color: 'black', margin: 3, textAlign: 'center', marginBottom: 1, }}>
            {content}
          </Text>
        </View>
        <TouchableOpacity onPress={() => { setSignOut(false); fromMovie = true; navigation.navigate('FromMovie', fromMovie) }}
          style={[styles.RegisterBtn, { height: 37, width: 148, borderRadius: 7 }]}>
          <Text style={styles.BtnText}>₦300</Text>
        </TouchableOpacity>
        <View style={[styles.closeButtontxt, { height: 37, width: 148, borderRadius: 7 }]}>
          <TouchableOpacity onPress={() => { setSignOut(false); handlePress() }}>
            <Text style={styles.BtnText}>Watch Trailer</Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity onPress={() => { setSignOut(false) }}>
          <Text style={[styles.BtnText, { color: 'black', marginTop: 15, fontWeight: '400', fontSize: 15, fontFamily: 'roboto' }]}>Close</Text>
        </TouchableOpacity>
      </View> : null}
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
    height: hp("26%"),
    backgroundColor: "#000000",


  },
  Vedio: {
    width: "100%",
    height: "100%",
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
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: wp("100%"),
    height: hp("10%"),
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: wp('5%')
  },
  PopupClear: {
    height: 368,
    width: 253,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
    padding: 10,
    zIndex: 100,
    bottom: '30%',
  },
  Logo: {
    height: hp('10%'),
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextView: {
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',


  },
  BtnText: {
    fontFamily: 'robotobold',
    fontSize: rf(15),
    color: '#fff'
  },
  RegisterBtn: {
    height: hp('7%'),
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF1313',
    borderRadius: 15,
    marginVertical: hp('4%'),
    marginBottom: hp('2%'),
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
  titleFont1: {
    fontSize: rf(21),
    color: "#E5E5E5",
    fontFamily: 'robotobold',
    marginLeft: 10
  },
  titleFont2: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#C4C4C4",
    fontFamily: 'roboto',
    marginLeft: 10
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
    fontSize: rf(7),
    color: "#fff",
    fontWeight: "400",
    fontFamily: 'roboto'
  },
  DiscriptionText2: {
    fontSize: rf(7),
    color: "#fff",
    textAlign: "center",
    fontWeight: "400",
    fontFamily: 'roboto'
  },
  MoreTxt: {
    color: "#FFCC00",
    fontSize: rf(8),
    fontWeight: "400",
    fontFamily: 'roboto',

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
    borderColor: "#C4C4C412",
  },
  CastTxt: {
    fontSize: rf(10),
    fontFamily: 'robotobold',
    color: "#fff",
  },
  CastBar: {
    width: "50%",
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
    fontSize: rf(9),
    color: "#fff",
    fontWeight: "700",
  },
  Btn: {
    width: wp("15%"),
    height: hp("4%"),
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#FF1313",
    alignItems: "center",
    justifyContent: "center",
  },
  BtnTxt: {
    fontSize: rf(9),
    color: "#FF1313",
    fontWeight: '400',
    fontFamily: 'roboto'

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
    fontSize: rf(10),
    fontFamily: 'robotobold',
    color: "#fff",
  },
  RelatedMoviesCards: {
    width: wp("90%"),
    height: hp("20%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ComentsPopupWrapper: {
    height: hp('51%'),
    width: wp('100%'),
    position: 'absolute',
    padding: 25,
    bottom: 0,
  },
  CommentsText: {
    color: '#C4C4C4',
    fontSize: rf(9),
    fontWeight: '500',
    fontFamily: 'roboto'
  },
  WriteCommentBody: {
    height: hp('6%'),
    width: wp('90%'),
    borderRadius: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#383838',
    marginVertical: 15,
  },
  PicBody: {
    height: hp('6%'),
    width: hp('6%'),
    borderRadius: 100,
  },
  TextInput: {
    height: '100%',
    width: '80%',
    marginLeft: 10,
    fontSize: rf(7),
    fontWeight: '400',
    fontFamily: 'roboto',
    color: '#fff'
  },
  ComentWritenBody: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  CommentBody: {
    width: wp('70%'),
    paddingHorizontal: '3%',
  },
  Comments: {
    fontSize: rf(7),
    fontWeight: '400',
    color: '#C4C4C4',
    fontFamily: 'roboto'
  },
  CloseBtn: {
    height: hp('7%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#1A1A1A'
  },
  blurContainer: {
    height: hp('45%'),
    width: wp('100%'),
    position: 'absolute',
    paddingHorizontal: wp('5%')
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
