import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, Image, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
export const AnimatedText = ({ imagess, duration, images, delay, fontSize, currentIndex, index, onAnimationEnd }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    console.log('text', currentIndex);
    const navigation = useNavigation();
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
        }).start(() => { });
    }, [animatedValue, delay, duration, currentIndex, onAnimationEnd]);
    useEffect(() => {
        onAnimationEnd();
    }, [currentIndex])
    const [istrue, setIsTrue] = useState(false);
    const animatedStyles = {
        opacity: animatedValue,
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [20, 0],
                }),
            },

        ],

    };

    return (
        <Animated.View style={animatedStyles} >
            {/* {istrue ? (
                <ImageBackground style={{ width: winWidth, height: winHeight }} source={require('../../../assets/Anim0.png')} resizeMode='cover' >
                    <Image source={require('../../../assets/Vector.png')} style={{ width: winWidth, position: 'absolute', top: 0, height: winHeight }} />
                </ImageBackground>
            ) : null} */}
            <ImageBackground style={{ width: winWidth, height: winHeight, position: 'absolute', top: 0, }} source={require('../../../assets/Anim0.png')} resizeMode='cover' >
                <Image source={imagess} style={{ width: winWidth, position: 'absolute', top: 0, height: winHeight }} />
            </ImageBackground>




        </Animated.View>
    );
};




