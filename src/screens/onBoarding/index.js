import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { SwiperFlatList } from "react-native-swiper-flatlist"
import { onBoardingStyles } from './onBoardingStyles'
import { AntDesign } from '@expo/vector-icons'
import OnBoardS1 from './OnBoardS1'
import OnBoardS2 from "./OnBoardS2"
import OnBoardS3 from "./OnBoardS3"

export default function onBoarding() {
    const [index, setIndex] = useState(3);
    return (
        <View style={{flex: 1}}>
            <SwiperFlatList disableGesture={true}>
                <OnBoardS3 />
            </SwiperFlatList>
        </View>
    )
}
