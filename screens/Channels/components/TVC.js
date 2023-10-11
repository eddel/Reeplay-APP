import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function TVC(props) {

    return (
        <TouchableOpacity>
            <ImageBackground source={props.Image}
                style={styles.PicBody}
                resizeMode='cover'>
                <LinearGradient
                    colors={['#000000', '#000000']}
                    style={styles.BackGround} />
                <View style={{
                    height: 30, width: 30, justifyContent: 'center', alignContent: 'center'
                    , marginTop: hp('6%')
                }}>
                    <Image source={require('../../../assets/TVCPlay.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='contain' />

                </View>
                <Text style={styles.TVCText}>{props.Title}</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'flex-start' }}>
                    <View style={[styles.PlusBody, { backgroundColor: '#FF1313', padding: 2, marginLeft: 10 }]}>
                        <Text style={{ fontSize: rf(5), color: 'white' }}>
                            LIVE
                        </Text>
                    </View>
                    <View style={[{
                        marginLeft: 3, height: 15,
                        width: 25,

                        borderRadius: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5
                    }]}>
                        <Text style={{ fontSize: rf(12), color: '#FFCC00' }}>
                            13+
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    PicBody: {
        height: hp('20%'),
        width: wp("85%"),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 10

    },
    TVCText: {
        fontSize: rf(11),
        fontFamily: 'robotobold',
        color: '#C4C4C4',
        marginTop: 8
    },
    BackGround: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        opacity: 0.4
    },
    PlusBody: {
        height: 20,
        width: 25,
        backgroundColor: '#000000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,


    }








});
