import { View, Image, Text, ScrollView, FlatList } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
export default function LiveOther(props) {
  const renderItem = ({ item }) => {
    return (
      <View>
        <Image
          source={item.source}
          style={{
            width: 160,
            height: 120,
            margin: 6,
            borderRadius: 10,
            margin: 6,
          }}
          resizeMode="cover"
        />
        
      </View>
    );
  };
  return (
    <>
      <View style={props.ContnueBody}>
        <Text style={props.ContinueText}>{props.title}</Text>
      </View>
      <View style={props.ContinueWrapper}>
        <FlatList data={props.data} renderItem={renderItem} numColumns={2} />
      </View>
    </>
  );
}
