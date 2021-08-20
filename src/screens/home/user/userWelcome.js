import React from 'react'
import { View, Text } from 'react-native'
import { homeStyles } from '../styles/homeStyles'

export default function userWelcome() {
    return (
        <View style={homeStyles.userWelcomeContainer}>
            <Text style={homeStyles.userTextHeader}>Good Afternoon</Text>
            <Text style={homeStyles.userTextHeader}>Vicki!</Text>
        </View>
    )
}
