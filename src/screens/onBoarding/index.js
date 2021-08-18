import React, { useState, useRef } from 'react'
import { View, Text, Pressable, TextInput, Image, TouchableOpacity } from 'react-native'
import { onBoardingStyles } from './onBoardingStyles'
import { AntDesign } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import Swiper from 'react-native-swiper'

export default function onBoarding({navigation}) {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const swipeRef = useRef(null);
    const [index, setIndex] = useState(1);
    const [name, setName] = useState('User')
    const [currentWeight, setCurrentWeight] = useState('')
    const [goalWeight, setGoalWeight] = useState('');

    function handleBackPress() {
        if(index > 1) {
            swipeRef.current.scrollBy(-1, true)
            setIndex(index - 1);
        }
    }
    const onSubmitScreen1 = ({name}) => {
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
        if(index < 4) {
            swipeRef.current.scrollBy(1, true)
            setIndex(index + 1);
        }
    }

    return (
        <View style={onBoardingStyles.wrapper}>
            <Swiper showsPagination={false} scrollEnabled={false} loop={false} ref={swipeRef}>
                {/* onBoard - 1 */}
                <View style={onBoardingStyles.container}>
                    <View>
                        <View style={onBoardingStyles.gifGroup}>
                            <Image
                                style={onBoardingStyles.gif} 
                                source={require("../../assets/gifs/man_hands.gif")}
                            />
                        </View>
                        <View style={onBoardingStyles.headerTextGroup}>
                            <Text style={onBoardingStyles.textHeader}>Lets get you started!</Text>
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
                        <View style={onBoardingStyles.gifGroup}>
                            <Image
                                style={onBoardingStyles.gif} 
                                source={require("../../assets/gifs/man_hands.gif")}
                            />
                        </View>
                        <View style={onBoardingStyles.headerTextGroup}>
                            <Text style={onBoardingStyles.textHeader}>Nice to meet you {name}!</Text>
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
                        <View style={onBoardingStyles.gifGroup}>
                            <Image
                                style={onBoardingStyles.gif} 
                                source={require("../../assets/gifs/man_hands.gif")}
                            />
                        </View>
                        <View style={onBoardingStyles.headerTextGroup}>
                            <Text style={onBoardingStyles.textHeader}>Thanks!</Text>
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
                            <Text style={onBoardingStyles.backButton} onPress={handleSubmit(onSubmitScreen3)}>Skip for now</Text>
                        </View>
                    </View>
                </View>

                {/* onBoard - 4 */}
                <View style={onBoardingStyles.container}>
                    <View>
                        <View style={onBoardingStyles.headerTextGroup}>
                            <Text style={onBoardingStyles.textHeader}>Welcome to SimpleWeigh!</Text>
                            <Text style={onBoardingStyles.textSub}>You're all set.</Text>
                        </View>
                        <View style={onBoardingStyles.resultsGroup}>
                            <View style={onBoardingStyles.currentWeight}>
                                <Text style={onBoardingStyles.resultsHeader}>Current weight</Text>
                                <Text style={onBoardingStyles.resultsSubHeader}>{currentWeight === ''? 'Not set' : `${currentWeight} lbs`}</Text>
                            </View>
                            <View style={onBoardingStyles.goalWeight}>
                                <Text style={onBoardingStyles.resultsHeader}>Goal weight</Text>
                                <Text style={onBoardingStyles.resultsSubHeader}>{goalWeight === ''? "Skipped" : `${goalWeight} lbs`}</Text>
                            </View>
                        </View>
                        <View style={onBoardingStyles.gifConGroup}>
                            <Image
                                style={onBoardingStyles.gifCon} 
                                source={require("../../assets/gifs/confetti.gif")}
                            />
                        </View>
                    </View>
                </View>
            </Swiper>
            
            {/* button group */}
            <View style={index == 1? onBoardingStyles.buttonGroup: onBoardingStyles.hide}>
                <Text style={{color: 'rgba(0, 0, 0, 0)'}}>Go back</Text>
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

            <View style={index == 4? onBoardingStyles.buttonGroup: onBoardingStyles.hide}>
                <TouchableOpacity style={onBoardingStyles.takeHomeButton} activeOpacity={0.7} onPress={() => navigation.replace('home')}>
                    <Text style={onBoardingStyles.takeHomeButtonText}>Take me home</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}
