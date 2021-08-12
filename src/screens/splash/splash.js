import React from 'react'
import { View, Image, Text } from 'react-native'
import { splashStyle } from './splashStyle';
import logo from "../../assets/images/SimpleWeight_logo.png";

export default function splash() {
    return (
        <View style={splashStyle.container}>
            <Image source={logo} style={{width: 130, height: 130}}/>
            <Text style={splashStyle.splashText}>SimpleWeight</Text>
        </View>
    )
}
