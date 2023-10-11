import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { MaterialIcons } from '@expo/vector-icons';
export default function CreateAccountBtn(props) {

    return (
        <TouchableOpacity
        onPress={props.navigation}
        style={styles.container}>
            <Text style={styles.BtnText}>{props.Title}</Text>
        </TouchableOpacity>
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
        justifyContent:'center',
        alignItems:'center'
    
    },
    BtnText:{
        fontSize:rf(11.5),
        fontWeight:'400',
        color:'#FF1313',
        fontFamily:'roboto',
    }
 
   






});
