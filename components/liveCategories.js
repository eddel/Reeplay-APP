import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
export default function LiveCat(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 3,
        }}
      ></View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          onPress={() => {
            props.setselectedCategory("All");
          }}
        >
          <Text style={[styles.ContinueText]}>All</Text>
          <View
            style={
              props.selectedCategory === "All"
                ? { height: 2, backgroundColor: "red" }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setselectedCategory("Channels");
          }}
        >
          <Text style={[styles.ContinueText]}>Channels</Text>
          <View
            style={
              props.selectedCategory === "Channels"
                ? { height: 2, backgroundColor: "red" }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setselectedCategory("Events");
          }}
        >
          <Text style={[styles.ContinueText]}>Events</Text>
          <View
            style={
              props.selectedCategory === "Events"
                ? { height: 2, backgroundColor: "red" }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setselectedCategory("TV Shows");
          }}
        >
          <Text style={[styles.ContinueText]}>TV Shows</Text>
          <View
            style={
              props.selectedCategory === "TV Shows"
                ? { height: 2, backgroundColor: "red" }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setselectedCategory("Sports");
          }}
        >
          <Text style={[styles.ContinueText]}>Sports</Text>
          <View
            style={
              props.selectedCategory === "Sports"
                ? { height: 2, backgroundColor: "red" }
                : null
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.setselectedCategory("Podcast");
          }}
        >
          <Text style={[styles.ContinueText]}>Podcast</Text>
          <View
            style={
              props.selectedCategory === "Podcast"
                ? { height: 2, backgroundColor: "red" }
                : null
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContinueText: {
    fontSize: rf(12),
    fontFamily: "robotobold",
    color: "#fff",
  },
  subtitle: {},
});
