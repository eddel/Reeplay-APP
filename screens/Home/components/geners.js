import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { dataCAROUSEL } from "./images";
import { Dimensions } from "react-native";
export default function Generes(props) {
  const [selectedCategory, setselectedCategory] = useState("Action");
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: 20,
          top: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 40,
        }}
      >
        <Text style={[props.ContinueText, { fontSize: 15 }]}>
          {props.title}
        </Text>
        <TouchableOpacity onPress={() => alert("See All")}>
          <Text
            style={{
              fontSize: 11,
              color: "#FF1313",
              fontWeight: "400",
              fontFamily: "roboto",
            }}
          >
            SEE All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => {
            setselectedCategory("Action");
          }}
        >
          <Text style={[styles.ContinueText]}>Action</Text>
          <View
            style={
              selectedCategory === "Action"
                ? { height: 2, backgroundColor: "red", left: 7 }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselectedCategory("Drama");
          }}
        >
          <Text style={[styles.ContinueText]}>Drama</Text>
          <View
            style={
              selectedCategory === "Drama"
                ? { height: 2, backgroundColor: "red", left: 7 }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselectedCategory("Comedy");
          }}
        >
          <Text style={[styles.ContinueText]}>Comedy</Text>
          <View
            style={
              selectedCategory === "Comedy"
                ? { height: 2, backgroundColor: "red", left: 7 }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselectedCategory("Horror");
          }}
        >
          <Text style={[styles.ContinueText]}>Horror</Text>
          <View
            style={
              selectedCategory === "Horror"
                ? { height: 2, backgroundColor: "red", left: 7 }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselectedCategory("Adventure");
          }}
        >
          <Text style={[styles.ContinueText]}>Adventure</Text>
          <View
            style={
              selectedCategory === "Adventure"
                ? { height: 2, backgroundColor: "red", left: 7 }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setselectedCategory("Thriller");
          }}
        >
          <Text style={[styles.ContinueText]}>Thriller</Text>
          <View
            style={
              selectedCategory === "Thriller"
                ? { height: 2, backgroundColor: "red", left: 7 }
                : null
            }
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <Carousel
          loop
          style={{ marginTop: 20 }}
          width={width}
          height={270}
          pagingEnabled={true}
          data={
            selectedCategory === "Action"
              ? actionImages
              : selectedCategory === "Drama"
              ? dramaImages
              : selectedCategory === "Comedy"
              ? comedyImages
              : selectedCategory === "Horror"
              ? horrorImages
              : selectedCategory === "Adventure"
              ? adventureImages
              : selectedCategory === "Thriller"
              ? thirillerImages
              : null
          }
          scrollAnimationDuration={1000}
          renderItem={({ index, item }) => (
            <Image
              source={item.source}
              style={{
                width: 350,
                height: 231,
                margin: 12,
                borderRadius: 15,
                alignSelf: "center",
              }}
              resizeMode="cover"
            />
          )}
        />
      </ScrollView>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "red",
              width: 25,
              height: 5,
              borderRadius: 10,
              alignSelf: "center",
              margin: 3,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              backgroundColor: "red",
              width: 25,
              height: 5,
              borderRadius: 10,
              alignSelf: "center",
              margin: 3,
            }}
          />
          <View
            style={{
              backgroundColor: "red",
              width: 25,
              height: 5,
              borderRadius: 10,
              alignSelf: "center",
              margin: 3,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              backgroundColor: "red",
              width: 25,
              height: 5,
              borderRadius: 10,
              alignSelf: "center",
              margin: 3,
              opacity: 0.5,
            }}
          />
          <View
            style={{
              backgroundColor: "red",
              width: 25,
              height: 5,
              borderRadius: 10,
              alignSelf: "center",
              margin: 3,
              opacity: 0.5,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContinueText: {
    fontSize: rf(10),
    left: 7,
    fontFamily: "roboto",
    color: "#ffffff",
  },
  subtitle: {},
});
const width = Dimensions.get("window").width;
const actionImages = [
  {
    source: require("../../../assets/generAction1.png"),
  },
  {
    source: require("../../../assets/generAction2.png"),
  },
  {
    source: require("../../../assets/generAction3.png"),
  },
  {
    source: require("../../../assets/generAction4.png"),
  },
];
const dramaImages = [
  {
    source: require("../../../assets/generAction6.png"),
  },
  {
    source: require("../../../assets/generAction7.png"),
  },
  {
    source: require("../../../assets/generAction8.png"),
  },
  {
    source: require("../../../assets/generAction9.png"),
  },
];
const comedyImages = [
  {
    source: require("../../../assets/generAction6.png"),
  },
  {
    source: require("../../../assets/generAction7.png"),
  },
  {
    source: require("../../../assets/generAction10.png"),
  },
  {
    source: require("../../../assets/generAction11.png"),
  },
];

const horrorImages = [
  {
    source: require("../../../assets/generAction6.png"),
  },
  {
    source: require("../../../assets/generAction7.png"),
  },
  {
    source: require("../../../assets/generAction8.png"),
  },
  {
    source: require("../../../assets/generAction9.png"),
  },
];

const adventureImages = [
  {
    source: require("../../../assets/generAction6.png"),
  },
  {
    source: require("../../../assets/generAction7.png"),
  },
  {
    source: require("../../../assets/generAction8.png"),
  },
  {
    source: require("../../../assets/generAction9.png"),
  },
];

const thirillerImages = [
  {
    source: require("../../../assets/generAction6.png"),
  },
  {
    source: require("../../../assets/generAction7.png"),
  },
  {
    source: require("../../../assets/generAction8.png"),
  },
  {
    source: require("../../../assets/generAction9.png"),
  },
];
