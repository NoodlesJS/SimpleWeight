import React from 'react'
import { View, Text, Image } from 'react-native'
import { homeStyles } from '../styles/homeStyles'
import TrendUp from '../../../assets/images/trendUp.png'
import TrendDown from '../../../assets/images/trendDown.png'

export default function HomeTrends() {
    return (
        <View>
            <Text style={homeStyles.trendsHeader}>This week</Text>
            <View style={homeStyles.trendGroups}>
                <View style={homeStyles.trendGroupRowUpper}>
                    <View style={[homeStyles.trendBox, homeStyles.borderRight]}>
                        <View style={homeStyles.trendBoxInfo}>
                            <Image style={homeStyles.trendIcon} source={TrendUp} />
                            <Text style={homeStyles.trendBoxInfoHeader}>2.5 lb</Text>
                        </View>
                        <Text style={homeStyles.trendNameText}>Change</Text>
                    </View>
                    <View style={[homeStyles.trendBox, homeStyles.borderTop]}>
                        <View style={homeStyles.trendBoxInfo}>
                            <Image style={homeStyles.trendIcon} source={TrendDown} />
                            <Text style={homeStyles.trendBoxInfoHeader}>1.5 lb</Text>
                        </View>
                        <Text style={homeStyles.trendNameText}>Trend</Text>
                    </View>
                </View>
                <View style={homeStyles.trendGroupLower}>
                    <View style={[homeStyles.trendBox, homeStyles.borderBottom]}>
                        <View style={homeStyles.trendBoxInfo}>
                            <Image style={homeStyles.trendIcon} source={TrendDown} />
                            <Text style={homeStyles.trendBoxInfoHeader}>11.5 lb</Text>
                        </View>
                        <Text style={homeStyles.trendNameText}>Total</Text>
                    </View>
                    <View style={[homeStyles.trendBox, homeStyles.borderLeft]}>
                        <View style={homeStyles.trendBoxInfo}>
                            <Text style={homeStyles.trendBoxInfoHeader}>130 lb</Text>
                        </View>
                        <Text style={homeStyles.trendNameText}>Goal</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
