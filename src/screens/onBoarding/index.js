import React, { useState, useRef } from 'react'
import { View, Text, Pressable } from 'react-native'
import { onBoardingStyles } from './onBoardingStyles'
import { AntDesign } from '@expo/vector-icons'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swiper from 'react-native-swiper'

import OnBoardS1 from './OnBoardS1'
import OnBoardS2 from "./OnBoardS2"
import OnBoardS3 from "./OnBoardS3"

const Stack = createNativeStackNavigator();

export default function onBoarding() {
    const swipeRef = useRef(null);
    const [index, setIndex] = useState(1);

    function handleBackPress() {
        if(index > 1) {
            swipeRef.current.scrollBy(-1, true)
            setIndex(index - 1);
        }
    }
    function handleForwardPress() {
        if(index < 3) {
            swipeRef.current.scrollBy(1, true)
            setIndex(index + 1);
        }
    }

    return (
        <View style={onBoardingStyles.wrapper}>
            <Swiper showsPagination={false} scrollEnabled={false} loop={false} ref={swipeRef}>
                <OnBoardS1 />
                <OnBoardS2 />
                <OnBoardS3 />
            </Swiper>
            
            {/* button group */}
            <View style={onBoardingStyles.buttonGroup}>
                <Text style={onBoardingStyles.backButton} onPress={handleBackPress}>Go back</Text>
                <View style={onBoardingStyles.paginationGroup}>
                    <View style={index == 1? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 2? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 3? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                </View>
                <Pressable style={onBoardingStyles.button} onPress={handleForwardPress}>
                    <AntDesign name="arrowright" size={32} color="black" />
                </Pressable> 
            </View>
        </View>
    )
}
