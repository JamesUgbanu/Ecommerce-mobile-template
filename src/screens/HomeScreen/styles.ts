import { StyleSheet } from 'react-native';

import { spacing, typography } from '../../design-system';

export const styles = (height?: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      marginBottom: spacing.xl,
    },
    imageContainer: {
      height,
    },
    image: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: spacing['4xl'],
      paddingHorizontal: spacing.xl,
    },
    heroGradient: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    text: {
      ...typography.display,
      width: 190,
    },
    button: {
      width: 160,
      marginTop: spacing.xl,
      textAlign: 'center',
    },
    titleContainer: {
      marginHorizontal: spacing.lg,
      marginTop: spacing['3xl'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    subTitle: {},
    productContainer: {
      marginHorizontal: spacing.md,
      marginTop: spacing.xl,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });
