import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';
export default function TextField(props) {

    return (
        <View style={styles.container}>
            <TextInput style={styles.InputText}
                keyboardType='number-pad'
                maxLength={6}
                placeholder='*** - ***'
                placeholderTextColor='#E5E5E5'
            />
            <TouchableOpacity style={styles.SendCode}>
                <Text style={styles.TextCode}>Send Code</Text>
            </TouchableOpacity>
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
        marginVertical: hp('3%'),
        flexDirection: 'row',
        overflow: 'hidden'
    },
    InputText: {
        height: '100%',
        width: '60%',
        fontSize: rf(12),
        color: '#E5E5E5',
        textAlign:'center',
        fontFamily: 'robotobold',
      
    },
    SendCode: {
        height: '100%',
        width: '40%',
        backgroundColor: '#FF1313',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextCode: {
        fontSize: rf(10),
        fontFamily: 'robotobold',
        color: '#fff',

    }







});
