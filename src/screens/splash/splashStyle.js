import { StyleSheet } from "react-native";
import { type, colors, spacing } from "../../theme";

export const splashStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    splashText: {
        fontSize: type.header,
        color: colors.secondary,
        marginBottom: spacing.xl,
        fontFamily: 'senR'
    }
});