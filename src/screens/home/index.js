import React from 'react'
import { View, Text } from 'react-native'
import { homeStyles } from './homeStyles'

export default function index() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    )
}
