import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { CountryPicker } from "react-native-country-codes-picker";
import { AntDesign } from '@expo/vector-icons';
export default function NumField(props) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [pickerValue, setpickerValue] = useState("+234");
  const [showCountry, setShowCountry] = React.useState(false);
  const [cc, setC] = React.useState("+1");
  const [cn, setN] = React.useState("United States");
  const [cf, setF] = React.useState("🇺🇸");
  return (
    <View style={styles.container}>
      <CountryPicker
        show={showCountry}
        pickerButtonOnPress={(item) => {
          setShowCountry(false);
          setC(item.dial_code);
          setF(item.flag);
          setN(item.name.en);
        }}
        style={{
          modal: {
            height: 500,
          },
        }}
        onBackdropPress={() => setShowCountry(false)}
      />
      <TouchableOpacity
        style={{ alignSelf: "center", flexDirection: "row", }}
        onPress={setShowCountry}
      >
        <View style={styles.FlagView}>
          <Text>{cf}</Text>
        </View>
        <Text style={styles.NumText}>{cc}</Text>
        <AntDesign name="caretdown" size={12} color="#fff" />
      </TouchableOpacity>
      <TextInput style={styles.InputText} keyboardType="phone-pad" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("6%"),
    width: wp("70%"),
    borderRadius: 30,
    borderColor: "#FF1313",
    borderWidth: 3,
    alignSelf: "center",
    flexDirection: "row",
    overflow: "hidden",
    paddingHorizontal: wp("5%"),
    alignItems: "center",
    marginTop: hp("3%"),
    overflow: "hidden",
  },
  InputText: {
    height: "100%",
    width: "60%",
    fontSize: rf(11.5),
    color: "#E5E5E5",
    fontFamily: "roboto",
    marginLeft: 8,
  },

  FlagView: {
    height: 15,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  PickerView: {
    width: 40,
  },
  Pickerr: {
    color: "#fff",
    fontSize: 10,
    width: 100,
  },
  PickerInnerView: {
    height: "50%",
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  NumText: {
    color: "#fff",
    fontSize: rf(11.5),
    fontFamily: "roboto",
    marginLeft: 8,
  },
});
