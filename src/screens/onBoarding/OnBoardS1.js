import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { onBoardingStyles } from './onBoardingStyles'
import { AntDesign } from '@expo/vector-icons'

const OnBoardS1 = ({index}) => {
    return (
        <View style={onBoardingStyles.container}>
            <View>
                <View style={onBoardingStyles.headerTextGroup}>
                    
                    <Text style={onBoardingStyles.textHeader}>Welcome to SimpleWeight</Text>
                    <Text style={onBoardingStyles.textSub}>Lets get you started!</Text>
                </View>
                <View style={onBoardingStyles.formGroup}>
                    <Text style={onBoardingStyles.inputLabel}>What's your name?</Text>
                    <TextInput style={onBoardingStyles.input} />
                </View>
            </View>
        </View>
    )
}

export default OnBoardS1;