import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
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
    setloading(false);
    
    // Automatically trigger biometric authentication once we have the information
    if (isEnrolled) {
      authenticateAutomatically();
    }
  };

  const authenticateAutomatically = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();

    if (success) {
      navigation.navigate("Home");
    } else {
      alert("Authentication failed!");
    }
  };

  return !loading ? (
    <View style={styles.container}>
      {isEnrolled && biometricType && (
        <Text style={styles.infoText}>
          {biometricType === "face"
            ? "Logging in with Face ID..."
            : "Logging in with Touch ID..."}
        </Text>
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
    backgroundColor: "#fff",
  },
  infoText: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "roboto",
    color: "#000", // Change color to be visible
  },
});
