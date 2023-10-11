import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import NetInfo from "@react-native-community/netinfo";
const NoInternet = () => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected) {
        setModalVisible(true);
      }
    });

    return () => unsubscribe();
  }, []);
  return modalVisible ? (
    <View style={style.PopupClear}>
      <Image
        source={require("../assets/cross.png")}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          marginTop: 40,
        }}
        resizeMode="contain"
      />
      <Text style={style.modalText}>Your internet connection is lost.</Text>
      <Text style={style.modalText}>Fix connection and retry.</Text>
      <Pressable
        style={{ backgroundColor: "#fff", marginTop: 100 }}
        onPress={() => setModalVisible(false)}
      >
        <Text style={style.textStyle}>Retry</Text>
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
  modalView: {
    margin: 20,
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    padding: 35,
    width: "80%",
    height: 380,
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
    color: "black",
     
    textAlign: "center",
    fontFamily:'roboto'
  },
  modalText: {
    marginBottom: 6,
    textAlign: "center",
    fontFamily:'roboto'
  },
});

export default NoInternet;
