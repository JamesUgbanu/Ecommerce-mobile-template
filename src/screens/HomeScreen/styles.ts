import { StyleSheet } from 'react-native';

import { spacing, typography } from '../../design-system';

export const styles = (height?: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      marginBottom: 20,
    },
    imageContainer: {
      height,
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 40,
      paddingHorizontal: 20,
    },
    heroGradient: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    text: {
      color: 'white',
      ...typography.display,
      width: 190,
    },
    button: {
      width: 160,
      marginTop: spacing.xl,
      textAlign: 'center',
    },
    titleContainer: {
      marginTop: 30,
      marginHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    subTitle: {
      color: '#9B9B9B',
    },
    productContainer: {
      marginTop: 20,
      marginHorizontal: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
