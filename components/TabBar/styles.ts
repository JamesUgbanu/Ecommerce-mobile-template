import { StyleSheet } from 'react-native';

export const styles = (height?: number) => StyleSheet.create({
    container: {
        overflow: 'hidden',
        height: height,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowRadius: 8,
    },
    content: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    navItem: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    center: {
        width: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        marginTop: 3,
        alignSelf: 'center',
        fontSize: 10
    }
});