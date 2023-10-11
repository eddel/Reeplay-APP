import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const InterestsScreen = ({ navigation }) => {

    const [action, SetAction] = useState(true);
    let [Drama, setDrama] = useState(false);
    let [Comedy, setComedy] = useState(false);
    let [Horror, setHorror] = useState(false);
    let [Adventure, setAdventure] = useState(false);
    let [Thriller, setThriller] = useState(true);
    let [Romance, setRomance] = useState(false);
    let [Science, setScience] = useState(true);
    let [Music, setMusic] = useState(false);
    let [Documentery, setDocumentry] = useState(false);
    let [Crime, setCrime] = useState(true);
    let [Epic, setEpic] = useState(false);
    let [Kids, setKids] = useState(true);
    let [Mystery, setMystery] = useState(false);
    let [Fiction, setFiction] = useState(false);
    let [Animation, setAnimation] = useState(false);
    let [War, setWar] = useState(true);
    let [History, setHistory] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', fontFamily: 'roboto', color: 'white', marginLeft: 20, marginTop: 45, textAlign: 'left', width: '70%' }}>Choose your
                Interests</Text>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '400', fontFamily: 'roboto', width: '80%', marginLeft: 20, textAlign: 'left', marginTop: 5 }}>Choose your interests and get the best
                content recommendations. You can always
                change later.</Text>
            <View style={styles.mainTop}>
                <View style={[styles.btnView, { backgroundColor: action ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { SetAction(!action); }}>
                        <Text style={[styles.btnText, { color: action ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Action</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Drama ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setDrama(!Drama); }}>
                        <Text style={[styles.btnText, { color: Drama ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Drama</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Comedy ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setComedy(!Comedy); }}>
                        <Text style={[styles.btnText, { color: Comedy ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Comedy</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.innerViews}>
                <View style={[styles.btnView, { backgroundColor: Horror ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setHorror(!Horror) }}>
                        <Text style={[styles.btnText, { color: Horror ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Horror</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Adventure ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setAdventure(!Adventure) }}>
                        <Text style={[styles.btnText, { color: Adventure ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Adventure</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Thriller ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setThriller(!Thriller) }}>
                        <Text style={[styles.btnText, { color: Thriller ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Thriller</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.innerViews}>
                <View style={[styles.btnView, { backgroundColor: Romance ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setRomance(!Romance); }}>
                        <Text style={[styles.btnText, { color: Romance ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Romance</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Science ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setScience(!Science); }}>
                        <Text style={[styles.btnText, { color: Science ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Science</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Music ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setMusic(!Music); }}>
                        <Text style={[styles.btnText, { color: Music ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Music</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.innerViews}>
                <View style={[styles.btnView, { width: '38%', backgroundColor: Documentery ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setDocumentry(!Documentery); }}>
                        <Text style={[styles.btnText, { color: Documentery ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Documentery</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Crime ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setCrime(!Crime); }}>
                        <Text style={[styles.btnText, { color: Crime ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Crime</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Epic ? '#FF1313' : 'black', width: '21%' }]}>
                    <TouchableOpacity onPress={() => { setEpic(!Epic); }}>
                        <Text style={[styles.btnText, { color: Epic ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Epic</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.innerViews}>
                <View style={[styles.btnView, { backgroundColor: Kids ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => setKids(!Kids)}>
                        <Text style={[styles.btnText, { color: Kids ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Kids</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Mystery ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setMystery(!Mystery); }}>
                        <Text style={[styles.btnText, { color: Mystery ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Mystery</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: Fiction ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setFiction(!Fiction); }}>
                        <Text style={[styles.btnText, { color: Fiction ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Fiction</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.innerViews}>
                <View style={[styles.btnView, { width: '31%', backgroundColor: Animation ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setAnimation(!Animation); }}>
                        <Text style={[styles.btnText, { color: Animation ? 'white' : '#FF1313', fontWeight: 'bold' }]}>Animation</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: War ? '#FF1313' : 'black', width: '20%' }]}>
                    <TouchableOpacity onPress={() => { setWar(!War); }}>
                        <Text style={[styles.btnText, { color: War ? 'white' : '#FF1313', fontWeight: 'bold' }]}>War</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: History ? '#FF1313' : 'black' }]}>
                    <TouchableOpacity onPress={() => { setHistory(!History); }}>
                        <Text style={[styles.btnText, { color: History ? 'white' : '#FF1313', fontWeight: 'bold' }]}>History</Text>
                    </TouchableOpacity>
                </View>



            </View>

            <View style={styles.btnMain}>


                <View style={[styles.btnView, { width: 110, height: 35, backgroundColor: '#35383F', borderWidth: 0, marginRight: 18 }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.btnView, { backgroundColor: '#FF1313', width: 110, height: 35, }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
export default InterestsScreen;

const styles = StyleSheet.create({
    btnView: {
        borderColor: '#FF1313',
        borderWidth: 1,
        height: 35,
        width: '28%',
        borderRadius: 19
        , justifyContent: 'center',
        marginRight: 17

    },
    mainTop: {
        flexDirection: 'row',
        marginRight: 17,
        marginHorizontal: 17,
        marginTop: 70
    },
    innerViews: {
        flexDirection: 'row',

        marginHorizontal: 20,
        marginTop: 20
    },
    btnText:
        { color: '#FF1313', textAlign: 'center', fontSize: 16, fontWeight: 'bold', fontFamily: 'roboto' },
    btnMain: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 50
    },

})