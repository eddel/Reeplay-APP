import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

export default function FaceTouchId() {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [biometricType, setBiometricType] = useState(null);
  const [loading, setloading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    checkDeviceForBiometrics();
  }, []);

  const checkDeviceForBiometrics = async () => {
    setloading(true);
    const isEnrolled = await LocalAuthentication.hasHardwareAsync();
    const biometricTypes =
      await LocalAuthentication.supportedAuthenticationTypesAsync();

    setIsEnrolled(isEnrolled);

    if (
      biometricTypes.includes(LocalAuthentication.AuthenticationType.FACE_ID)
    ) {
      setBiometricType("face");
    } else if (
      biometricTypes.includes(
        LocalAuthentication.AuthenticationType.FINGERPRINT
      )
    ) {
      setBiometricType("fingerprint");
    }
     setloading(false)
  };

  const authenticate = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      navigation.navigate("Home");
    } else {
      alert("Authentication failed!");
    }
  };

  const renderBiometricButton = (biometricType, iconName, buttonLabel) => {
    return (
      <TouchableOpacity
        style={styles.biometricButton}
        onPress={() => authenticate(biometricType)}
      >
        <Ionicons name={iconName} size={48} color="white" />
        <Text style={styles.biometricLabel}>{buttonLabel}</Text>
      </TouchableOpacity>
    );
  };

  return !loading ? (
    <View style={styles.container}>
      {isEnrolled && biometricType && (
        <View>
          {biometricType === "face" &&
            renderBiometricButton(
              LocalAuthentication.AuthenticationType.FACE_ID,
              "ios-face-id",
              "Login with Face ID"
            )}
          {biometricType === "fingerprint" &&
            renderBiometricButton(
              LocalAuthentication.AuthenticationType.FINGERPRINT,
              "ios-finger-print",
              "Login with Touch ID"
            )}
        </View>
      )}
      {!isEnrolled && (
        <Text style={styles.infoText}>
          Biometrics not available on this device.
        </Text>
      )}
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#fff'
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "roboto",
    color: "#fff",
  },
  biometricButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  biometricLabel: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    fontFamily: "roboto",
  },
});
