import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Heading from './components/Heading';
import TVCNewsText from './components/TVCNewsText'
import TVC from './components/TVC'
import { BlurView } from 'expo-blur';

export default function Channels({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />


            <View style={styles.SearchBody}>
                <TouchableOpacity style={styles.SearchIconsBody}>
                    <Image source={require('../../assets/ChannelSearch.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='contain' />
                </TouchableOpacity>
                <TextInput placeholder='Search'
                    placeholderTextColor='#fff'
                    style={styles.SearchText} />
                <TouchableOpacity style={styles.SearchIconsBody}>
                    <Image source={require('../../assets/ChannelClose.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='contain' />
                </TouchableOpacity>
            </View>
            <Heading
                Title='CHANNELS'
                Des='Add Channels to your Watchlist to get Notifications and News.' />
            <ScrollView>
                <View style={styles.TVCWrapper}>
                    <TVC
                        Image={require('../../assets/traise.png')}
                    />
                    <TVCNewsText />
                    <TVC
                        Image={require('../../assets/worldchannel.png')}
                    />
                    <TVCNewsText />
                    <TVC
                        Image={require('../../assets/aiesnews.png')}
                    />
                    <TVCNewsText />
                    <TVC
                        Image={require('../../assets/bbcnews.png')}
                    />
                    <TVCNewsText />
                </View>
            </ScrollView>


            <BlurView style={styles.BLurWrapper}
                intensity={120}
                tint='dark'>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{
                        fontFamily: 'roboto',
                        color: '#FF1313',
                        fontSize: rf(10)
                    }}>Close</Text>
                </TouchableOpacity>

            </BlurView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

    },
    SearchBody: {
        height: hp('6%'),
        width: wp('90%'),
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#403F3F',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: wp('4%')

    },
    SearchIconsBody: {
        height: 14,
        width: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SearchText: {
        fontFamily: 'roboto',
        color: '#C4C4C4',
        fontSize: rf(9),
        fontWeight: '400',
        height: '100%',
        width: '80%',
        textAlign: 'center',
        color: '#fff'
    },
    TVCWrapper: {
        alignItems: 'center',
        marginBottom: hp('10%')

    },
    BLurWrapper: {
        height: hp('8%'),
        width: wp('100%'),
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }









});
