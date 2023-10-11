import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native";
export default function Profile(props) {
  const [editableN, setEditableN] = useState(false);
  const [textN, setTextN] = useState("Edward Bette");

  // const handleEditPressN = () => {
  //   setEditableN(true);
  // };
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.Profile}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        ) : (
          <Image
            source={require("../../../assets/ProfilePic.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        )}
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 43,
          left: 35,
          backgroundColor: "#D9D9D9",
          borderRadius: 3,
          width: 14,
          height: 14,
        }}
      >
        <Entypo
          name="edit"
          size={10}
          color="black"
          style={{ alignSelf: "center", marginLeft: 1, marginTop: 1 }}
          onPress={pickImage}
        />
      </TouchableOpacity>
      <View style={styles.title}>
        <TextInput
          style={styles.titleTxt}
          value={textN}
          editable={editableN}
          onChangeText={setTextN}
        />
      </View>

      <TouchableOpacity style={styles.Edit} onPress={() => setEditableN(true)}>
        <Text style={styles.EditTxt}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("12%"),
    flexDirection: "row",
    alignItems: "center",
  },
  Profile: {
    width: hp("6%"),
    height: hp("6%"),
    borderRadius: 100,
    overflow: "hidden",
  },
  title: {
    width: "75%",
    height: "50%",
    justifyContent: "center",
    paddingHorizontal: "4%",
  },
  Edit: {
    width: "12%",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  titleTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily: "robotobold",
  },
  EditTxt: {
    fontSize: rf(12),
    color: "#fff",
    fontFamily: "roboto",
  },
});
