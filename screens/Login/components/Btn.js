import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons, Feather } from '@expo/vector-icons';
export default function Btn(props) {

    return (
        <TouchableOpacity
            onPress={props.navigation}
            style={[styles.container, { backgroundColor: props.color }]}>
            <Text style={styles.BtnText}>{props.Title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('6%'),
        width: wp('70%'),
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('3%')

    },
    BtnText: {
        fontSize: rf(12),
        fontFamily: 'robotobold',
        color: '#E5E5E5'
    }








});
