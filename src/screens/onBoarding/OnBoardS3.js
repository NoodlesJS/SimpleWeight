import React, { useState } from 'react'
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
            <View style={onBoardingStyles.buttonGroup}>
                <Text style={onBoardingStyles.backButton}>Go back</Text>
                <View style={onBoardingStyles.paginationGroup}>
                    <View style={index == 1? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 2? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 3? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                </View>
                <View style={onBoardingStyles.button}>
                    <AntDesign name="arrowright" size={32} color="black" />
                </View>
                
            </View>
        </View>
    )
}

export default OnBoardS1;