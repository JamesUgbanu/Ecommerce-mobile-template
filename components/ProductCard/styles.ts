import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: 150,
        borderRadius: 12,
        elevation: 2,
        shadowColor: "#777",
        shadowOffset: {
            height: 1,
            width: 0
        },
        marginHorizontal: 10
    },
    imageContainer: {
        flex: 1,
        width: 150,
    },
    image: {
        width: 150,
        height: 184,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    productInfo: {
        flex: 1,
        marginTop: 10
    },
    star: {
        flexDirection: "row",
        alignContent: "center"

    },
    text: {
        marginTop: 2,
        fontSize: 16,
        fontWeight: "500"
    },
    priceContainer: {
        flexDirection: "row",
    },
    price: {
        fontSize: 14,
        color: "#9B9B9B",
        marginRight: 3
    },
    salePrice: {
        color: "#DB3022"
    }
});