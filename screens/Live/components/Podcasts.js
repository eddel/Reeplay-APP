import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
export default function Podcasts(props) {

    return (
        <View>
            <TouchableOpacity onPress={props.onpress}>
                <ImageBackground source={props.Image}
                    style={styles.PicBody}
                    resizeMode='contain'>

                    <View style={{ height: 40, width: 40, justifyContent: 'center', alignContent: 'center' }}>
                        <Image source={require('../../../assets/Play2.png')}
                            style={{ height: '100%', width: '100%' }}
                            resizeMode='contain' />

                    </View>




                </ImageBackground>

            </TouchableOpacity>
            <View style={{ width: '100%', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between', marginHorizontal: 10, marginTop: 6 }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.TVCText}>{props.Title}</Text>
                        <Text style={styles.DesText}>{props.Des}</Text>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>

                        {props.Premium ? (
                            <Image source={require('../../../assets/greencrown.png')} style={{ marginRight: 6, height: 12, width: 12 }} ></Image>
                        ) : null}
                        {props.Free ? (<Image source={require('../../../assets/yellowcrown.png')} style={{ marginRight: 6, height: 12, width: 12 }} ></Image>) : null}
                        {props.Exclusive ? (
                            <Image source={require('../../../assets/redcrown.png')} style={{ marginRight: 6, height: 12, width: 12 }} ></Image>
                        ) : null}
                        <Text style={[styles.TVCText, { marginRight: 6 }]}>{props.Eighteen}</Text>
                        {props.Start ? (
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.TVCText}> {props.Start}</Text>
                                {props.FreeTime ? (<Text style={[styles.TVCText, { color: '#FAFF00' }]}> {props.FreeTime}</Text>) : null}
                                {props.ExclusiveTime ? (<Text style={[styles.TVCText, { color: '#FF1313' }]}> {props.ExclusiveTime}</Text>) : null}
                            </View>
                        ) : (<View style={{ backgroundColor: '#FF1313', height: 15, width: 40, borderRadius: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/flashcircle.png')} style={{ height: 7, width: 8 }} />
                            <Text style={[styles.TVCText, { color: 'white', }]}> {props.Live}</Text>
                        </View>)}






                    </View>
                </View>


            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    PicBody: {
        height: 126,
        width: 234,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginRight: 8,

    },
    TVCText: {
        fontSize: rf(8),
        fontWeight: '500',
        color: '#fff',
        fontFamily: 'roboto'

    },
    DesText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#fff',

        fontFamily: 'roboto'
    },
    TextView: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,

    },
    ExcusiveBody: {
        height: 20,

        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#00E3A3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ExclusiveText: {
        fontSize: rf(4),
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'roboto'
    },

    blur: {
        height: hp('5%'),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
        justifyContent: 'space-between',
        marginBottom: 0
    }






});
