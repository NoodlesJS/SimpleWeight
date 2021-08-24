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
        marginBottom: spacing.medium
    },
    chipInfoHeader: {
        fontFamily: 'senB',
        fontSize: type.label,
        color: colors.white,
        marginBottom: spacing.small
    },
    chipInfoSubHeader: {
        fontFamily: 'senR',
        color: colors.white,
        fontSize: type.label
    },
    userInfoWeight: {
        fontFamily: 'senB',
        color: colors.white,
        fontSize: type.header
    },
    trendsHeader: {
        fontSize: type.label,
        fontFamily: 'senR',
        color: colors.secondary,
        marginBottom: spacing.small
    },
    trendGroup: {},
    trendGroupRowUpper: {
        flexDirection: 'row'
    },
    trendGroupLower: {
        flexDirection: 'row'
    },
    trendBox: {
        width: '50%',
        height: 85,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderRight: {
        borderRightWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: colors.gray_light,
    },
    borderLeft: {
        borderLeftWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: colors.gray_light,
    },
    borderTop: {
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: colors.gray_light,
    },
    borderBottom: {
        borderRightWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: colors.gray_light,
    },
    trendIcon: {
        width: 15,
        height: 12
    },
    trendBoxInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    trendBoxInfoHeader: {
        fontFamily: 'senB',
        fontSize: type.subHeader,
        color: colors.secondary,
        marginLeft: spacing.small,
    },
    trendNameText: {
        fontFamily: 'senR',
        fontSize: type.label,
        marginTop: spacing.tiny
    }
});