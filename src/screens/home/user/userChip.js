import React from 'react'
import { View, Text } from 'react-native'
import { homeStyles } from '../styles/homeStyles'

export default function userChip() {
    return (
        <View style={homeStyles.userChipContainer}>
            <View style={homeStyles.userChipInfoGroup}>
                <Text style={homeStyles.chipInfoHeader}>Current weight</Text>
                <Text style={homeStyles.chipInfoSubHeader}>Thu Aug 19</Text>
            </View>
            <Text style={homeStyles.userInfoWeight}>142.lbs</Text>
        </View>
    )
}
