import { StyleSheet } from 'react-native';

export const styles = (backgroundColor?) =>
  StyleSheet.create({
    container: {},
    indicatorStyle: {
      backgroundColor,
      height: 3,
    },
  });
