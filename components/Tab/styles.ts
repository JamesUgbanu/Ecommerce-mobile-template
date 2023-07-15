import { StyleSheet } from 'react-native';

export const styles = (backgroundColor?) => StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    indicatorStyle: {
        backgroundColor,
        height: 3
    },
});