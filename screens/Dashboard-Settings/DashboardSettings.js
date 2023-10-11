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
  StatusBar
} from "react-native";
import SettingCard from "./components/SettingCard";
import BiometricCard from "./components/BiometricCard";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header/Header";

export default function DashboardSettings({ navigation }) {
  const [showpop, setShowPop] = useState();
  const [showWatchList, setShowWatchList] = useState();
  const [showStore, setShowStore] = useState();
  const [SignOut, setSignOut] = useState();
  const handleStore = () => {
    setShowStore(true);
  }
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />


      {/* Header */}
        <Header />
      {/* Header */}
      <View style={{ alignItems: 'center' }}>
        <View style={styles.title}>
          <Text style={styles.titletxt}>Settings</Text>
        </View>

        <BiometricCard />
        <SettingCard title="Wi-Fi Only" switch
          Icon={require('../../assets/Icons/WiFiIcon.png')} />
        <View style={styles.Wrapper}>
          <View style={styles.layer}>
            <SettingCard title="Lock App" switch
              Icon={require('../../assets/Icons/AppLock.png')} />
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowWatchList(true)}>
          <SettingCard title="Clear Watchlist"
            Icon={require('../../assets/Icons/ClearWatchlist.png')} />
        </TouchableOpacity>
        <View style={styles.Wrapper}>
          <View style={styles.layer}>
            <TouchableOpacity onPress={() => { navigation.navigate('Languages') }}>
              <SettingCard title="Language" RightIcon
                Icon={require('../../assets/Icons/Language.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => setShowPop(true)}>
          <SettingCard title="Video Quality" RightIcon
            Icon={require('../../assets/Icons/VideoQuality.png')} />
        </TouchableOpacity>

        <View style={styles.Wrapper}>
          <View style={styles.layer}>
            <TouchableOpacity>
              <SettingCard title="Interests" RightIcon
                Icon={require('../../assets/lovely.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => { navigation.navigate('NotificationSettings') }}>
          <SettingCard title="Notifications" RightIcon
            ArrowIcon={<MaterialIcons name="notifications-active" color='#C4C4C4' size={20} style={{ marginLeft: 0 }} />} />
        </TouchableOpacity>
        <View style={styles.Wrapper}>
          <View style={styles.layer}>
            <SettingCard title="Help Center" RightIcon
              Icon={require('../../assets/Icons/Help.png')} />
          </View>
        </View>


        <SettingCard title="Privacy Policy" RightIcon
          Icon={require('../../assets/Icons/Privacy.png')} />
        <View style={styles.Wrapper}>
          <View style={styles.layer}>

            <TouchableOpacity onPress={() => { navigation.navigate('AboutUs') }}>
              <SettingCard title="About Us" RightIcon
                Icon={require('../../assets/Icons/About.png')} />

            </TouchableOpacity>
          </View>
          <View style={styles.layer}>
          </View>
        </View>

        {showpop == true ?
          <View style={styles.PopupPremium}>

            <View style={{ justifyContent: 'center' }}>


              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setShowPop(false)}>
                  <Text style={[styles.Text1, { fontSize: 11, fontWeight: '500', margin: 5 }]}>
                    Automatic
                  </Text>

                </TouchableOpacity >
                <Image source={require('../../assets/RedTick.png')} style={{ height: 8, width: 10 }} />

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setShowPop(false)}>
                  <Text style={[styles.Text1, { fontSize: 11, fontWeight: '500', margin: 5 }]}>
                    4K
                  </Text>
                </TouchableOpacity>

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => { setShowPop(false) }}>
                  <Text style={[styles.Text1, { fontSize: 11, fontWeight: '500', margin: 5 }]}>
                    2K
                  </Text>
                </TouchableOpacity>

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setShowPop(false)}>
                  <Text style={[styles.Text1, { fontSize: 11, fontWeight: '500', margin: 5 }]}>

                    1080 P
                  </Text>
                </TouchableOpacity>

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setShowPop(false)}>
                  <Text style={[styles.Text1, { fontSize: 11, fontWeight: '500', margin: 5 }]}>
                    720 P
                  </Text>
                </TouchableOpacity>

              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setShowPop(false)}>
                  <Text style={[styles.Text1, { fontSize: 11, fontWeight: '500', margin: 5 }]}>
                    480 P
                  </Text>
                </TouchableOpacity>

              </View>

            </View>
          </View>
          : null
        }
        {showWatchList == true ? <View style={styles.PopupClear}>
          <View style={[styles.Logo, { marginTop: 0 }]}>
            <Image source={require('../../assets/popupLgo.png')}
              style={{ height: 65, width: 65 }}
              resizeMode='contain' />
          </View>
          <View style={styles.TextView}>
            <Text style={{ fontSize: 14, fontFamily: 'roboto', fontWeight: '600', color: 'black', margin: 15, marginBottom: 0, textAlign: 'center' }}>
              Are you sure you want to
            </Text>
            <Text style={{ fontSize: 14, fontFamily: 'roboto', fontWeight: '600', color: 'black', textAlign: 'center' }}>
              clear WatchList?
            </Text>
          </View>
          <View style={styles.closeButtontxt}>
            <TouchableOpacity onPress={() => setShowWatchList(false)}>
              <Text style={styles.BtnText}>No</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setShowWatchList(false)}
            style={styles.RegisterBtn}>
            <Text style={styles.BtnText}>Yes</Text>
          </TouchableOpacity>

        </View> : null}

      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
  },
  header: {
    width: wp("100%"),
    height: hp("6%"),
    backgroundColor: "#FF1313",
    justifyContent: "center",
    paddingHorizontal: wp('5%'),

  },
  headertxt: {
    fontSize: rf(10),
    color: "#fff",
    fontFamily: 'roboto'
  },
  title: {
    width: wp("90%"),
    height: hp("10%"),
    justifyContent: "center",
  },
  titletxt: {
    fontSize: rf(15),
    fontFamily: 'robotobold',
    color: "#fff",
  },
  Wrapper: {
    width: wp("100%"),
    height: hp("5%"),
    backgroundColor: "#3E3D3D",
    alignItems: "center",
    justifyContent: 'center'
  },
  PopupPremium: {
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
    bottom: '18%',
  },
  Logo: {
    height: hp('10%'),
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('4%')
  },
  Text1: {
    fontFamily: 'roboto',
    fontSize: rf(15),
    color: 'black',
    fontWeight: '400',
    textAlign: 'center'
  },
  Text2: {
    fontFamily: 'robotobold',
    fontSize: rf(11),
    color: '#E5E5E5',
    textAlign: 'center',
    marginVertical: 20

  },
  TextView: {

    alignSelf: 'center',
    justifyContent: 'center',



  },
  RegisterBtn: {
    height: 37,
    width: 148,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF1313',
    borderRadius: 4,
    marginVertical: 10,
  },
  closeButtontxt: {
    height: 37,
    width: 148,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#676571',
    borderRadius: 4,
    marginTop: 28

  },
  BtnText: {
    fontFamily: 'robotobold',
    fontSize: 14,
    color: '#fff'
  },
  closetext: {
    position: 'absolute',
    bottom: 0,
    fontFamily: 'roboto',
    fontWeight: '400',
    fontSize: rf(11),
    color: '#C4C4C4',

  },
  Layer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1A1A1A",
    opacity: 0.3,
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
    bottom: '18%',
  },
});
