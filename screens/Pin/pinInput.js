import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { TextInput, View, Text } from "react-native";
import PropTypes from 'prop-types';

const PinInput = ({ correctPin, onPinSuccess, incorrectPinMessage }) => {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [error, setError] = useState(false);
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const handleChange = (text, ref, setPin) => {
    if (text === "") {
      // If the text is empty (backspace), clear all digits.
      setPin("");
      if (ref.current) {
        ref.current.clear();
        // Move focus to the previous input box.
        ref.current.focus();
      }
    } else {
      setPin(text);
      if (text.length === 1 && ref.current) {
        ref.current.focus();
      }
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    if (pin1 + pin2 + pin3 + pin4 === correctPin) {
      setError(false);
      setTimeout(() => {
        onPinSuccess();
      }, 1000);
    } else {
      pin1 !== "" && setError(true);
      setPin1("");
      setPin2("");
      setPin3("");
      setPin4("");
      pin1Ref.current.focus();
    }
  }, [pin4, correctPin, onPinSuccess]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {error ? (
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "robotobold",
              color: "red",
            }}
          >
            {incorrectPinMessage}
          </Text>
        </View>
      ) : null}
      <View style={styles.container}>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin2Ref, setPin1)}
            value={pin1}
            ref={pin1Ref}
          />
        </View>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin3Ref, setPin2)}
            value={pin2}
            ref={pin2Ref}
          />
        </View>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin4Ref, setPin3)}
            value={pin3}
            ref={pin3Ref}
          />
        </View>
        <View style={styles.pinContainer}>
          <TextInput
            style={styles.pinInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, pin4Ref, setPin4)}
            value={pin4}
            ref={pin4Ref}
          />
        </View>
      </View>
    </View>
  );
};

PinInput.propTypes = {
  correctPin: PropTypes.string.isRequired,
  onPinSuccess: PropTypes.func.isRequired,
  incorrectPinMessage: PropTypes.string,
};

PinInput.defaultProps = {
  incorrectPinMessage: "Incorrect PIN. Please try again.",
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pinContainer: {
    marginHorizontal: 5,
  },
  pinInput: {
    height: 55,
    width: 50,
    fontFamily: "robotobold",
    fontSize: 30,
    color: "#111111",
    textAlign: "center",
    backgroundColor: "#FCFCFB",
    borderRadius: 5,
    alignSelf: "center",
  },
};

export default PinInput;
