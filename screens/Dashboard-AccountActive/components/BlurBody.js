import React, { useState } from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,

    Image
} from "react-native";
import { BlurView } from 'expo-blur';
export default function BlurBody(props) {
    return (

        <BlurView intensity={110}
            tint='dark'
            style={styles.blur}>
            <TouchableOpacity style={styles.blur}>
                <View style={{
                    height: 20, width: 20,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <Image source={props.Image}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode=
                        'contain' />
                </View>
                <Text style={styles.Visa}>{props.Title}</Text>
                <View style={{
                    height: 8, width: 12,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                    <Image source={require('../../../assets/Forward.png')}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='contain' />
                </View>
            </TouchableOpacity>
        </BlurView>

    );
}

const styles = StyleSheet.create({

    Visa: {
        fontFamily: 'roboto',
        color: '#fff',
        fontSize: rf(9),
        fontWeight: '400'
    },

    blur: {
        height: hp('7%'),
        width: '100%',

        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
        justifyContent: 'space-between',
        marginBottom: 7
    }
});
