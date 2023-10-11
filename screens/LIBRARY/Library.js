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
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Card from "./components/Card";
import BottomMenu from "../../components/BottomMenu";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native";
import { Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function Library({ navigation }) {
  const [subCat, setSubcat] = useState(false);
  const [subCatT, setSubcatT] = useState("Movies");
  const [Cat, setCat] = useState(false);
  const [CatT, setCatT] = useState("All Categories");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView>
        <View style={{ marginBottom: hp("5%"), marginTop: 30 }}>
          <View style={styles.Wrapper}>
            <View style={styles.category}>
              <View style={styles.MoviesRow}>
                <Text style={styles.font}>{subCatT}</Text>
                <TouchableOpacity
                  style={{ height: 12, width: 12 }}
                  onPress={() => {setSubcat(!subCat);setCat(false)}}
                >
                  <Image
                    source={require("../../assets/PickerPic.png")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.CategoriesRow}>
                <Text style={styles.font}>{CatT}</Text>
                <TouchableOpacity
                  style={{ height: 12, width: 12 }}
                  onPress={() => {setCat(!Cat);setSubcat(false)}}
                >
                  <Image
                    source={require("../../assets/PickerPic.png")}
                    style={{ height: "100%", width: "100%" }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Cards Components */}
            <View style={styles.CardsRow}>
              <Card img={require("../../assets/Lib3.png")} />
              <Card img={require("../../assets/Lib1.png")} />
              <Card img={require("../../assets/Lib2.png")} />
            </View>
            {/* Cards Components */}
            {/* Cards Components */}
            <View style={styles.CardsRow}>
              <Card img={require("../../assets/Lib3.png")} />
              <Card img={require("../../assets/Lib1.png")} />
              <Card img={require("../../assets/Lib2.png")} />
            </View>
            {/* Cards Components */}
            {/* Cards Components */}
            <View style={styles.CardsRow}>
              <Card img={require("../../assets/Lib3.png")} />
              <Card img={require("../../assets/Lib1.png")} />
              <Card img={require("../../assets/Lib2.png")} />
            </View>
            {/* Cards Components */}
            {/* Cards Components */}
            <View style={styles.CardsRow}>
              <Card img={require("../../assets/Lib3.png")} />
              <Card img={require("../../assets/Lib1.png")} />
              <Card img={require("../../assets/Lib2.png")} />
            </View>
            {/* Cards Components */}
            {/* Cards Components */}
            <View style={styles.CardsRow}>
              <Card img={require("../../assets/Lib3.png")} />
              <Card img={require("../../assets/Lib1.png")} />
              <Card img={require("../../assets/Lib2.png")} />
            </View>
            {/* Cards Components */}
            {/* Cards Components */}
            <View style={styles.CardsRow}>
              <Card img={require("../../assets/Lib3.png")} />
              <Card img={require("../../assets/Lib1.png")} />
              <Card img={require("../../assets/Lib2.png")} />
            </View>
            {/* Cards Components */}
          </View>
        </View>
      </ScrollView>
      <BottomMenu
        homeimage={require("../../assets/HomwWhite.png")}
        searchimage={require("../../assets/SearchWhite.png")}
        liveimage={require("../../assets/LiveWhite.png")}
        upimage={require("../../assets/UpcomingWhite.png")}
        libimage={require("../../assets/libred.png")}
        textcolor="#fff"
        livetextcolor="#fff"
        LibraryText="#FF1313"
        UpcomngText="#fff"
        Searchcolor="#fff"
        navigation={navigation}
      />

      {subCat ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 70,
            left: 30,
            backgroundColor: "black",
           // padding: 20,
            borderRadius: 10,
            opacity:0.85
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("Movies");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "Movies" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Movies</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("TV Series");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "TV Series" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>TV Series</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("Music Videos");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "Music Videos" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Music Videos</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("Kiddies");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "Kiddies" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Kiddies</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("Live Events");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "Live Events" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Live Events</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("TV Channels");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "TV Channels" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>TV Channels</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("Short Skits");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "Short Skits" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Short Skits</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("Documentary");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={subCatT === "Documentary" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Documentary</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setSubcat(false);
              setSubcatT("Documentary");
            }}
            style={styles.catButton}
          >
            <Text style={styles.catText}></Text>
          </TouchableOpacity>
        </View>
      ) : null}
      {Cat ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 70,
            left: 70,
            backgroundColor: "black",
            opacity:0.85,
           // padding: 20,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("All Categories");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "All Categories" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>All Categories</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Action");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Action" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Action</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Drama");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Drama" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Drama</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Comedy");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Comedy" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Comedy</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Horror");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Horror" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Horror</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Adventure");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Adventure" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Adventure</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Thriller");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Thriller" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Thriller</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Romance");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Romance" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Romance</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Crime");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Crime" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Crime</Text>
          </TouchableOpacity>
          
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            onPress={() => {
              setCat(false);
              setCatT("Epic");
            }}
            style={styles.catButton}
          >
            <AntDesign
              name={CatT === "Epic" ? "check" : null}
              size={20}
              color="#fff"
            />
            <Text style={styles.catText}>Epic</Text>
          </TouchableOpacity>
          <View style={{backgroundColor:'#fff',height:1,width:"100%",opacity:0.8}}></View>
          <TouchableOpacity
            
            style={styles.catButton}
          >
            
            <Text style={styles.catText}> </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  catButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "justify",
  },
  catText: {
    fontSize: 16,
    fontFamily: "roboto",
    color: "#fff",
   // marginLeft: 50,
    margin: 10,
    marginRight: 80,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  Wrapper: {
    width: wp("100%"),
    alignItems: "center",
    marginBottom: hp("3%"),
  },
  category: {
    width: wp("90%"),
    height: hp("5%"),
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  MoviesRow: {
    flexDirection: "row",
    width: "25%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  CategoriesRow: {
    flexDirection: "row",
    width: "38%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  font: {
    fontSize: rf(10),
    fontWeight: "400",
    color: "#fff",
    fontFamily: "roboto",
  },
  CardsRow: {
    width: wp("90%"),
    height: hp("20%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
