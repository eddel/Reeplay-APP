import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function PinInput() {
  const [pin, setPin] = React.useState(["", "", "", ""]);
  const [error, setError] = React.useState(null);

  const handlePress = (value) => {
    const emptyIndex = pin.findIndex((entry) => entry === "");

    if (emptyIndex !== -1) {
      const updatedPin = [...pin];
      updatedPin[emptyIndex] = value;
      setPin(updatedPin);
    }
  };

  const handleBackspace = () => {
    const lastFilledIndex = pin.findIndex((entry) => entry !== "");

    if (lastFilledIndex !== -1) {
      const updatedPin = [...pin];
      updatedPin[lastFilledIndex] = "";
      setPin(updatedPin);
      setError(null); // Clear any previous errors when the user removes a digit.
    }
  };

  const handleConfirm = () => {
    if (pin.join("") === "1234") {
      // Replace "1234" with your actual PIN for validation.
      // The PIN is correct, you can proceed.
      setError(null);
      // Add your logic here to proceed when the PIN is correct.
    } else {
      setError("Invalid PIN. Please try again.");
      // Handle the case when the PIN is incorrect.
      setPin(["", "", "", ""]); // Clear the PIN for a new attempt.
    }
  };

  return (
    <View style={styles.pinContainer}>
      {pin.map((entry, index) => (
        <View
          key={index}
          style={[
            styles.pinBox,
            entry ? styles.pinBoxFilled : null,
          ]}
        >
          <Text style={styles.pinText}>{entry}</Text>
        </View>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}

      <View style={styles.numberPad}>
        <View style={styles.row}>
          {[1, 2, 3].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.numberButton}
              onPress={() => handlePress(value.toString())}
            >
              <Text style={styles.numberButtonText}>{value}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.row}>
          {[4, 5, 6].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.numberButton}
              onPress={() => handlePress(value.toString())}
            >
              <Text style={styles.numberButtonText}>{value}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.row}>
          {[7, 8, 9].map((value) => (
            <TouchableOpacity
              key={value}
              style={styles.numberButton}
              onPress={() => handlePress(value.toString())}
            >
              <Text style={styles.numberButtonText}>{value}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.emptyButton}></TouchableOpacity>
          <TouchableOpacity
            style={styles.numberButton}
            onPress={() => handlePress("0")}
          >
            <Text style={styles.numberButtonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backspaceButton}
            onPress={handleBackspace}
          >
            <Text style={styles.backspaceButtonText}>←</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... (your existing styles)
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
  confirmButton: {
    width: 200,
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: "white",
    fontSize: 18,
  },
});
