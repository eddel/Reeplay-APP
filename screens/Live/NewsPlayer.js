import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Dimensions, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Video, AVPlaybackStatus, usePlaybackStatus, Playback } from 'expo-av';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import EpisodeCard from '../Series-Preview/components/EpisodeCard';
import * as ScreenOrientation from "expo-screen-orientation";
// import { useKeepAwake } from 'expo-keep-awake'; // Optional, for keeping the screen awake during video playback
const VideoPlayer = (props) => {
    
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
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);
    const [skipTime, setSkipTime] = useState(10);
    const [isPlaying, setIsPlaying] = useState(false);

    var positionMillis = status.positionMillis;
    var durationMillis = status.durationMillis;
    const handleSeek = async (event) => {

        if (event.nativeEvent.state === State.ACTIVE) {
            setIsSeeking(true);
        } else if (event.nativeEvent.state === State.END) {
            setIsSeeking(false);
            const { translationX } = event.nativeEvent;
            const newPosition = positionMillis + (translationX / 10);
            await videoRef.current.setPositionAsync(newPosition);
        }
    };
    const handlePlayPause = async () => {
        console.log('PlayPause', status);
        setIsPlaying(!isPlaying);
        // console.log('PlayPause', isPlaying);
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
        console.log(`isFullscreen`, isFullscreen);
        if (isFullscreen) {
         //   await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
        } else {
           // await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }
        setIsFullscreen((prevState) => !prevState);
    };
    const formatTime = (timeMillis) => {
        if (timeMillis === null || timeMillis === undefined || isNaN(timeMillis)) {
            console.log('object');
            const totalSeconds = 0;
            const minutes = 0;
            const seconds = 0;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        const totalSeconds = Math.floor(timeMillis / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    const getProgressBarWidth = () => {

        if (durationMillis > 0) {
            var progress = (positionMillis / durationMillis) * 100;
            return `${progress}%`;
        }
        return '0%';
    };
    return (
        <View style={styles.container}>
            {/* {props?.fromSeries || props?.fromEvents ? (<Text style={{ fontSize: 15, color: 'white' }}>Hello</Text>) : null} */}

            <View>
                <View style={styles.upercontrols}>
                    {props.fromSeries ? (<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>S1:E1 Mummy Soldier</Text>) : null}
                    {props?.fromEvents ? (<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>Live Events</Text>) : null}
                    {props?.fromShows ? (<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>TV Shows</Text>) : null}
                    {props?.rotate ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/mtvlogo.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>News Channel</Text>
                        </View>
                    ) : null}
                    <Image source={require('../../assets/wireless.png')} ></Image>
                </View>
                <PanGestureHandler onGestureEvent={handleSeek}>
                    <Video
                        ref={videoRef}
                        source={{ uri: 'https://res.cloudinary.com/dowczulxj/video/upload/v1689503870/SampleVideo_1280x720_10mb_phnlhj.mp4' }}
                        resizeMode={isFullscreen ? 'contain' : 'contain'}
                        shouldPlay
                        isLooping
                        style={isFullscreen ? styles.fullscreenVideoPlayer : styles.videoPlayer}
                        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
                    />
                </PanGestureHandler>
                <View style={styles.iconcontrols}>

                    {status.isLoaded == true ? (
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleSkipBackward}>
                                <MaterialIcons name="replay-10" size={isFullscreen ? 45 : 32} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePlayPause}>
                                <MaterialIcons
                                    name={isPlaying ? 'play-arrow' : 'pause'}
                                    size={isFullscreen ? 45 : 32}
                                    color="white"
                                    style={{ marginHorizontal: 10 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleSkipForward}>
                                <MaterialIcons name="forward-10" size={isFullscreen ? 45 : 32} color="white" />
                            </TouchableOpacity>
                        </View>
                    ) : (<ActivityIndicator size={'large'} color={'white'} hidesWhenStopped={status.isLoaded == true ? true : false} />)}

                </View>
                {props?.fromSeries ? (<View style={{ flexDirection: 'row', zIndex: 100, bottom: '13%', alignItems: 'center', marginHorizontal: 0, marginRight: 0 }}>
                    <Text style={styles.durationText}>{formatTime(durationMillis)}</Text>
                    <View style={[styles.progressBarContainer, { width: isFullscreen ? '80%' : '70%' }]}>

                        <View style={[styles.progressBar, { width: getProgressBarWidth() }]} ></View>

                    </View>
                    <Text style={styles.remainingText}>{formatTime(durationMillis - positionMillis)}</Text>

                </View>) : null}

                {!isFullscreen ? (
                    <View style={styles.controls}>
                        {props?.fromSeries ? (<TouchableOpacity style={styles.soundButton}>
                            <MaterialIcons name="volume-up" size={20} color="white" />
                        </TouchableOpacity>) : (<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='circle' color={'#FF1313'} size={10} style={styles.soundButton} />
                            <Text style={[styles.soundButton, { color: 'white', marginLeft: 5, fontSize: 12, fontWeight: 'bold' }]}>Live</Text>
                            <TouchableOpacity style={styles.soundButton}>
                                <MaterialIcons name="volume-up" size={20} color="white" />
                            </TouchableOpacity>
                        </View>)}
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='circle' color={'#FF1313'} size={10} style={styles.soundButton} />
                            <Text style={[styles.soundButton, { color: 'white', marginLeft: 5, fontSize: 12, fontWeight: 'bold' }]}>Live</Text>
                            <TouchableOpacity style={styles.soundButton}>
                                <MaterialIcons name="volume-up" size={20} color="white" />
                            </TouchableOpacity>
                        </View> */}
                        <View style={[{ flexDirection: 'row', right: '15%', alignItems: 'center', justifyContent: 'space-between' }]}>
                            {props?.fromSeries ? (<Image source={require('../../assets/nextbtn.png')} style={{ marginRight: 9 }}></Image>) : null}
                            {props?.rotate ? (<Image source={require('../../assets/nextbtn.png')} style={{ marginRight: 9 }}></Image>) : null}
                            {props?.fromEvents ? (<Image source={require('../../assets/coin1.png')} style={{ marginRight: 9 }}></Image>) : null}
                            {props?.fromShows ? (<Image source={require('../../assets/coin1.png')} style={{ marginRight: 9 }}></Image>) : null}


                            <TouchableOpacity>
                                {props?.fromSeries ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold', marginRight: 10 }]}>Next</Text>) : null}
                                {props?.rotate ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold' }]}>Next</Text>) : null}
                                {props?.fromEvents ? (<Text style={[{ color: '#FFCC00', fontSize: 13, fontWeight: 'bold' }]}>Donate</Text>) : null}
                                {props?.fromShows ? (<Text style={[{ color: '#FFCC00', fontSize: 13, fontWeight: 'bold' }]}>Vote</Text>) : null}


                            </TouchableOpacity>
                            {props?.fromSeries ? (<Image source={require('../../assets/episodes.png')} style={{ marginRight: 2 }}></Image>) : null}
                            {props?.fromSeries ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold', marginHorizontal: 5 }]}>Episodes</Text>) : null}
                            {props?.fromSeries ? (<Image source={require('../../assets/subtitles.png')} style={{ marginRight: 2 }}></Image>) : null}
                            {props?.fromSeries ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold' }]}>Audio/Subtitles</Text>) : null}
                        </View>
                        {/* Custom logo overlay */}
                        {/* <Image source={require('')} style={styles.logo} /> */}

                        <TouchableOpacity style={styles.fullscreenButton} onPress={toggleFullscreen}>
                            <MaterialIcons name="fullscreen" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                ) : (<View style={[styles.controls, { bottom: 30 }]}>
                    {props?.fromSeries ? (<TouchableOpacity style={styles.soundButton}>
                        <MaterialIcons name="volume-up" size={20} color="white" />
                    </TouchableOpacity>) : (<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name='circle' color={'#FF1313'} size={10} style={styles.soundButton} />
                        <Text style={[styles.soundButton, { color: 'white', marginLeft: 5, fontSize: 12, fontWeight: 'bold' }]}>Live</Text>
                        <TouchableOpacity style={styles.soundButton}>
                            <MaterialIcons name="volume-up" size={20} color="white" />
                        </TouchableOpacity>
                    </View>)}
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='circle' color={'#FF1313'} size={10} style={styles.soundButton} />
                            <Text style={[styles.soundButton, { color: 'white', marginLeft: 5, fontSize: 12, fontWeight: 'bold' }]}>Live</Text>
                            <TouchableOpacity style={styles.soundButton}>
                                <MaterialIcons name="volume-up" size={20} color="white" />
                            </TouchableOpacity>
                        </View> */}
                    <View style={[{ flexDirection: 'row', right: '15%', alignItems: 'center', justifyContent: 'space-between' }]}>
                        {props?.fromSeries ? (<Image source={require('../../assets/nextbtn.png')} style={{ marginRight: 9 }}></Image>) : null}
                        {props?.rotate ? (<Image source={require('../../assets/nextbtn.png')} style={{ marginRight: 9 }}></Image>) : null}
                        {props?.fromEvents ? (<Image source={require('../../assets/coin1.png')} style={{ marginRight: 9 }}></Image>) : null}
                        {props?.fromShows ? (<Image source={require('../../assets/coin1.png')} style={{ marginRight: 9 }}></Image>) : null}


                        <TouchableOpacity>
                            {props?.fromSeries ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold', marginRight: 10 }]}>Next</Text>) : null}
                            {props?.rotate ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold' }]}>Next</Text>) : null}
                            {props?.fromEvents ? (<Text style={[{ color: '#FFCC00', fontSize: 13, fontWeight: 'bold' }]}>Donate</Text>) : null}
                            {props?.fromShows ? (<Text style={[{ color: '#FFCC00', fontSize: 13, fontWeight: 'bold' }]}>Vote</Text>) : null}


                        </TouchableOpacity>
                        {props?.fromSeries ? (<Image source={require('../../assets/episodes.png')} style={{ marginRight: 2 }}></Image>) : null}
                        {props?.fromSeries ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold', marginHorizontal: 5 }]}>Episodes</Text>) : null}
                        {props?.fromSeries ? (<Image source={require('../../assets/subtitles.png')} style={{ marginRight: 2 }}></Image>) : null}
                        {props?.fromSeries ? (<Text style={[{ color: 'white', fontSize: 13, fontWeight: 'bold' }]}>Audio/Subtitles</Text>) : null}
                    </View>
                    {/* Custom logo overlay */}
                    {/* <Image source={require('')} style={styles.logo} /> */}

                    <TouchableOpacity style={styles.fullscreenButton} onPress={toggleFullscreen}>
                        <MaterialIcons name="fullscreen" size={24} color="white" />
                    </TouchableOpacity>
                </View>)}
            </View>
            {props?.fromSeries ? (<ScrollView style={{ marginHorizontal: 20 }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', fontFamily: 'roboto', marginTop: 15, marginBottom: 15 }}>Season 1 </Text>

                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />
                <EpisodeCard />

            </ScrollView>) : null}


            {/* /* isFullscreen ? styles.fullscreenVideoPlayer : styles.videoPlayer */}
            {/* // {isFullscreen && (
    //             <TouchableOpacity style={styles.closeButton} onPress={toggleFullscreen}>
    //                 <FontAwesome name="close" size={24} color="white" />
    //             </TouchableOpacity>
    //         )} */}


        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    durationText: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10

        // marg
    },
    remainingText: {
        color: 'white',
        fontSize: 15,
        zIndex: 100,

        position: 'absolute',
        right: 10,
    },
    videoPlayer: {
        width: '100%',
        // height: Dimensions.get('window').width * (9 / 16),
        height: 220,
    },
    fullscreenVideoPlayer: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        height: '100%',
        width: '100%',
    },
    controls: {
        position: 'absolute',
        bottom: 25,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    progressBarContainer: {
        marginLeft: 10,
        marginRight: 20,
        height: 6,
        backgroundColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        // position: 'absolute',
        // bottom: 50,
        zIndex: 100,
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'red',


    },
    upercontrols: {
        position: 'absolute',
        top: 10,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000
    },
    soundButton: {
        marginLeft: 25,
    },
    iconcontrols: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        zIndex: 100,
        position: 'absolute',
        bottom: 0,
        top: 0,

    },
    qualityButton: {
        marginRight: 30,
    },
    qualityButtonText: {
        color: 'white',
        right: 20
    },
    logo: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 80,
        height: 40,
    },
    fullscreenButton: {
        position: 'absolute',
        right: 10,

    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,

    },
});

export default function NewsPlayer({ route }) {
   // const { fromEvents, rotate, fromShows, fromSeries } = route.params;
    return (
        <View style={styles.container}>
            <VideoPlayer/>
            {/* <VideoPlayer fromEvents={fromEvents?fromEvents:null} fromShows={fromShows?fromShows:null} rotate={rotate} fromSeries={fromSeries?fromSeries:true} /> */}
        </View>
    );
}
