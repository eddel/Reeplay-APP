import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function PinInput() {
  const [pin, setPin] = React.useState(["", "", "", ""]);

  const handlePress = (value) => {
    // Find the first empty slot in the PIN array
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
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center",
    justifyContent: "center",
  },
  pinBoxFilled: {
    backgroundColor: "black",
  },
  pinText: {
    color: "white",
    fontSize: 16,
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
