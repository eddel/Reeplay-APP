import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";

export default function HomeMenuCard(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={props.ContnueBody}>
        <Text style={props.ContinueText}>{props.title}</Text>
      </View>
      <View style={props.ContinueWrapper}>
        <ScrollView horizontal={true}>
          {props?.data?.map((x) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(x.screen)}>
                <Image
                  source={x.source}
                  style={props.picStyle}
                  resizeMode="cover"
                />
               
              </TouchableOpacity>
            );
          })}
          <View style={{marginLeft:20}} />
        </ScrollView>
      </View>
    </>
  );
}
export function HomeMenuCardPop(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={props.ContnueBody}>
        <Text style={props.ContinueText}>{props.title}</Text>
      </View>
      <View style={props.ContinueWrapper}>
        <ScrollView horizontal={true}>
          {props?.data?.map((x, index) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(x.screen)}>
                {/* <Image
                  source={x.source}
                  style={props.picStyle}
                  resizeMode="cover"
                /> */}
                <ImageBackground
                  source={x.source}
                  style={props.picStyle}
                  resizeMode="cover"
                >
                  <View style={{ backgroundColor: "red", width: 18,height:21,borderTopLeftRadius:5,borderBottomRightRadius:5 }}>
                    <Text style={{ fontFamily: "robotobold", color: "#fff",fontSize:10,top:Platform.OS === "ios" ? 4 : 2.5,left: -0.5,alignSelf:'center' }}>{`0${
                      index + 1
                    }`}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
          <View style={{marginLeft:20}} />
        </ScrollView>
      </View>
    </>
  );
}
