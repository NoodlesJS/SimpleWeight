import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native'
import { type, spacing, colors } from '../theme'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useAtom } from 'jotai';
import { bottomSheetSwitch } from '../stores/globalInputs';

export default function InputWeight() {
    const [bottomSwitch, setBottomSwitch] = useAtom(bottomSheetSwitch);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(null);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
          console.log(date.toLocaleTimeString('en-US',
          {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          }))
        const mdate = date.toString().split(" ");
        setDate(`${mdate[1]} ${mdate[2]}, ${mdate[3]} / ${mdate[4]}`)
        hideDatePicker();
      };

    return (
        <View style={InputWeightStyles.container}>
            <Text style={InputWeightStyles.headerText}>Add new weight</Text>
            <View>
                <View>
                    <Text style={InputWeightStyles.inputLabel}>Weight</Text>
                    <TextInput 
                        style={InputWeightStyles.input}
                        numeric
                        keyboardType={'numeric'}
                    />
                </View>
                <View style={InputWeightStyles.form}>
                    <Text style={InputWeightStyles.inputLabel}>Date/Time</Text>
                    <Pressable style={InputWeightStyles.input} onPress={showDatePicker}>
                        <Text>{date}</Text>
                    </Pressable>
                </View>
                <View></View>
            </View>
            <View style={InputWeightStyles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.7} style={InputWeightStyles.buttonCancel} onPress={() => {setBottomSwitch(false)}}>
                    <Text style={InputWeightStyles.buttonTextCancel}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={InputWeightStyles.buttonAdd}>
                    <Text style={InputWeightStyles.buttonTextAdd}>Add</Text>
                </TouchableOpacity>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const InputWeightStyles = StyleSheet.create({
    container: {
        padding: spacing.medium,
        flex: 1,
    },
    headerText: {
        fontSize: type.subHeader,
        fontFamily: 'senB',
        marginBottom: spacing.medium
    },
    formContainer: {},
    form: {
        marginTop: spacing.base
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 1,
        marginTop: spacing.xl
    },
    inputLabel: {
        fontFamily: 'senR',
        fontSize: type.body,
        marginBottom: spacing.small
    },
    input: {
        height: 50,
        backgroundColor: colors.gray_lighter,
        borderRadius: 10,
        paddingHorizontal: 16,
        justifyContent: 'center'
    },
    buttonCancel: {
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.gray_lighter,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: spacing.small
    },
    buttonAdd: {
        height: 50,
        borderRadius: 20,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft: spacing.small
    },
    buttonTextCancel: {
        fontFamily: 'senB',
        fontSize: type.subHeader,
        color: colors.secondary
    },
    buttonTextAdd: {
        fontFamily: 'senB',
        fontSize: type.subHeader,
        color: colors.white
    }
});