import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
const images = [
    'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

    'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='

]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Swiper({ navigation }) {

    const [imgActive, setimgActive] = useState(0)

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide)
            }
        }
    }
    return (
        <View style={styles.body}>
            <View style={styles.Wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.Wrap}
                >
                    {/* {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.Wrap}
                                source={{ uri: e }}
                            />
                        )
                    } */}
                    <Image source={require('../../../assets/HomePic.png')}
                        style={{ height: '100%', width: '100%' }} />
                </ScrollView>
            </View>
            <View style={styles.WrapDot}>
                {/* {
                    images.map((e, index) =>
                        <Text
                            key={e}
                            style={imgActive == index ? styles.dotActive : styles.dot}>
                            A
                        </Text>
                    )
                } */}
                <View style={imgActive == 0 ? styles.dotActive : styles.dot}></View>
                <View style={imgActive == 1 ? styles.dotActive : styles.dot}></View>
                <View style={imgActive == 2 ? styles.dotActive : styles.dot}></View>




            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#fff",
    },
    Wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25
    },
    WrapDot: {
        position: 'absolute',
        bottom: 580,
        left: 150,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dotActive: {
        height: 10, width: 10, backgroundColor: 'black', margin: 3, borderRadius: 10
    },
    dot: {
        height: 10, width: 10, backgroundColor: 'white', margin: 3, borderRadius: 10
    }
});
