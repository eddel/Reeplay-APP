import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo } from '@expo/vector-icons';
export default function NextBtn(props) {

    return (
        <View style={styles.BtnWrapper}>
            <TouchableOpacity
                onPress={props.navigation}
                style={styles.BtnBody}>
                <View style={{ flex:1,alignItems:'center',}}>
                    <Text style={styles.NextText}>{props.title}</Text>
                </View>
                <Entypo name={props.icon} size={20} color="#fff" />
            </TouchableOpacity>
            <View style={styles.NavigationIcons}>
           
                <View style={[styles.IconsBody, { backgroundColor: props.iconcolor }]}></View>
                <View style={[styles.IconsBody, { backgroundColor: props.secondiconcolor }]}></View>
                <View style={[styles.IconsBody, { backgroundColor: props.thirdiconcolor }]}></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    BtnWrapper: {

        width: wp('100%'),
        position: 'absolute',
        bottom: hp('3%'),
        alignItems: 'center'

    },
    BtnBody: {
        height: hp('6%'),
        width: wp('75%'),
        backgroundColor: '#FF1313',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:wp('3%')
    },
    NextText: {
        fontSize: rf(12),
        color: "#fff",
        fontFamily:'robotobold'
    },
    NavigationIcons: {
        flexDirection: 'row',
        marginTop: hp('3%')
    },
    IconsBody: {
        height: 5,
        width: wp("10%"),
        backgroundColor: '#7D0909',
        borderRadius: 10,
        marginHorizontal: 8

    }





});
