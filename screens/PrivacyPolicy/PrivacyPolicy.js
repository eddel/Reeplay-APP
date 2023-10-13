import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import Header from './components/Header';
import { Ionicons } from '@expo/vector-icons';

export default function PrivacyPolicy({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="ios-arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Header Title='Privacy Policy' />
            <ScrollView contentContainerStyle={styles.contentView}>
                <Text style={styles.updateText}>Last updated: March 14, 2023</Text>
                <Text style={styles.content}>
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You. We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </Text>
                <Text style={styles.updateText}>Interpretation and Definitions</Text>
                {/* ... Your other content ... */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentView: {
        paddingHorizontal: wp('5%'),
        paddingVertical: 10,
    },
    backButton: {
        backgroundColor: 'red',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        left: 20,
    },
    updateText: {
        fontSize: rf(10),
        fontFamily: 'robotobold',
        fontWeight: '400',
        color: 'black',
        marginVertical: 5,
        textAlign: 'justify',
    },
    content: {
        fontSize: rf(9),
        fontWeight: '400',
        color: 'black',
        marginVertical: 5,
        fontFamily: 'roboto',
    },
});
