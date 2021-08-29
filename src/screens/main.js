import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Home from './home';
import Statistics from './statistics';
import { colors, type } from '../theme';
import Home_icon from '../assets/images/home_icon.png'
import Statistics_icon from '../assets/images/statistics_icon.png'
import Plus_icon from '../assets/images/plus.png'
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

const PlusIcon = () => {
    return (
        <View style={{position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{
                height:24,
                width: 3,
                borderRadius: 50,
                backgroundColor: 'white',
            }}></View>
            <View style={{
                height:3,
                width:24,
                borderRadius: 50,
                backgroundColor: 'white',
                position: 'absolute',
                left: -10.5
            }}></View>
        </View>
    )
}

const FABnullScreen = () => {
    return null;
}

const FAB = ({children, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: -15
            }}
            activeOpacity={0.8}
        >
            <View
                style={{
                    width: 70,
                    height: 70,
                    backgroundColor: colors.primary,
                    borderRadius: 50
                }}
            >
                {children}
            </View>
        </TouchableOpacity>
    )
}

export default function main() {
    return (
        <View style={{flex: 1}}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { 
                        height: 65, 
                        borderTopStartRadius: 30, 
                        borderTopEndRadius: 30, 
                        borderTopWidth: 0
                    }
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
                    component={FABnullScreen}
                    options ={{
                        tabBarIcon: ({focused}) => (
                            <PlusIcon />
                        ),
                        tabBarButton: (props) => (
                            <FAB {...props} />
                        ),
                    }}
                    listeners={{
                        tabPress: (e) => {
                            e.preventDefault();
                            alert('pressed plus button')
                        }
                    }}
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
