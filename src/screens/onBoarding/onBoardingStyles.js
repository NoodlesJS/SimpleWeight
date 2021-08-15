import { StyleSheet, Dimensions } from "react-native";
import { type, colors, spacing } from "../../theme";

const { width } = Dimensions.get('window')
export const onBoardingStyles = StyleSheet.create({
    container: {
        width,
        paddingHorizontal: spacing.medium,
        paddingTop: spacing.yuge,
        paddingBottom: spacing.large,
        flex: 1,
        justifyContent: 'space-between'
    },
    headerTextGroup: {
        marginBottom: spacing.xl
    },
    formGroup: {},
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    paginationGroup: {
        flexDirection: "row"
    },
    textHeader: {
        fontFamily: 'senB',
        fontSize: type.header,
        marginBottom: spacing.small
    },
    textSub: {
        fontFamily: 'senR',
        fontSize: type.subHeader
    },
    inputLabel: {
        fontFamily: 'senR',
        fontSize: type.body,
        marginBottom: spacing.small
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderColor: colors.gray_light,
        borderRadius: 10,
        paddingHorizontal: spacing.base
    },
    button: {
        height: 70,
        width: 70,
        backgroundColor: colors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        fontFamily: 'senR',
        fontSize: type.body,
        color: colors.gray_medium,
        textDecorationLine: 'underline'
    },
    paginationActive: {
        marginHorizontal: spacing.small,
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: colors.gray_dark
    },
    paginationInactive: {
        marginHorizontal: spacing.small,
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: colors.gray_light
    }
})