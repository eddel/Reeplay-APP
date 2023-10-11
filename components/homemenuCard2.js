import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";

export default function HomeMenuCard2(props) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          // marginHorizontal: 20,
          marginLeft: 24,
          top: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          marginRight: 18,
          
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
          >
            SEE All
          </Text>
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
      </View>
    </>
  );
}

export function HomeMenuCard3(props) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          // marginHorizontal: 20,
          marginLeft: 24,
          top: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          marginRight: 18,
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
          >
            SEE All
          </Text>
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
                <TouchableOpacity onPress={() => navigation.navigate(x.screen)}>
                  <Image
                    source={x.source}
                    style={props.picStyle}
                    resizeMode="cover"
                  />
                  <LinearGradient
                    colors={["transparent", "#000000", "#000000"]}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: -10,
                      left: 0,
                      height: 500,
                      flexGrow: 1,
                    }}
                  />
                  <View style={{ position: "absolute", top: 50, left: 70 }}>
                    <Image source={x.icon} resizeMode="contain" style={{width:38,height:38.13}}/>
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "roboto",
                        left: -30,
                        top: 12,
                        fontSize:9.5
                      }}
                    >
                      {x.title}
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "robotobold",
                        left: -30,
                        top: 10,
                        fontSize:12
                      }}
                    >
                      {x.subtitle}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <View style={{marginLeft:20}} />
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export function HomeMenuCard4(props) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          // marginHorizontal: 20,
          marginLeft: 24,
          top: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20,
          marginRight: 18,
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
          >
            SEE All
          </Text>
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
                <TouchableOpacity onPress={() => navigation.navigate(x.screen)}>
                  <Image
                    source={x.source}
                    style={props.picStyle}
                    resizeMode="cover"
                  />
                  <LinearGradient
                    colors={["transparent", "#000000", "#000000"]}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: -10,
                      left: 0,
                      height: 500,
                      flexGrow: 1,
                    }}
                  />
                  <View style={{ position: "absolute", top: 50, left: 70 }}>
                    <Image source={x.icon}  resizeMode="contain" style={{width:38,height:38.13}} />
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "roboto",
                        left: -30,
                        top: 12,
                        fontSize:9.5
                      }}
                    >
                      {x.title}
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "robotobold",
                       left: -30,
                       top: 10,
                        fontSize:12
                      }}
                    >
                      {x.subtitle}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
            <View style={{marginLeft:20}} />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
