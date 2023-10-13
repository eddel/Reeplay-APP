import * as React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as NavigationBar from "expo-navigation-bar";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { FontAwesome5 } from "@expo/vector-icons";
import PinInput from "./pinInput";
export default function Pin({ navigation }) {
  React.useEffect(() => {
    Platform.OS === "android"
      ? NavigationBar.setVisibilityAsync("hidden")
      : null;
  }, []);
  const handlePress = (value) => {
    if (pin1 === "") {
      setPin1(value);
    } else if (pin2 === "") {
      setPin2(value);
    } else if (pin3 === "") {
      setPin3(value);
    } else {
      setPin4(value);
    }
  };

  const renderButton = (value) => {
    return (
      <TouchableOpacity
        key={value}
        style={styles.button}
        onPress={() => handlePress(value)}
      >
        <Text style={styles.buttonText}>{value}</Text>
      </TouchableOpacity>
    );
  };
  const [pin1, setPin1] = React.useState("");
  const [pin2, setPin2] = React.useState("");
  const [pin3, setPin3] = React.useState("");
  const [pin4, setPin4] = React.useState("");
  React.useEffect(() => {
    if (pin1 == 0 && pin2 == 0 && pin3 && pin4) {
      navigation.navigate("Home");
    }
  }, [pin1, pin2, pin3, pin4]);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.TextWrapper}>
        <Text style={styles.WelcomeText}>Welcome back</Text>
        <Text style={styles.WelcomeText}>Edward</Text>
        <Text
          style={[
            styles.WelcomeText,
            { fontSize: rf(11.5), fontFamily: "roboto" },
          ]}
        >
          Use pin to continue
        </Text>
      </View>
      <View style={styles.PinInputWrapper}>
        <View style={styles.PinInputBody}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              paddingHorizontal: "8%",
              marginTop: hp("4%"),
            }}
          >
            <PinInput/>
            {/* <TextInput
              keyboardType="numeric"
              maxLength={1}
              value={pin1}
              onChangeText={setPin1}
              secureTextEntry={true}
              style={styles.PinText}
            />

            <TextInput
              keyboardType="numeric"
              maxLength={1}
              value={pin2}
              onChangeText={setPin2}
              secureTextEntry={true}
              style={styles.PinText}
            />

            <TextInput
              keyboardType="numeric"
              maxLength={1}
              value={pin3}
              secureTextEntry={true}
              onChangeText={setPin3}
              style={styles.PinText}
            />

            <TextInput
              keyboardType="numeric"
              maxLength={1}
              secureTextEntry={true}
              value={pin4}
              onChangeText={setPin4}
              style={styles.PinText}
            /> */}
          </View>
          <View style={styles.ForgotPinBody}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.PasswordText}>Forgot PIN?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ForgotPinBody}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.PasswordText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View style={styles.container1}>
        <View style={styles.row}>
          {renderButton("1")}
          {renderButton("2")}
          {renderButton("3")}
        </View>
        <View style={styles.row}>
          {renderButton("4")}
          {renderButton("5")}
          {renderButton("6")}
        </View>
        <View style={styles.row}>
          {renderButton("7")}
          {renderButton("8")}
          {renderButton("9")}
        </View>
        <View style={styles.row}>
          <View style={styles.zeroButtonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "" }]}
            ></TouchableOpacity>
            {renderButton("0")}
            <TouchableOpacity
              style={[styles.button, { justifyContent: "center" ,backgroundColor:"#D1D2D7"}]}
              onPress={() => {
                if (pin4 != "") {
                  setPin4("");
                } else if (pin3 != "") {
                  setPin3("");
                } else if (pin2 != "") {
                  setPin2("");
                } else {
                  setPin1("");
                }
              }}
            >
              
              <FontAwesome5 name="backspace" size={24} color="#fff" style={{color:'black',alignSelf:'center'}}
                 />
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#D1D2D7",
    padding: 10,
    marginBottom: 500,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
    fontFamily: "roboto",
  },
  zeroButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },

  WelcomeText: {
    fontFamily: "robotobold",
    fontSize: rf(20),
    color: "#fff",
  },
  TextWrapper: {
    height: hp("25%"),
    width: wp("100%"),
    justifyContent: "center",
    paddingHorizontal: wp("5%"),
  },
  PinInputWrapper: {
    height: hp("40%"),
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
  },
  PinInputBody: {
    height: 240,
    width: 280,
    backgroundColor: "#D1D2D7",
    borderRadius: 10,
  },
  PinBox: {
    height: hp("7%"),
    width: hp("7%"),
    borderRadius: 5,
    backgroundColor: "#FCFCFB",
    justifyContent: "center",
    alignItems: "center",
  },
  PinText: {
    height: 55,
    width: 50,
    fontFamily: "robotobold",
    fontSize: rf(30),
    color: "#111111",
    textAlign: "center",
    backgroundColor: "#FCFCFB",
    borderRadius: 5,
    alignSelf: "center",
  },
  ForgotPinBody: {
    height: hp("6%"),
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#00000040",
    justifyContent: "center",
    alignItems: "center",
  },
  PasswordText: {
    fontFamily: "roboto",
    fontSize: rf(11.5),
    color: "#0F5CF1",
    fontWeight: "400",
  },

  centerView: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  pinBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 8,
    borderRadius: 12,
  },
  pinBoxFilled: {
    backgroundColor: "black",
  },
  forgotPinButton: {
    marginTop: 20,
  },
  forgotPinText: {
    fontSize: 14,
    color: "blue",
  },
  cancelButton: {
    marginTop: 10,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  numberPad: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  numberButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  numberButtonText: {
    fontSize: 24,
  },
  emptyButton: {
    width: 60,
    height: 60,
  },
  backspaceButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  backspaceButtonText: {
    fontSize: 16,
    color: "white",
  },
});
