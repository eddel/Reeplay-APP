import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from "react-native";

const ExitApp = ({ modalVisible, setModalVisible, exitYes }) => {
  return modalVisible ? (
    <View style={style.PopupClear}>
      <Image
        source={require("../assets/cross.png")}
        style={{ width: 100, height: 100, alignSelf: "center" }}
        resizeMode="contain"
      />
      <Text style={style.modalText}>Are you sure you want to Exit app?</Text>
      <Pressable
        style={[style.button, { backgroundColor: "#676571", marginTop: 20 }]}
        onPress={setModalVisible}
      >
        <Text style={style.textStyle}>No</Text>
      </Pressable>
      <Pressable
        style={[
          style.button,
          style.buttonClose,
          { backgroundColor: "#FF1313" },
        ]}
        onPress={exitYes}
      >
        <Text style={style.textStyle}>Yes</Text>
      </Pressable>
    </View>
  ) : null;
};

const style = StyleSheet.create({
  PopupClear: {
    height: 368,
    width: 253,
    backgroundColor: "white",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    zIndex: 100,
    bottom: "30%",
  },
  modal: {
    alignSelf: "center",
    marginTop: 100,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    padding: 10,
    width: "70%",
    height: 320,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    width: "90%",
    alignSelf: "center",
    margin: 6,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontFamily: "roboto",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "roboto",
  },
});

export default ExitApp;
