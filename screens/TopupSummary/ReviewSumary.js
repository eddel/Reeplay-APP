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
    ImageBackground,
    Image,
    StatusBar,
    Switch,
    TextInput
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { AntDesign, MaterialIcons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import Header from "../../components/Header/Header";

export default function ReviewSumary({ navigation }) {
    const [pickerValue, setpickerValue] = useState("VISA | MASTERCARD | VERVE");
    const [Topup, setTopup] = useState(false)
    var fromTopup = false;
    var fromMovie = false;


    return (
        <View style={styles.container}>
            <StatusBar style='auto' />

            <View>
                <Header />
            </View>
            <View style={{ justifyContent: 'center', flex: 1 }}>

                <Text style={{ fontSize: 18, fontWeight: '700', fontFamily: 'roboto', color: 'white', textAlign: 'center' }}>REVIEW SUMMARY</Text>

                <View style={{ marginVertical: 59, marginBottom: 11, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '10%' }}>
                    <Text style={{ color: 'white', fontSize: 14, alignSelf: 'center', fontWeight: '400', fontFamily: 'roboto' }}>Amount</Text>
                    <Text style={{ color: 'white', fontSize: 14, alignSelf: 'center', fontWeight: '400', fontFamily: 'roboto' }}>₦500.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '10%', marginBottom: 19, }}>
                    <Text style={{ color: 'white', fontSize: 14, textAlign: 'left', fontWeight: '400', fontFamily: 'roboto' }}>Fee</Text>
                    <Text style={{ color: 'white', fontSize: 14, textAlign: 'left', fontWeight: '400', fontFamily: 'roboto', marginRight: 15 }}>₦0.00</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', fontWeight: '400', marginHorizontal: '10%', marginBottom: 22, borderBottomColor: '#92919614', borderWidth: 1, }} ></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', fontWeight: '400', marginHorizontal: '10%', marginBottom: 49 }}>
                    <Text style={{ color: 'white', fontSize: 14, alignSelf: 'center', fontFamily: 'roboto' }}>Total</Text>
                    <Text style={{ color: 'white', fontSize: 14, alignSelf: 'center', fontFamily: 'roboto' }}>₦500.00</Text>
                </View>
                <View style={styles.PickerView}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: '700', fontFamily: 'roboto', marginLeft: 10 }}>{pickerValue}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { setTopup(true) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                            <Text style={{ color: '#FF1313', fontSize: 13, fontWeight: 'bold', marginRight: 5 }}>Change</Text>
                            <FontAwesome name="caret-down" size={18} color="red" style={{ marginRight: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 41.39, width: '46%', alignSelf: 'center', backgroundColor: '#FF1313', borderRadius: 27, marginTop: '10%', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { fromTopup = true; navigation.navigate('GiftRedeem', { fromTopup, fromMovie }) }}>
                        <Text style={{ fontSize: 15, fontWeight: '600', fontFamily: 'roboto', color: 'white', textAlign: 'center' }}   >Confirm Payment</Text>
                    </TouchableOpacity>
                </View>

                {Topup == true ?
                    <BlurView intensity={120}
                        tint='dark'
                        style={{ position: 'absolute', bottom: 0, flex: 1, width: '100%', }}>
                        <View style={{ flex: 1, }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 2, backgroundColor: '#00000040', height: 40, justifyContent: 'space-between', marginVertical: 6, alignItems: 'center' }}>
                                <MaterialCommunityIcons name="wallet" size={20} color={'white'} style={{ marginLeft: 20 }} />
                                <TouchableOpacity onPress={() => { setpickerValue('WALLET BALANCE'); setTopup(false) }} style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={[styles.ShareText, { textAlign: 'center', fontSize: 14, fontWeight: '500', color: 'white', alignSelf: 'center' }]}>WALLET BALANCE</Text>
                                </TouchableOpacity>
                                <AntDesign name="right" size={rf(12)} color="transparent" style={{ marginRight: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 2, backgroundColor: '#00000040', height: 40, alignItems: 'center', alignContent: 'center', marginBottom: 6 }}>
                                <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                                    <Image source={require('../../assets/Mastercard.png')} style={{ height: 17, width: 23, marginLeft: 20 }} />
                                    <Image source={require('../../assets/Visa.png')} style={{ height: 14, width: 25, marginLeft: 5, }} />
                                </View>
                                <TouchableOpacity onPress={() => { setpickerValue('VISA|MASTERCARD|VERVE'); setTopup(false) }} >

                                    <Text style={[styles.ShareText, { textAlign: 'center', fontSize: 14, fontWeight: '500', color: 'white', }]}>VISA|MASTERCARD|VERVE</Text>

                                </TouchableOpacity>
                                <AntDesign name="right" size={rf(12)} color="#fff" style={{ marginRight: 10 }} />

                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 2, backgroundColor: '#00000040', height: 40, alignItems: 'center', marginBottom: 6 }}>
                                <Image source={require('../../assets/applepay.png')} style={{ height: 16, width: 40, marginLeft: 15 }} />
                                <TouchableOpacity onPress={() => { setpickerValue('APPLE PAY'); setTopup(false) }}>

                                    <Text style={[{ textAlign: 'left', fontSize: 14, fontWeight: '500', color: 'white', }]}>APPLE PAY</Text>
                                </TouchableOpacity>
                                <AntDesign name="right" size={rf(12)} color="#fff" style={{ marginRight: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 2, backgroundColor: '#00000040', height: 40, alignItems: 'center', marginBottom: 6 }}>
                                <Image source={require('../../assets/paypal.png')} style={{ height: 17, width: 17, marginLeft: 20 }} />
                                <TouchableOpacity onPress={() => { setpickerValue('PAY PAL'); setTopup(false) }}>

                                    <Text style={[{ textAlign: 'left', fontSize: 14, fontWeight: '500', color: 'white', }]}>PAY PAL</Text>
                                </TouchableOpacity>
                                <AntDesign name="right" size={rf(12)} color="#fff" style={{ marginRight: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 2, backgroundColor: '#00000040', height: 40, alignItems: 'center', marginBottom: 6 }}>
                                <Image source={require('../../assets/bank.png')} style={{ height: 18, width: 20, marginLeft: 20 }} />
                                <TouchableOpacity onPress={() => { setpickerValue('USSD | BANK TRANSFER'); setTopup(false) }}>

                                    <Text style={[{ textAlign: 'left', fontSize: 14, fontWeight: '500', color: 'white', }]}>USSD | BANK TRANSFER</Text>
                                </TouchableOpacity>
                                <AntDesign name="right" size={rf(12)} color="#fff" style={{ marginRight: 10 }} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 2, backgroundColor: '#00000040', height: 40, alignItems: 'center', marginBottom: 6 }}>
                                <Image source={require('../../assets/crypto.png')} style={{ height: 20, width: 20, marginLeft: 20 }} />
                                <TouchableOpacity onPress={() => { setpickerValue('CRYPTO'); setTopup(false) }} >

                                    <Text style={[{ textAlign: 'left', fontSize: 14, fontWeight: '500', color: 'white', }]}>CRYPTO</Text>
                                </TouchableOpacity >
                                <AntDesign name="right" size={rf(12)} color="#fff" style={{ marginRight: 10 }} />
                            </View>
                        </View>
                    </BlurView>
                    : null}

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        // justifyContent: 'center'
    },
    header: {
        width: wp("100%"),
        height: hp("6%"),
        backgroundColor: "#FF1313",
        justifyContent: "center",
        paddingHorizontal: wp('5%'),
        position: 'absolute',
        top: 0,
    },
    PickerView: {
        borderColor: '#FF1313',
        borderWidth: 1,
        height: 54,
        width: '75%',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 18,
        flexDirection: 'row'
    },
    rightContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    customText: {
        marginRight: 5,
    },
    Pickerr: {

        fontSize: 10,
        color: 'white',
        height: 40,
        width: 40
    },
    PickerInnerView: {
        height: '50%',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    headertxt: {
        fontSize: rf(15),
        color: "#fff",
        fontFamily: 'roboto',
        fontWeight: '400'
    },
    title: {
        width: wp("90%"),
        height: hp("10%"),
        justifyContent: "center",
    },
    titletxt: {
        fontSize: rf(11),
        fontFamily: 'robotobold',
        color: "#fff",
    },
    Wrapper: {
        width: wp("100%"),
        height: hp("7%"),
        backgroundColor: "#92919614",
        alignItems: "center",


    },
    PopupPremium: {
        height: hp('55%'),
        width: wp('90%'),
        backgroundColor: '#000000',
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 15,
        bottom: hp('20%'),
        alignItems: 'center',
        padding: 10,
        zIndex: 999,
        justifyContent: 'center'
    },
    Logo: {
        height: hp('10%'),
        width: wp('25%'),
        justifyContent: 'center',
        alignItems: 'center',

    },
    Text1: {
        fontFamily: 'roboto',
        fontSize: rf(7),
        color: '#E5E5E5',
        fontWeight: '400',
        textAlign: 'center'
    },
    Text2: {
        fontFamily: 'robotobold',
        fontSize: rf(11),
        color: '#E5E5E5',
        textAlign: 'center',
        marginVertical: 20

    },
    TextView: {

        alignSelf: 'center',
        justifyContent: 'center'

    },
    RegisterBtn: {
        height: hp('7%'),
        width: wp('70%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FF1313',
        borderRadius: 15,
        marginVertical: hp('3%')
    },
    BtnText: {
        fontFamily: 'robotobold',
        fontSize: rf(11),
        color: '#fff'
    },
    closetext: {
        position: 'absolute',
        bottom: 0,
        fontFamily: 'roboto',
        fontWeight: '400',
        fontSize: rf(11),
        color: '#C4C4C4',

    },
    Layer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1A1A1A",
        opacity: 1,
    },
});
const Biometric = StyleSheet.create({
    Wrapper: {
        width: wp("100%"),
        height: hp("8%"),
        backgroundColor: "#C4C4C4",
    },
    Layer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#1A1A1A",
        opacity: 0.8,
        alignItems: "center",
    },
    Biometric: {
        width: wp("95%"),
        height: hp("8%"),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    Inner: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    NotificationTxt: {
        fontSize: rf(10),
        fontWeight: "400",
        fontFamily: 'roboto',
        color: "#fff",
        marginLeft: 10,
    },
    Notificationdisc: {
        fontSize: rf(6),
        color: "#fff",
        marginLeft: 12,
        fontWeight: '400',
        fontFamily: 'roboto'
    },
});

