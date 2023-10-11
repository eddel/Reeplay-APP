import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';
export default function Login(props) {

    return (
        <View style={styles.container}>
            <View style={styles.LogoWrapper}>
                <Image source={require('../../../assets/LogoReply.png')}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='contain' />
            </View>
            <View style={styles.TextBody}>
                <Text style={styles.HeadingText}>
                    Create an Account</Text>
                <Text style={styles.HeadingText}>
                    and Start Watching your Favorite Movies.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('30%'),
        width: wp('100%'),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: hp('5%')

    },
    LogoWrapper: {
        height: hp('15%'),
        width: wp('30%'),

    },
    HeadingText: {
        fontSize: rf(11),
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'roboto',
    },
    TextBody: {
        justifyContent: 'center',

    }







});
