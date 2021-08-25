import React from 'react'
import { View, Text } from 'react-native'
import Home from './home';
import Statistics from './statistics';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function main() {
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { elevation: 3 }
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Statistics" component={Statistics} />
            </Tab.Navigator>
            
        </View>
    )
}
