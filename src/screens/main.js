import React from 'react'
import { View, Text, Image } from 'react-native'
import Home from './home';
import Statistics from './statistics';
import { colors, type } from '../theme';
import Home_icon from '../assets/images/home_icon.png'
import Statistics_icon from '../assets/images/statistics_icon.png'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Icon = ({source, focused, name}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image 
                source={source} 
                resizeMode = "contain"
                style = {{height: 24, width: 24, tintColor: focused? colors.primary : colors.secondary}}
            />
            <Text style={{color: focused? colors.primary : colors.secondary, fontSize: type.small, fontFamily: 'senR'}}>{name}</Text>
        </View>
    )
}

const FABnull = () => {
    return null;
}

export default function main() {
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { height: 60, borderTopStartRadius: 20, borderTopEndRadius: 20, borderTopWidth: 0}
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Icon source={Home_icon} focused={focused} name={`Home`} />
                        )
                    }} 
                
                />
                <Tab.Screen
                    name="Action"
                    component={FABnull}
                />
                <Tab.Screen 
                    name="Statistics" 
                    component={Statistics}
                    options={{
                        tabBarIcon: ({focused}) => (
                            <Icon source={Statistics_icon} focused={focused} name={`Statistics`} />
                        )
                    }} 
                />
            </Tab.Navigator>
            
        </View>
    )
}
