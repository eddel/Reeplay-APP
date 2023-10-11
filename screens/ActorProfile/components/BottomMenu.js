import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, FontAwesome ,MaterialCommunityIcons, Foundation} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function BottomMenu(props) {

    return (

        <View style={styles.MenuWrapper}>
            <TouchableOpacity style={styles.IconBody}>
                <Entypo name="home" size={rf(18)} color={props.homecolor} />
                <Text style={[styles.HomeText,{color:props.textcolor}]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBody}>
            <FontAwesome name="search" size={rf(18)} color="#fff" />
                <Text style={styles.HomeText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBody}>
            <Entypo name="signal" size={rf(18)} color="#ffff" />
                <Text style={styles.HomeText}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBody}>
            <MaterialCommunityIcons name="flash-circle" size={rf(18)} color="#fff" />
                <Text style={styles.HomeText}>Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBody}>
            <Foundation name="die-four" size={rf(18)} color="#fff" />
                <Text style={styles.HomeText}>Librery</Text>
            </TouchableOpacity>
          
           
            
        </View>


    );
}

const styles = StyleSheet.create({
    MenuWrapper: {
        height: hp('8%'),
        width: wp('100%'),
        backgroundColor: '#1A1A1A',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('4%')
    },
    HomeText:{
        fontSize:rf(10),
        fontWeight:'400',
        color:'#E5E5E5'
    },
    IconBody:{
        alignItems:'center'
    }









});
