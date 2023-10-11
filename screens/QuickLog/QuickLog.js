import * as React from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused } from '@react-navigation/native';
export default function QuickLog({ navigation }) {
    const video = React.useRef(null);

    const [status, setStatus] = React.useState({});
    const [videoStatus, setVideoStatus] = React.useState(true);
    const [soundStatus, setSoundStatus] = React.useState(true);

    const toggleSound = async () => {
      const soundEnabled = !soundStatus;
      setSoundStatus(soundEnabled);
      if (video.current) {
        await video.current.setIsMutedAsync(!soundEnabled);
      }
    };
     
      const isFocused = useIsFocused();
    
      React.useEffect(() => {
        if (isFocused) {
          playVideo();
        } else {
          pauseVideo();
        }
      }, [isFocused]);
    
      const playVideo = async () => {
        if (video.current) {
          await video.current.playAsync();
        }
      };
    
      const pauseVideo = async () => {
        if (video.current) {
          await video.current.pauseAsync();
        }
      };
    return (
        <View style={{ flex: 1, }}>
            <StatusBar style='auto' />
            <TouchableOpacity onPress={toggleSound} style={styles.soundButton}>
        {soundStatus ? (
          <Image source={require('../../assets/volumeIcon.png')}  resizeMode="cover" style={{width:100,height:30}}/> 
        ) : (
            <Image source={require('../../assets/volumeOff.png')}  resizeMode="contain" style={{width:18,height:20,marginTop:10}}/>
        )}
      </TouchableOpacity>
            <Video
                ref={video}
                style={{ height: '100%', width: '100%' }}
                source={{ uri: 'https://res.cloudinary.com/dafitwjme/video/upload/v1686415737/Tecno_1_qturgk.mp4' }}
                useNativeControls={false}
                resizeMode="cover"
                isLooping={true}
                shouldPlay={videoStatus}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={{
                height: '20%', width: '100%', position: 'absolute',
                justifyContent: 'center', paddingHorizontal: wp('5%')
                ,marginTop:20
            }}>
                <Text style={styles.WelcomeText}>Welcome back</Text>
                <Text style={styles.WelcomeText}>Edward</Text>
                <Text style={[styles.WelcomeText, { fontSize: rf(13), fontFamily: 'roboto' }]}>Login to continue</Text>
            </View>
            <View style={styles.BtnWrapper}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '75%' }}>
                    <TouchableOpacity onPress={() => {
                        setVideoStatus(false)
                        navigation.navigate('Pin')
                    }}
                        style={styles.CreateAccountBtn}>
                        <Text style={styles.LoginText}>Continue to login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setVideoStatus(false)
                        navigation.navigate('FaceTouchId')
                    }}


                        style={styles.Scanner}>
                        <Image source={require('../../assets/Scanner.png')}
                            style={{ height: '80%', width: '80%' }}
                            resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={styles.TermsText}>Read the</Text>
                    <TouchableOpacity onPress={() => {
                        setVideoStatus(false)
                        navigation.navigate('TermsConditions')
                    }}
                    >
                        <Text style={[styles.TermsText,{textDecorationLine:'underline'}]}> Terms</Text>
                    </TouchableOpacity>
                    <Text style={styles.TermsText}> of use and</Text>
                    <TouchableOpacity onPress={() => {
                        setVideoStatus(false)
                        navigation.navigate('PrivacyPolicy')
                    }}
                    >
                        <Text style={[styles.TermsText,{textDecorationLine:'underline'}]}> Privacy policy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Scanner: {
        height: hp('7%'),
        width: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1313'
    },
    WelcomeText: {
        fontFamily: 'robotobold',
        fontSize: rf(20),
        color: '#fff',
        top: 10,
    }, soundButton: {
        position: "absolute",
        top: 20,
        left: 10,
        padding: 10,
        borderRadius: 5,
        zIndex: 1,
      },
    ImageWrapper: {
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: 'flex-end'
    },
    BtnWrapper: {
        height: hp('20%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 0,
    },
    LoginText: {
        fontSize: rf(11),
        color: '#fff',
        fontFamily: 'robotobold'
    },
    CreateAccountBtn: {
        height: hp('7%'),
        width: wp('50%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF1313'
    },
    TermsText: {
        color: '#E5E5E5',
        fontSize: rf(8),
        fontWeight: '400',
        fontFamily: 'roboto'
    }
});