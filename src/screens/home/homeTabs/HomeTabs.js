import React from 'react'
import { View, Text } from 'react-native'
import { homeStyles } from '../styles/homeStyles'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeWeight from "./homeWeight";
import HomeStats from './homeStats';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Weight" component={HomeWeight} />
                <Tab.Screen name="Statistics" component={HomeStats} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
