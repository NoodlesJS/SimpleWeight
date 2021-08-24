import { StyleSheet, Dimensions } from "react-native";
import { type, colors, spacing } from "../../theme";

const { width } = Dimensions.get('window')
export const onBoardingStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width,
        paddingHorizontal: spacing.medium,
        paddingTop: spacing.yuge,
        paddingBottom: spacing.large,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    headerTextGroup: {
        marginBottom: spacing.base
    },
    gifGroup: {
        marginBottom: spacing.base
    },
    gifConGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing.xl
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    hide: {
        display: 'none'
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
        fontSize: type.subHeader,
        color: colors.secondary
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
    gif: {
        width: 75,
        height: 75,
        left: -10
    },
    gifCon: {
        width: 180,
        height: 180
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
        textDecorationLine: 'underline',
        lineHeight: 50
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
    },
    resultsGroup: {
        marginTop: spacing.base
    },
    currentWeight: {},
    goalWeight: {
        marginTop: spacing.base
    },
    resultsHeader: {
        fontFamily: 'senR',
        fontSize: type.base,
        color: colors.gray_medium,
        marginTop: spacing.small
    },
    resultsSubHeader: {
        fontFamily: 'senB',
        fontSize: type.subHeader,
        color: colors.secondary,
        marginTop: spacing.small
    },
    takeHomeButton: {
        width: '100%',
        height: 70,
        borderRadius: 20,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: 'center'
    },
    takeHomeButtonText: {
        fontFamily: 'senB',
        fontSize: type.subHeader,
        color: colors.white
    }
})