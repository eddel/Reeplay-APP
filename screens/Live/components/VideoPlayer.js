import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { set } from 'react-native-reanimated';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [orientationIsLandscape, setOrientation] = useState()

    const toggleFullscreen = () => {
        setIsFullscreen((prevState) => !prevState);
        changeScreenOrientation();
        setOrientation(!orientationIsLandscape)
    };

    async function changeScreenOrientation() {

        if (orientationIsLandscape == true) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
        }
        else if (orientationIsLandscape == false) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
        }
    }

    // useKeepAwake(); // Optional, for keeping the screen awake during video playback

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={require('../../../assets/AuthVideo.mp4')}
                // Additional props for customization
                resizeMode={isFullscreen ? 'cover' : 'contain'}
                shouldPlay
                isLooping
                style={isFullscreen ? styles.fullscreenVideoPlayer : styles.videoPlayer}
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />

            {isFullscreen && (
                <TouchableOpacity style={styles.closeButton} onPress={toggleFullscreen}>
                    <Ionicons name="md-close" size={24} color="white" />
                </TouchableOpacity>
            )}

            {!isFullscreen && (
                <View style={styles.controls}>
                    <TouchableOpacity style={styles.fullscreenButton} onPress={toggleFullscreen}>
                        <Ionicons name="md-expand" size={24} color="white" />
                    </TouchableOpacity>

                    {/* Customized buttons */}
                    <TouchableOpacity style={styles.customButton}>
                        <Text style={styles.customButtonText}>Custom Button 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.customButton}>
                        <Text style={styles.customButtonText}>Custom Button 2</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    videoPlayer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (9 / 16),
    },
    fullscreenVideoPlayer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    controls: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    customButton: {
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'gray',
        borderRadius: 5,
    },
    customButtonText: {
        color: 'white',
    },
    fullscreenButton: {
        position: 'absolute',
        top: StatusBar.currentHeight + 10,
        right: 10,
    },
    closeButton: {
        position: 'absolute',
        top: StatusBar.currentHeight + 10,
        right: 10,
    },
});
export default VideoPlayer;