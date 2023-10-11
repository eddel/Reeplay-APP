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
   









});
