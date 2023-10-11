import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function TVC(props) {

    const [change, setchange] = useState()

    return (
        <View style={styles.Wrapper}>
            <TouchableOpacity style={styles.PlayPic}>
                <Image source={require('../../../assets/Redbell.png')}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='contain' />
            </TouchableOpacity >
            <View>
                <Text style={styles.TextTVC}>DAVIDO LIVE IN CONCERT</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        fontFamily: 'roboto', color: '#FFCC00', fontWeight: '400',
                        fontSize: rf(6)
                    }}>18+ </Text>

                    <Text style={{
                        fontFamily: 'roboto', color: '#C4C4C4', fontWeight: '400',
                        fontSize: rf(6)
                    }}> | starts in</Text>
                    <Text style={{
                        fontFamily: 'roboto', color: '#FF1313', fontWeight: '400',
                        fontSize: rf(6)
                    }}> 01: 19</Text>
                </View>

            </View>
            <View style={styles.ExclusiveBody}>
                <Text style={{
                    fontSize: rf(5), color: '#7B59FF', fontFamily: 'roboto',
                }}>
                    EXCLUSIVE
                </Text>

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
        borderBottomColor: '#C4C4C414',
        justifyContent: 'space-evenly',
        paddingHorizontal: wp('10%')

    },
    PlayPic: {
        height: 15,
        width: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextTVC: {
        fontFamily: 'roboto',
        color: '#C4C4C4',
        fontWeight: '500',
        fontSize: rf(7)
    },
    ExclusiveBody: {
        height: 20,
        width: 58,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#7B59FF',
        borderWidth: 1,
        borderRadius: 4
    }









});
