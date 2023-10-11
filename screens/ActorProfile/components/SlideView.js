import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import TrendingNow from './components/TrendingNow';
import { BlurView } from 'expo-blur';
import PagerView from 'react-native-pager-view';


export default function SlideView({ navigation }) {

    const [share, setShare] = useState()

    return (
        <View style={styles.container}>
            <PagerView style={{ flex: 1 }}
                initialPage={0}>
                <View style={{ flex: 1 }}>
                    <Image source={require('../../../assets/Actor.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='cover' />

                </View>
            </PagerView>

            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', "#000000"]}
                style={styles.background}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Ionicons name="menu" size={rf(23)} color="#fff" />
            </TouchableOpacity>
            <View style={{ height: '90%', justifyContent: 'flex-end' }}>
                <View style={{
                    alignSelf: 'center',
                }}>
                    <Text style={styles.FlimText}>ACTOR</Text>
                    <Text style={styles.FlimTitle}>Richard Mofe</Text>
                    <View style={styles.ProgressBarWrapper}>
                        <View style={styles.ProgressBar}></View>
                        <View style={[styles.ProgressBar, { backgroundColor: '#7D0909' }]}></View>
                        <View style={[styles.ProgressBar, { backgroundColor: '#7D0909' }]}></View>

                    </View>
                </View>
                <View style={styles.PlayBtnWrapper}>
                    <TouchableOpacity onPress={() => setShare(true)}
                        style={styles.PlayBtn}>
                        <Text style={styles.PlayText}>FAN PAGE</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('60%'),
        width: wp('100%'),

    },

    ImageBg: {
        height: hp('60%'),
        width: wp('100%'),
        paddingHorizontal: wp('4%'),
        paddingTop: hp('4%')

    },
    FlimText: {
        fontSize: rf(9),
        fontFamily: 'robotobold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 5
    },
    FlimTitle: {
        fontSize: rf(12),
        fontFamily: 'robotobold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 5

    },
    WatchText: {
        fontSize: rf(6),
        color: '#C4C4C4',
        fontFamily: 'roboto'
    },
    PlayBtn: {
        height: hp('6%'),
        width: wp('40%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1313',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 5
    },
    PlayText: {
        fontSize: rf(10),
        fontFamily: 'robotobold',
        color: '#fff'
    },
    ProgressBar: {
        height: 5,
        width: wp('5%'),
        backgroundColor: '#FF1313',
        marginHorizontal: 2,
        borderRadius: 10,
        marginVertical: 10
    },
    ProgressBarWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    background: {
        height: hp('60%'),
        width: wp('100%'),
        position: 'absolute'
    },
    ActorDescriptionText: {
        fontSize: rf(8),
        fontWeight: '400',
        color: '#ffff',
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: 'roboto'
    },
    TextWrapper: {
        width: wp('80%'),
        alignSelf: 'center'
    },
    OtherMovies: {
        width: wp('90%S'),
        alignSelf: 'center'
    },
    OtherMoviesText: {
        fontSize: rf(10),
        color: '#ffff',
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: 'robotobold'
    },
    FeaturedMovies: {
        flexDirection: 'row',
        marginVertical: 12
    },
    ShareView: {
        height: hp('12%'),
        width: wp("100%"),
        backgroundColor: '#222',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    ShareText: {
        color: '#E5E5E5',
        fontSize: rf(10),
        fontWeight: '400',
        fontFamily: 'roboto'
    },
    TextView: {
        alignItems: 'center'
    },
    ShareLinear: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    }

});
