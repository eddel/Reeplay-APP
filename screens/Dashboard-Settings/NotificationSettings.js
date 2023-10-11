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
    Switch
} from "react-native";

import NotificationCard from "./components/NotificationCard";
import BiometricCard from "./components/BiometricCard";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header/Header";

export default function NotificationSetting({ navigation }) {
    const [showpop, setShowPop] = useState();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Header />
            <View style={{ alignItems: 'center' }} >
                <View style={[styles.title, { marginTop: 20 }]}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'roboto', fontWeight: 'bold', color: 'white' }}>
                            Allow Notifications
                        </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#222" }}
                            thumbColor={isEnabled ? "#FF1313" : "white"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </View>


                </View>


                <View style={styles.Wrapper}>
                    <View style={styles.layer}>
                        <NotificationCard title="New Services Available" switch downText={'Allow  ReePlay send you notifications every time we add or announce a new service.'} />
                    </View>
                </View>

                <NotificationCard title="Upcoming Contents" switch
                />
                <View style={styles.Wrapper}>
                    <View style={styles.layer}>
                        <NotificationCard title="New Arrivals"
                            switch />
                    </View>
                </View>

                <NotificationCard title="Live Channels" switch
                />
                <View style={styles.Wrapper}>
                    <View style={styles.layer}>
                        <NotificationCard title="Subscriptions" switch
                        />
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        // alignItems: "center",
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
        backgroundColor: "#9291961A",
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

