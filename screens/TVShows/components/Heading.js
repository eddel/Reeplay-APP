import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Heading(props) {



    return (
        <View style={styles.BarWrapper}>
            <View>
                <Text style={styles.TitleText}>{props.Title}</Text>
                <Text style={styles.DesText}>{props.Des}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    BarWrapper: {
        height: hp('8%'),
        width: wp('90%'),
        backgroundColor: '#FF1313',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: hp('1%'),
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    TitleText: {
        fontSize: rf(15),
        fontFamily: 'robotobold',
        fontWeight: 'bold',
        color: '#fff'
    },
    DesText: {
        fontSize: rf(10),
        fontWeight: '400',
        color: '#fff',
        fontFamily: 'roboto',
    },
    SearchIconBody: {
        height: 15,
        width: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7
    }








});
