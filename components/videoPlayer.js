import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Video, AVPlaybackStatus, usePlaybackStatus, Playback } from "expo-av";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import * as ScreenOrientation from "expo-screen-orientation";
import { useKeepAwake } from 'expo-keep-awake';

const VideoPlayer = (props) => {
  useKeepAwake(); // Keep the screen awake during video playback

  useEffect(() => {
    // Set the device orientation to landscape
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    return () => {
      // Reset the device orientation to portrait when the component is unmounted
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    };
  }, []);

  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(true);
  const [isSeeking, setIsSeeking] = useState(false);
  const [skipTime, setSkipTime] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSeek = async (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setIsSeeking(true);
    } else if (event.nativeEvent.state === State.END) {
      setIsSeeking(false);
      const { translationX } = event.nativeEvent;
      const newPosition = positionMillis + translationX / 10;
      await videoRef.current.setPositionAsync(newPosition);
    }
  };

  const handlePlayPause = async () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      await videoRef.current.playAsync();
    } else {
      await videoRef.current.pauseAsync();
    }
  };

  const handleSkipForward = async () => {
    const newPosition = positionMillis + skipTime * 1000;
    await videoRef.current.setPositionAsync(newPosition);
  };

  const handleSkipBackward = async () => {
    const newPosition = Math.max(0, positionMillis - skipTime * 1000);
    await videoRef.current.setPositionAsync(newPosition);
  };

  const toggleFullscreen = async () => {
    if (isFullscreen) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setIsFullscreen((prevState) => !prevState);
  };

  const formatTime = (timeMillis) => {
    if (timeMillis === null || timeMillis === undefined || isNaN(timeMillis)) {
      return "00:00";
    }

    const totalSeconds = Math.floor(timeMillis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const getProgressBarWidth = () => {
    if (durationMillis > 0) {
      const progress = (positionMillis / durationMillis) * 100;
      return `${progress}%`;
    }
    return "0%";
  };

  return (
    <View style={styles.container}>
      {/* Add any optional UI components or conditional rendering here */}
      {/* For example, props.fromSeries, props.fromEvents, props.fromShows */}
      <View>
        {/* Your video player component */}
        <PanGestureHandler onGestureEvent={handleSeek}>
          <Video
            ref={videoRef}
            source={{
              uri: "https://res.cloudinary.com/dowczulxj/video/upload/v1689503870/SampleVideo_1280x720_10mb_phnlhj.mp4",
            }}
            resizeMode={isFullscreen ? "contain" : "contain"}
            shouldPlay
            isLooping
            style={isFullscreen ? styles.fullscreenVideoPlayer : styles.videoPlayer}
            onPlaybackStatusUpdate={(status) => setStatus(status)}
          />
        </PanGestureHandler>
        {/* Add UI components for playback controls, progress bar, etc. */}
      </View>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  videoPlayer: {
    width: "100%",
    height: 220,
  },
  fullscreenVideoPlayer: {
    height: "100%",
    width: "100%",
  },
  // Add styles for other UI components as needed
});
