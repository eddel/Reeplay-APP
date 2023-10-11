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
    Image,
    StatusBar,
    Switch,
    TextInput
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function GiftRedeem({ navigation, route }) {
    const { fromTopup, fromMovie, fromGift } = route.params;
    console.log('fromMovie', fromGift);
    useEffect(() => {



        setTimeout(() => {
            navigation.navigate('Dashboard');
        }, 3000);
    },);

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('TopupScreen')} >
                    <Image source={require('../../assets/success.png')} style={{ alignSelf: 'center', marginBottom: 15 }} />
                </TouchableOpacity>
                {fromMovie ? (<Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontSize: 14, fontFamily: 'roboto', fontWeight: '400' }}>
                    Thank You,

                </Text>) : (<Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', fontSize: 14, fontFamily: 'roboto', fontWeight: '400' }}>
                    Congratulations,

                </Text>)}
                {fromTopup ? (<Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', width: '65%', fontSize: 14, fontFamily: 'roboto', fontWeight: '400' }}>
                    Your have successfully subscribed to 1 month premium, Enjoy.
                </Text>) : null}
                {
                    fromGift ? (<Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', marginHorizontal: 10, width: '65%', fontSize: 14, fontFamily: 'roboto', fontWeight: '400' }}>
                        Your Gift card  has been added to your balance, successfully.
                    </Text>) : null
                }
                {
                    fromMovie ? (<Text style={{ color: 'white', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', marginHorizontal: 10, width: '65%', fontSize: 14, fontFamily: 'roboto', fontWeight: '400' }}>

                        Your Donation was successful.
                    </Text>) : null
                }

            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: 'center'
    },
    header: {
        width: wp("100%"),
        height: hp("6%"),
        backgroundColor: "#FF1313",
        justifyContent: "center",
        paddingHorizontal: wp('5%'),
        position: 'absolute',
        top: 0,
    },
    headertxt: {
        fontSize: rf(15),
        color: "#fff",
        fontFamily: 'roboto',
        fontWeight: '400'
    },
    title: {
        width: wp("90%"),
        height: hp("10%"),
        justifyContent: "center",
    },
    titletxt: {
        fontSize: rf(11),
        fontFamily: 'robotobold',
        color: "#fff",
    },
    Wrapper: {
        width: wp("100%"),
        height: hp("7%"),
        backgroundColor: "#92919614",
        alignItems: "center",


    },
    PopupPremium: {
        height: hp('55%'),
        width: wp('90%'),
        backgroundColor: '#000000',
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 15,
        bottom: hp('20%'),
        alignItems: 'center',
        padding: 10,
        zIndex: 999,
        justifyContent: 'center'
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
        fontSize: rf(7),
        color: '#E5E5E5',
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
        justifyContent: 'center'

    },
    RegisterBtn: {
        height: hp('7%'),
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FF1313',
        borderRadius: 15,
        marginVertical: hp('3%')
    },
    BtnText: {
        fontFamily: 'robotobold',
        fontSize: rf(11),
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
        flex: 1
    },
    NotificationTxt: {
        fontSize: rf(10),
        fontWeight: "400",
        fontFamily: 'roboto',
        color: "#fff",
        marginLeft: 10,
    },
    Notificationdisc: {
        fontSize: rf(6),
        color: "#fff",
        marginLeft: 12,
        fontWeight: '400',
        fontFamily: 'roboto'
    },
});

