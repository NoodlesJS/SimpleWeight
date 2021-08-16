import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import { onBoardingStyles } from './onBoardingStyles'
import { AntDesign } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardS1 from './OnBoardS1'
import OnBoardS2 from "./OnBoardS2"
import OnBoardS3 from "./OnBoardS3"

const Stack = createNativeStackNavigator();

export default function onBoarding() {
    const [index, setIndex] = useState(3);
    return (
        <View style={onBoardingStyles.wrapper}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="OnBoard1">
                    <Stack.Screen name="OnBoard1" component={OnBoardS1} />
                    <Stack.Screen name="OnBoard2" component={OnBoardS2} />
                    <Stack.Screen name="OnBoard3" component={OnBoardS3} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* button group */}
            <View style={onBoardingStyles.buttonGroup}>
                <Text style={onBoardingStyles.backButton}>Go back</Text>
                <View style={onBoardingStyles.paginationGroup}>
                    <View style={index == 1? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 2? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 3? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                </View>
                <View style={onBoardingStyles.button} onPress={() => navigation.push("OnBoard2")}>
                    <AntDesign name="arrowright" size={32} color="black" />
                </View> 
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('OnBoard2')}
                />
            </View>
        </View>
    )
}
