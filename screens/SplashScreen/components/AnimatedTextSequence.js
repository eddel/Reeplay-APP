
import React from "react";
import { AnimatedText } from "./AnimatedText";
import { ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const AnimatedTextSequence = ({ texts, duration, delay, fontSize }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const navigation = useNavigation();
    const images = [
        {

            image: require('../../../assets/Anim1.png'),
        },
        {

            image: require('../../../assets/Anim2.png'),
        },
        {

            image: require('../../../assets/Anim3.png'),
        },
        {

            image: require('../../../assets/Anim4.png'),
        },
        {

            image: require('../../../assets/Anim5.png'),
        },


    ]
    const handleAnimationEnd = () => {
        if (currentIndex < images.length - 1) {
            console.log('listend')
            setCurrentIndex(currentIndex + 1);
        }
        else if (currentIndex === images.length - 1) {
            setTimeout(function () { navigation.navigate('OnBoarding'); }, 2000);
        }
    };

    return (
        <>
            {images.map((text, index) => {

                return (
                    <AnimatedText
                        key={index}
                        imagess={text.image}
                        duration={duration}
                        delay={delay * index}
                        images={images}
                        currentIndex={currentIndex}
                        onAnimationEnd={handleAnimationEnd}
                    />
                );
            })}
        </>
    );
};