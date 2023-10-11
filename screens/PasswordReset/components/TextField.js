import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';
export default function TextField(props) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.InputText}
            placeholder={props.Holder}
            placeholderTextColor='#fff'
               
            />
         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('6%'),
        width: wp('70%'),
        borderRadius: 30,
        borderColor: '#FF1313',
        borderWidth: 3,
        alignSelf: 'center',
        paddingLeft: wp('5%'),
        overflow:'hidden',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    InputText: {
        height: '100%',
        width: '100%',
        fontSize: rf(11.5),
        color: '#E5E5E5',
        fontFamily:'roboto',
    },
   






});
