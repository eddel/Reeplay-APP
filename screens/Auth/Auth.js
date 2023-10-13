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
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Video
          ref={video}
          style={{ flex: 1 }}
          source={{
            uri: "https://res.cloudinary.com/dafitwjme/video/upload/v1686415737/Tecno_1_qturgk.mp4",
          }}
          useNativeControls={false}
          resizeMode="cover"
          isLooping
          shouldPlay={isFocused}
        />
      </View>

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
      <StatusBar hidden={true} />

      <View style={styles.BtnWrapper}>
        {/* Rest of your UI remains the same */}
        {/* ... */}
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
  // ... Rest of your styles
});
