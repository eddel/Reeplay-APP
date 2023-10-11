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
    ScrollView,
    Switch,
    StatusBar,
    Image
} from "react-native";


export default function AboutUS({ navigation }) {
    const about = `
A new wave for entertainment with video on demand.`
    const nextPara = `
Reeplay streaming app for original African contents, meant to be the reliable source for watching unpolished, in-depth and unrefined contents of Africa.

The Replay Mobile app is a Multi-purpose Video on Demand (VoD) Streaming platformfor Movies, Tv Series, Live Tv shows & Events. Anime and More.

Replay app delivers content over the internet to consumers, giving users the options of choosing a film, show or watch Live show/events of their choice from a library of contents, any time they want.`
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.Back}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.BackTxt}>Back</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '10%', width: '100%', marginTop: '15%' }} >
                <Image source={require('../../assets/LogoReply.png')}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='contain' />
            </View>
            <ScrollView>
                <View style={{ margin: 15, marginTop: 50 }}>
                    <Text style={{ fontSize: 17, fontFamily: 'robotobold', color: 'white', }}>
                        About Reeplay
                    </Text>
                    <Text style={{ fontSize: 14, fontFamily: 'roboto', fontWeight: 'bold', color: 'white', textAlign: 'justify' }}>
                        {about}
                    </Text>
                    <Text style={{ fontSize: 13, fontFamily: 'roboto', color: 'white', textAlign: 'justify', lineHeight: 20 }}>
                        {nextPara}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",


    },
    main: {
        width: wp("100%"),
        alignItems: "center",
        marginBottom: hp("3%"),
    },
    header: {
        width: wp("100%"),
        height: hp("7%"),
        flexDirection: "row",
        paddingVertical: "5%",

    },
    title: {
        width: "70%",
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingHorizontal: "5%",
    },
    titleTxt: {
        fontSize: rf(11),
        fontFamily: 'robotobold',
        color: "#C4C4C4",
        marginRight: wp('5%')

    },
    Back: {

        alignItems: "flex-start",
        margin: '5%',
        marginBottom: 0
    },
    BackTxt: {
        fontSize: 15,
        color: "#C4C4C4",
        fontFamily: 'roboto',
        fontWeight: '700'
    },
    CardsRow: {
        width: wp("90%"),
        height: hp("20%"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
});
