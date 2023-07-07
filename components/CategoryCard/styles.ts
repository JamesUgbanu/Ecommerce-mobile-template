import { StyleSheet } from 'react-native';

export const styles = (white?, black?) => StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#777",
        shadowOffset: {
            height: 1,
            width: 0
        },
        margin: 10,
        backgroundColor: white,
        alignItems: "center",
        flexDirection: "row",
    },
    image: {
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    text: {
        flex: 2,
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 20,
        color: black
    }
});