import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { homeStyles } from './styles/homeStyles'
import Welcome from './user/userWelcome';
import UserChip from './user/userChip';
import HomeTabs from './homeTabs/HomeTabs'
import HomeTrends from './homeTrends/HomeTrends';
import Settings from '../../assets/images/settings_icon.png'

export default function index() {
    return (
        <View style={homeStyles.wrapper}>
            <View style={homeStyles.InfoContainer}>
                <View style={homeStyles.menuContainer}>
                    <Pressable style={homeStyles.menu}>
                        <Image style={homeStyles.settingsIcon} source={Settings} />
                    </Pressable>
                </View>
                <Welcome />
                <UserChip />
                <HomeTrends />
            </View>
            {/* <View style={homeStyles.TabContainer}>
                <HomeTabs />
            </View> */}
        </View>
    )
}
