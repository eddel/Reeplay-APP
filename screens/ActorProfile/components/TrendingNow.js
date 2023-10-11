import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function TrendingNow(props) {

    return (

        <TouchableOpacity 
        onPress={props.navigation}
        style={styles.PictureBody}>
            <Image source={props.Image}
                style={{ height: '100%', width: '100%' }}
                resizeMode='contain' />
        </TouchableOpacity>


    );
}

const styles = StyleSheet.create({
    PictureBody: {
        height: hp('18%'),
        width: wp('30%'),
        borderRadius: 15,
        overflow: 'hidden',
        marginLeft:wp('4%'),
      
     
        
    }









});
