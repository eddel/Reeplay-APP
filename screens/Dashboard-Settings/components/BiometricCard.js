import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, Image, View, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function BiometricCard(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.Wrapper}>
      <View style={styles.Layer}>
        <View style={styles.Biometric}>
          <View style={{ height: 18, width: 18, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../../../assets/Icons/fingerprint.png')}
              style={{ height: '100%', width: '100%' }}
              resizeMode='contain' />
          </View>

          <View style={styles.Inner}>

            <View>
              <Text style={styles.NotificationTxt}> Biometrics</Text>
              <Text style={styles.Notificationdisc}>
                Unlock the App and Authorize ReePlay Transactions with your
              </Text>
              <Text style={styles.Notificationdisc}>
                Device Biometric Security.
              </Text>
            </View>
          </View>
          <Switch
            trackColor={{ false: "#767577", true: "#222" }}
            thumbColor={isEnabled ? "#FF1313" : "#C4C4C4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: rf(15),
    fontWeight: "400",
    fontFamily: 'roboto',
    color: "#fff",
    marginLeft: 10,
  },
  Notificationdisc: {
    fontSize: rf(9),
    color: "#fff",
    marginLeft: 12,
    fontWeight: '400',
    fontFamily: 'roboto'
  },
});
