import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import Profile from "./components/Profile";
import BillingCard from "./components/BillingCard";
import CancelMembership from "./components/CancelMembership";
import Header from "../../components/Header/Header";
import { TextInput } from "react-native-gesture-handler";
export default function DashboardAccount({ navigation }) {
  const [editableE, setEditableE] = useState(false);
  const [textE, setTextE] = useState("Reeplayapp@gmail.com");
  const [editablePS, setEditablePS] = useState(false);
  const [textPS, setTextPS] = useState('***********');
  const [editableR, setEditableR] = useState(false);
  const [textR, setTextR] = useState('*****');
  const [editableP, setEditableP] = useState(false);
  const [textP, setTextP] = useState('070123456789');
  const [visible, setVisible] = useState(false);
  const handlePress = () => {
    //Toggling the visibility state of the bottom sheet
    console.log("clicked");
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <View style={{ flex: 1, alignItems: "center" }}>
        <View>
          <Profile />
        </View>
        <View style={styles.Membership}>
          <Text style={styles.MembershipFont}>Membership</Text>
        </View>
        {/* Email Wrapper */}
        <View style={styles.EmailWarrper}>
          <View style={styles.InnerEmail}>
            <TextInput
              style={styles.InnerEmailTxt}
              value={textE}
              editable={editableE}
              onChangeText={setTextE}
            />
            <TouchableOpacity onPress={()=>setEditableE(true)}>
              <Text style={styles.ChangeEmailTxt} >Change Email</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Email Wrapper */}
        {/* Email Wrapper */}
        <View style={styles.PasswordWarrper}>
          <View style={styles.InnerPassword}>
            <Text style={styles.InnerpasswordTxt}>Password: </Text>
            <TextInput
              style={[styles.InnerpasswordTxt,{position:'absolute',left:70}]}
              value={textPS}
              editable={editablePS}
              onChangeText={setTextPS}
            />
            <TouchableOpacity onPress={()=>setEditableP(true)}>
              <Text style={styles.EditTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.InnerPassword}>
            <Text style={styles.InnerpasswordTxt}>REEPLAY PIN: </Text>
            <TextInput
              style={[styles.InnerpasswordTxt,{position:'absolute',left:100}]}
              value={textR}
              editable={editableR}
              onChangeText={setTextR}
            />
            <TouchableOpacity onPress={()=>setEditableR(true)}>
              <Text style={styles.EditTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Email Wrapper */}
        <View
          style={[
            styles.InnerPassword,
            {
              height: wp("5%"),
              marginLeft: 15,
              marginBottom: 5,
              alignItems: "center",
              alignContent: "center",
            },
          ]}
        >
          <Text style={styles.InnerpasswordTxt}>Phone: </Text>
          <TextInput
             style={[styles.InnerpasswordTxt,{position:'absolute',left:70}]}
              value={textP}
              editable={editableP}
              onChangeText={setTextP}
            />
          <TouchableOpacity onPress={()=>setEditableP(true)}>
            <Text style={styles.EditTxt}> Edit</Text>
          </TouchableOpacity>
        </View>
        {/* Billing card*/}
        <BillingCard
          handlePress={handlePress}
          onPress={() => navigation.navigate("DashboardAccountActive")}
        />
        <CancelMembership />
        {/* Billing card*/}
        <View
          style={{
            height: hp("12%"),
            width: wp("50%"),
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#C4C4C4",
              position: "absolute",
              bottom: 15,
              fontFamily: "roboto",
              fontSize: 11,
              fontWeight: "400",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Version 1.0
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: 'center'
  },
  header: {
    width: wp("100%"),
    height: hp("6%"),
    backgroundColor: "#FF1313",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  headertxt: {
    fontSize: rf(12),
    color: "#fff",
    fontWeight: "400",
    fontFamily: "roboto",
  },
  Membership: {
    width: wp("90%"),
  },
  MembershipFont: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#fff",
  },
  EmailWarrper: {
    width: wp("100%"),
    height: hp("6%"),
    alignItems: "flex-end",
  },
  InnerEmail: {
    width: "95%",
    height: "100%",
    borderBottomWidth: 1,
    borderColor: "#00000040",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InnerEmailTxt: {
    fontSize: rf(12),
    color: "#929196",
    fontWeight: "400",
    fontFamily: "roboto",
  },
  ChangeEmailTxt: {
    fontSize: rf(12),
    color: "#fff",
    marginRight: wp("4%"),
    fontWeight: "400",
    fontFamily: "roboto",
  },
  PasswordWarrper: {
    width: wp("100%"),
    height: hp("12%"),
    alignItems: "flex-end",
  },
  InnerPassword: {
    width: "95%",
    height: "45%",
    borderBottomWidth: 1,
    borderColor: "#00000040",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InnerpasswordTxt: {
    fontSize: rf(12),
    color: "#C4C4C4",
    fontWeight: "400",
    fontFamily: "roboto",
  },
  EditTxt: {
    fontSize: rf(12),
    color: "#fff",
    marginRight: wp("5%"),
    fontWeight: "400",
    fontFamily: "roboto",
  },
  Phone: {
    width: wp("90%"),
    height: hp("5%"),

    flexDirection: "row",
    justifyContent: "space-between",
  },
  PhoneTxt: {
    fontSize: rf(12),
    fontWeight: "400",
    color: "#fff",
    fontFamily: "roboto",
  },
});
