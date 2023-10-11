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
    ScrollView
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import Header from "../../components/Header/Header";

export default function Languages({ navigation }) {
    const [checked, setChecked] = React.useState();
    const [value, setValue] = React.useState();
    const Suggetions = [
        {
            id: 1,
            title: 'English (US)',
        },
        {
            id: 2,
            title: 'English (UK)',


        },


    ]
    const OtherLnaguages = [
        {
            id: 1,
            title: 'Arabic',
        },
        {
            id: 2,
            title: 'Arabic',
        },
        {
            id: 3,
            title: 'Englush (US)',
        },
        {
            id: 4,
            title: 'English (UK)',
        },
        {
            id: 5,
            title: 'English(US)',
        },
        {
            id: 6,
            title: 'English(UK)',
        },
        {
            id: 7,
            title: 'English(US)',
        },
        {
            id: 8,
            title: 'English(UK)',
        },
        {
            id: 9,
            title: 'English(US)',
        },
        {
            id: 10,
            title: 'English(UK)',
        },
        {
            id: 11,
            title: 'English(US)',
        },
        {
            id: 12,
            title: 'English(UK)',
        },
        {
            id: 13,
            title: 'English(UK)',
        },
    ]
    const handleValueChange = (value) => {
        setChecked(value);
        setValue();
    };
    const handleValue = (item) => {
        setValue(item);
        setChecked();
    };
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />


            <TouchableOpacity

                onPress={() => navigation.goBack()}
            >
                <Header />
            </TouchableOpacity>
            <ScrollView>
                <View style={{ margin: 20, marginBottom: 0 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'roboto', fontWeight: '500', color: 'white' }}>
                        Language
                    </Text>
                </View>
                <View style={{ marginTop: 30, marginLeft: 20 }}>
                    <Text style={{ fontSize: 16, fontFamily: 'roboto', fontWeight: '500', color: '#FFCC00' }}>
                        Suggested
                    </Text>
                </View>
                <View style={{ marginTop: 17 }}>
                    {Suggetions.map((item, index) => {
                        return (

                            <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                    <View style={{ width: '60%' }}>

                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: '500', fontFamily: 'roboto' }} >{item.title}</Text>


                                    </View>
                                    <RadioButton

                                        uncheckedColor="#FF1313"
                                        color="#FF1313"
                                        value={item.title}
                                        status={checked === item.title ? 'checked' : 'unchecked'}
                                        onPress={() => handleValueChange(item.title)}
                                    />

                                </View>
                            </View>

                        )
                    })
                    }
                    <View style={{ marginTop: 30 }}>
                        {OtherLnaguages.map((item, index) => {
                            return (

                                <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                                        <View style={{ width: '60%' }}>

                                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500', fontFamily: 'roboto' }} >{item.title}</Text>


                                        </View>
                                        <RadioButton

                                            uncheckedColor="#FF1313"
                                            color="#FF1313"
                                            value={item.id}
                                            status={value === item.id ? 'checked' : 'unchecked'}
                                            onPress={() => handleValue(item.id)}
                                        />

                                    </View>
                                </View>

                            )
                        })
                        }
                    </View>
                </View>
            </ScrollView>





        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    header: {
        width: wp("100%"),
        height: hp("6%"),
        backgroundColor: "#FF1313",
        justifyContent: "center",
        paddingHorizontal: wp('5%'),

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
        width: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('4%')
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

