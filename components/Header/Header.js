import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop:35 }} >
                <Entypo name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../../assets/logoN.png')} style={{ height: 60, width: 200, }} resizeMode='cover' />
            </View>
            <View></View>

        </View>
    )
}

export default Header
