import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import Header from './components/Header'


export default function PrivacyPolicy({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />

            <Header Title='Privacy Policy'
                navigation={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.ContentView}>
                    <Text style={[styles.UpdateText, { fontSize: 16, }]}>Last updated: March 14, 2023</Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12 }]}>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</Text>
                    <Text style={[styles.UpdateText, { fontSize: 16, }]}>Interpretation and Definitions</Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12 }]}>
                        Interpretation

                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12 }]}>
                        Interpretation
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

                    </Text>

                    <Text style={[styles.UpdateText, { fontSize: 16,  }]}>Definitions</Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12 }]}>
                        For the purposes of this Privacy Policy:

                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                        •	Account means a unique account created for You to access our Service or parts of our Service.
                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                        •	Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>•	Application refers to Reeplay, the software program provided by the Company</Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                        •	Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Fakulty Media and Technology, Cordial close, Ajah, Lagos.
                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                        •	Country refers to: Nigeria
                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                        •	Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                        •	Personal Data is any information that relates to an identified or identifiable individual.
                    </Text>
                    <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                        <Text style={[styles.Content, { fontWeight: '400', fontSize: 12, marginHorizontal: 10 }]}>
                            •	Service refers to the Application.
                        </Text>
                    </Text>
                </View>

            </ScrollView >


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    UpdateText: {
        fontSize: rf(10),
        fontFamily: 'robotobold',
        fontWeight: '400',
        color: '#fff',
        marginVertical: 5,
        textAlign: 'justify'
    },
    ContentView: {
        paddingHorizontal: wp('5%'),
        color:'#fff'

    },
    Content: {
        fontSize: rf(9),
        fontWeight: '400',
        color: '#fff',
        marginVertical: 5,
        fontFamily: 'roboto',
    }





});
