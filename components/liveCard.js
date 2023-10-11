import { View, Image, Text, ScrollView } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
export default function LiveCard(props) {
  return (
    <>
      <View style={props.ContnueBody}>
        <Text style={props.ContinueText}>{props.title}</Text>
      </View>
      <View style={props.ContinueWrapper}>
        <ScrollView horizontal={true}>
          {props?.data?.map((x) => {
            return (
              <View>
                <Image
                  source={x.source}
                  style={{ width: 280, height: 160, margin: 6, borderRadius: 10,margin:6 }}
                  resizeMode="contain"
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ marginLeft: 10 }}>
                    <Text  style={{
                        fontSize: rf(8),
                        fontFamily: "roboto",
                        color: "#fff",
                      }}>Season 8</Text>
                    <Text
                      style={{
                        fontSize: rf(12),
                        fontFamily: "robotobold",
                        color: "#fff",
                      }}
                    >
                      NIGERIAN IDOL
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row",justifyContent:'center',alignItems:'center' }}>
                    <Image
                      source={require("../assets/18p.png")}
                      style={{
                        width: 33,
                        height: 13,
                        //margin: 2,
                        borderRadius: 2,
                      }}
                      resizeMode="contain"
                    />
                    <Text  style={{
                        fontSize: rf(9),
                        fontFamily: "roboto",
                        color: "#fff",
                      }} >18+</Text>
                    <Image
                      source={require("../assets/Live.png")}
                      style={{
                        width: 33,
                        height: 13,
                        marginRight: 16,
                        borderRadius: 2,
                        marginLeft:6
                      }}
                      resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}
