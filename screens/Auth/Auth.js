import { Video } from "expo-av";
import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
export default function Auth({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [videoStatus, setVideoStatus] = React.useState(true);
  const [soundStatus, setSoundStatus] = React.useState(true);

  const toggleSound = async () => {
    const soundEnabled = !soundStatus;
    setSoundStatus(soundEnabled);
    if (video.current) {
      await video.current.setIsMutedAsync(!soundEnabled);
    }
  };
  const isFocused = useIsFocused();

  React.useEffect(() => {
    if (isFocused) {
      playVideo();
    } else {
      pauseVideo();
    }
  }, [isFocused]);

  const playVideo = async () => {
    if (video.current) {
      await video.current.playAsync();
    }
  };

  const pauseVideo = async () => {
    if (video.current) {
      await video.current.pauseAsync();
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={toggleSound} style={styles.soundButton}>
        {soundStatus ? (
          <Image
            source={require("../../assets/volumeIcon.png")}
            resizeMode="cover"
            style={{ width: 90, height: 40, marginTop: -5 }}
          />
        ) : (
          <Image
            source={require("../../assets/volumeOff.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginTop: 10 }}
          />
        )}
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Video
        ref={video}
        style={{ height: "100%", width: "100%" }}
        source={{
          uri: "https://res.cloudinary.com/dafitwjme/video/upload/v1686415737/Tecno_1_qturgk.mp4",
        }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay={isFocused}
      />
      <View style={styles.BtnWrapper}>
        <TouchableOpacity
          onPress={() => {
            setVideoStatus(false);
            navigation.navigate("Login");
          }}
          style={styles.LoginBtnBody}
        >
          <Text style={styles.LoginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setVideoStatus(false);
            navigation.navigate("Register");
          }}
          style={styles.CreateAccountBtn}
        >
          <Text style={styles.LoginText}>Create a New Account</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.TermsText}>Read the </Text>
          <TouchableOpacity
            onPress={() => {
              setVideoStatus(false);
              navigation.navigate("TermsConditions");
            }}
          >
            <Text
              style={[styles.TermsText, { textDecorationLine: "underline" }]}
            >
              Terms
            </Text>
          </TouchableOpacity>
          <Text style={styles.TermsText}> of use and </Text>
          <TouchableOpacity
            onPress={() => {
              setVideoStatus(false);
              navigation.navigate("PrivacyPolicy");
            }}
          >
            <Text
              style={[styles.TermsText, { textDecorationLine: "underline" }]}
            >
              Privacy policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageWrapper: {
    height: hp("100%"),
    width: wp("100%"),
    justifyContent: "flex-end",
  },
  BtnWrapper: {
    height: hp("30%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 0,
  },
  LoginBtnBody: {
    height: hp("7%"),
    width: wp("70%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
  },
  LoginText: {
    fontSize: rf(11),
    color: "#fff",
    fontFamily: "robotobold",
  },
  CreateAccountBtn: {
    height: hp("7%"),
    width: wp("70%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#FF1313",
  },
  TermsText: {
    color: "#E5E5E5",
    fontSize: rf(8),
    fontWeight: "400",
    fontFamily: "roboto",
  },
  soundButton: {
    position: "absolute",
    top: 20,
    left: 10,
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  soundButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  underline: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    width: 100,
    marginTop: 5,
  },
});
