import { StyleSheet, Dimensions } from "react-native";
import { type, colors, spacing } from "../../../theme";

export const homeStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white'        
    },
    InfoContainer: {
        paddingTop: spacing.xl,
        paddingHorizontal: spacing.medium
    },
    TabContainer: {
        flex: 1
    },
    menuContainer: {
        alignItems: 'flex-end',
        marginBottom: spacing.base
    },
    menu: {
        height: 30,
        width: 30,
        backgroundColor: colors.primary,
        borderRadius: 50,
        
    },
    // userWelcome styles
    userWelcomeContainer: {
        marginBottom: spacing.base
    },
    userTextHeader: {
        fontFamily: 'senB',
        fontSize: type.header,
        color: colors.secondary
    },
    // userChip styles
    userChipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: spacing.large,
        paddingVertical: spacing.medium,
        borderRadius: 20,
        marginBottom: spacing.base
    },
    userChipInfoGroup: {},
    chipInfoHeader: {
        fontFamily: 'senB',
        fontSize: type.label,
        color: colors.secondary,
        marginBottom: spacing.small
    },
    chipInfoSubHeader: {
        fontFamily: 'senR',
        color: colors.secondary,
        fontSize: type.label
    },
    userInfoWeight: {
        fontFamily: 'senB',
        color: colors.secondary,
        fontSize: type.header
    },
});