import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function NewsChannelCard(props) {
  return (
    <>
      <View
        style={{
          // marginHorizontal: 20,
          marginLeft: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 3,
          marginRight: 8,
        }}
      >
        <Text style={props.ContinueText}>{props.title}</Text>
        <TouchableOpacity onPress={() => alert("See All")}>
          <Text
            style={{
              fontSize: 10,
              color: "#FF1313",
              fontWeight: "400",
              fontFamily: "roboto",
            }}
          ></Text>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignContent: "center",
            // marginHorizontal: 10,
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <ScrollView horizontal={true}>
            {props?.data?.map((x) => {
              return (
                <ImageBackground
                  source={x.source}
                  style={[
                    props.picStyle,
                    {
                      overflow: "hidden",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                  resizeMode="cover"
                >
                  {props.play && (
                    <LinearGradient
                      colors={["rgba(0,0,0,0.5)", "transparent"]}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        left: 0,
                        height: 500,
                        flexGrow: 1,
                      }}
                    />
                  )}
                  <Image source={props?.play} resizeMode="cover" />
                </ImageBackground>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
