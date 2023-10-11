import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function TVCNews(props) {

    return (
        <TouchableOpacity onPress={props.onpress}>
            <ImageBackground source={props.Image}
                style={styles.PicBody}
                resizeMode='cover'>
                <LinearGradient
                    colors={['#000000', '#000000']}
                    style={styles.BackGround} />
                <View style={{ height: 40, width: 40, justifyContent: 'center', alignContent: 'center' }}>
                    <Image source={require('../../../assets/Play2.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='contain' />

                </View>
                <Text style={styles.TVCText}>{props.Title}</Text>
            </ImageBackground>
            <View style={styles.ProgressBarWrapper}>
                <View style={[styles.ProgressBar, { backgroundColor: props.backonecolor }]}></View>
                <View style={[styles.ProgressBar, { backgroundColor: props.backtwocolor }]}></View>
                <View style={[styles.ProgressBar, { backgroundColor: props.backthreecolor }]}></View>
                <View style={[styles.ProgressBar, { backgroundColor: props.backfourcolor }]}></View>
                <View style={[styles.ProgressBar, { backgroundColor: props.backfivecolor }]}></View>
                <View style={[styles.ProgressBar, { backgroundColor: props.backSixcolor }]}></View>

            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    PicBody: {
        height: hp('17%'),
        width: wp("88%"),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginLeft: 3


    },
    ProgressBar: {
        height: 5,
        width: wp('6%'),
        backgroundColor: '#FF1313',
        marginHorizontal: 4,
        borderRadius: 10
    },
    ProgressBarWrapper: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 7,
    },
    TVCText: {
        fontSize: rf(10),
        fontFamily: 'robotobold',
        color: '#C4C4C4'
    },
    BackGround: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        opacity: 0.5
    }








});
