import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const Pin = ({ value, onChange }) => {
  return (
    <View>
      <Text>Enter your PIN:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: "black", padding: 10 }}
        value={value}
        onChangeText={onChange}
        secureTextEntry={true}
      />
    </View>
  );
};

export default Pin;
