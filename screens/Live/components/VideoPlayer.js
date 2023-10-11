import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { ScreenOrientation } from 'expo';

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [status, setStatus] = useState(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen((prevState) => !prevState);
        if (!isFullscreen) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        } else {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        }
    };

    const handlePlayPause = async () => {
        if (status.isPlaying) {
            await videoRef.current.pauseAsync();
        } else {
            await videoRef.current.playAsync();
        }
    };

    const handleRewind = async () => {
        await videoRef.current.setPositionAsync(Math.max(status.positionMillis - 10000, 0));
    };

    const handleFastForward = async () => {
        await videoRef.current.setPositionAsync(status.positionMillis + 10000);
    };

    return (
        <View style={styles.container}>
            <Video
                ref={videoRef}
                source={require('../../../assets/AuthVideo.mp4')}
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
                </View>
            )}

            <View style={styles.playbackControls}>
                <TouchableOpacity onPress={handleRewind}>
                    <Ionicons name="md-rewind" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePlayPause}>
                    <Ionicons name={status.isPlaying ? 'md-pause' : 'md-play'} size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFastForward}>
                    <Ionicons name="md-fastforward" size={24} color="white" />
                </TouchableOpacity>
            </View>
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
        top: StatusBar.currentHeight + 10,
        right: 10,
    },
    playbackControls: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: StatusBar.currentHeight + 10,
        right: 10,
    },
});

export default VideoPlayer;
