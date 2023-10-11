import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function TVCNewsText(props) {

    const [change, setchange] = useState()

    return (
        <View style={styles.Wrapper}>
         
            <View style={{width:'30%',alignItems:'center'}}>
                <Text style={styles.TextTVC}>BIG BRODA NAIJA</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
                    <Text style={{
                        fontFamily: 'roboto', color: '#FFCC00', fontWeight: '400',textAlign:'center',
                        fontSize: rf(6)
                    }}>18+ </Text>

                    <Text style={{
                        fontFamily: 'roboto', color: '#C4C4C4', fontWeight: '400',
                        fontSize: rf(6)
                    }}> | </Text>
                    <Text style={{
                        fontFamily: 'roboto', color: '#00E3A3', fontWeight: '400', textAlign:'center',
                        fontSize: rf(6)
                    }}> LIVE</Text>
                </View>

            </View>
            <View style={{width:'25%',alignItems:'flex-end',}}>
            <View style={styles.ExclusiveBody}>
                <Text style={{
                    fontSize: rf(5), color: '#00E3A3', fontFamily: 'roboto',
                }}>
                  PREMIUM
                </Text>

            </View>
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
        fontSize: rf(7),
        
    },
    ExclusiveBody: {
        height: 20,
        width: 58,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00E3A3',
        borderWidth: 1,
        borderRadius: 4,
     
    }









});
