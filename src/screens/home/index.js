import React from 'react'
import { View, Text } from 'react-native'
import { homeStyles } from './styles/homeStyles'
import Welcome from './user/userWelcome';
import UserChip from './user/userChip';
import HomeTabs from './homeTabs/HomeTabs'

export default function index() {
    return (
        <View style={homeStyles.wrapper}>
            <View style={homeStyles.InfoContainer}>
                <View style={homeStyles.menuContainer}>
                    <View style={homeStyles.menu}></View>
                </View>
                <Welcome />
                <UserChip />
            </View>
            <View style={homeStyles.TabContainer}>
                <HomeTabs />
            </View>
        </View>
    )
}
