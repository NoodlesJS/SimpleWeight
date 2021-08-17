import React, { useState, useRef } from 'react'
import { View, Text, Pressable, TextInput, Button } from 'react-native'
import { onBoardingStyles } from './onBoardingStyles'
import { AntDesign } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import Swiper from 'react-native-swiper'

export default function onBoarding() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const swipeRef = useRef(null);
    const [index, setIndex] = useState(1);
    const [name, setName] = useState('User')
    const [currentWeight, setCurrentWeight] = useState(0)
    const [goalWeight, setGoalWeight] = useState(null);

    function handleBackPress() {
        if(index > 1) {
            swipeRef.current.scrollBy(-1, true)
            setIndex(index - 1);
        }
    }
    const onSubmitScreen1 = ({name}) => {
        console.log(name)
        setName(name)
        transitionScreen()
    }
    const onSubmitScreen2 = ({weight}) => {
        setCurrentWeight(weight)
        transitionScreen()
    }
    const onSubmitScreen3 = ({goal}) => {
        setGoalWeight(goal);
        transitionScreen()
    }

    const transitionScreen = () => {
        if(index < 3) {
            swipeRef.current.scrollBy(1, true)
            setIndex(index + 1);
        }
    }

    return (
        <View style={onBoardingStyles.wrapper}>
            <Swiper showsPagination={false} scrollEnabled={true} loop={false} ref={swipeRef}>
                {/* onBoard - 1 */}
                <View style={onBoardingStyles.container}>
                    <View>
                        <View style={onBoardingStyles.headerTextGroup}>
                            <Text style={onBoardingStyles.textHeader}>Welcome to SimpleWeight</Text>
                            <Text style={onBoardingStyles.textSub}>Lets get you started!</Text>
                        </View>
                        <View style={onBoardingStyles.formGroup}>
                            <Text style={onBoardingStyles.inputLabel}>What's your name?</Text>
                            <Controller
                                control={control}
                                rules={{
                                required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={onBoardingStyles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    placeholder="James"
                                />
                                )}
                                name="name"
                                defaultValue=""
                            />
                            {errors.name && <Text style={{color: 'red', paddingTop: 4}}>This is required.</Text>}
                        </View>
                    </View>
                </View>

                {/* onBoard - 2 */}
                <View style={onBoardingStyles.container}>
                    <View>
                        <View style={onBoardingStyles.headerTextGroup}>
                            <Text style={onBoardingStyles.textHeader}>Welcome to SimpleWeight</Text>
                            <Text style={onBoardingStyles.textSub}>Nice to meet you {name}</Text>
                        </View>
                        <View style={onBoardingStyles.formGroup}>
                            <Text style={onBoardingStyles.inputLabel}>What's your current weight?</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={onBoardingStyles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    placeholder="0"
                                    numeric
                                    keyboardType={'numeric'}
                                />
                                )}
                                name="weight"
                                defaultValue=""
                            />
                            {errors.weight && <Text style={{color: 'red', paddingTop: 4}}>This is required.</Text>}
                        </View>
                    </View>
                </View>

                {/* onBoard - 3 */}
                <View style={onBoardingStyles.container}>
                    <View>
                        <View style={onBoardingStyles.headerTextGroup}>
                            <Text style={onBoardingStyles.textHeader}>Welcome to SimpleWeight</Text>
                            <Text style={onBoardingStyles.textSub}>Lets get you started!</Text>
                        </View>
                        <View style={onBoardingStyles.formGroup}>
                            <Text style={onBoardingStyles.inputLabel}>What's your goal weight?</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={onBoardingStyles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    placeholder="0"
                                    numeric
                                    keyboardType={'numeric'}
                                />
                                )}
                                name="goal"
                                defaultValue=""
                            />
                            {errors.goal && <Text style={{color: 'red', paddingTop: 4}}>This is required.</Text>}
                        </View>
                    </View>
                </View>
            </Swiper>
            
            {/* button group */}
            <View style={index == 1? onBoardingStyles.buttonGroup: onBoardingStyles.hide}>
                <Text style={onBoardingStyles.backButton} onPress={handleBackPress}>Go back</Text>
                <View style={onBoardingStyles.paginationGroup}>
                    <View style={index == 1? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 2? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 3? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                </View>
                <Pressable style={onBoardingStyles.button} onPress={handleSubmit(onSubmitScreen1)}>
                    <AntDesign name="arrowright" size={32} color="black" />
                </Pressable> 
            </View>

            <View style={index == 2? onBoardingStyles.buttonGroup: onBoardingStyles.hide}>
                <Text style={onBoardingStyles.backButton} onPress={handleBackPress}>Go back</Text>
                <View style={onBoardingStyles.paginationGroup}>
                    <View style={index == 1? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 2? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 3? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                </View>
                <Pressable style={onBoardingStyles.button} onPress={handleSubmit(onSubmitScreen2)}>
                    <AntDesign name="arrowright" size={32} color="black" />
                </Pressable> 
            </View>

            <View style={index == 3? onBoardingStyles.buttonGroup: onBoardingStyles.hide}>
                <Text style={onBoardingStyles.backButton} onPress={handleBackPress}>Go back</Text>
                <View style={onBoardingStyles.paginationGroup}>
                    <View style={index == 1? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 2? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                    <View style={index == 3? onBoardingStyles.paginationActive: onBoardingStyles.paginationInactive}></View>
                </View>
                <Pressable style={onBoardingStyles.button} onPress={handleSubmit(onSubmitScreen3)}>
                    <AntDesign name="arrowright" size={32} color="black" />
                </Pressable> 
            </View>
        </View>
    )
}
