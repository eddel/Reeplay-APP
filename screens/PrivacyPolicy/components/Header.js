import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons';
export default function Header(props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.navigation}>
                <Ionicons name="chevron-back" size={rf(17)} color="black" />
            </TouchableOpacity>
            <View style={styles.TitleView}>
                <Text style={styles.TitleText}>{props.Title}</Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('8%'),
        width: wp('100%'),
        flexDirection: 'row',
        paddingHorizontal: wp('5%'),
        alignItems: 'center',
        marginBottom: 8,marginTop:10
    },
    TitleView: {
        flex: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TitleText: {
        fontSize: rf(12),
        fontFamily: 'robotobold',
        color: '#fff'
    }





});
