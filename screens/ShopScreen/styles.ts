import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#DB3022',
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#777",
        shadowOffset: {
            height: 1,
            width: 0
        },
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        color: "white"
    },
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    subText: {
        fontSize: 14,
        color: "white"
    }
});