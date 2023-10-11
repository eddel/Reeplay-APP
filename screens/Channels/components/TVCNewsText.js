import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function TVC(props) {

    return (
        <View style={styles.Wrapper}>
            <View style={styles.PlayPic}>
                <Image source={require('../../../assets/WhitePlayChannel.png')}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='contain' />
            </View >
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.TextTVC}>TVC News set out to Impress the World</Text>
                <Text style={styles.TextTVC}>in a thrilling show of pure Comedic channels.</Text>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    Wrapper: {
        height: hp('5%'),
        width: wp("90%"),
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C414'

    },
    PlayPic: {
        height: 18,
        width: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTVC: {
        fontFamily: 'roboto',
        color: '#C4C4C4',
        fontWeight: '400',
        fontSize: rf(8)
    }









});
