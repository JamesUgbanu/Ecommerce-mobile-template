import { StyleSheet } from 'react-native';

import { spacing, typography } from '../../design-system';

export const styles = (height?: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
    },
    imageContainer: {
      height,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.xl,
    },
    gradient: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    text: {
      ...typography.title,
      marginBottom: spacing.md,
      marginTop: spacing.xl,
    },
    button: {
      marginTop: spacing.md,
    },
    border: {
      borderWidth: 1,
      backgroundColor: 'transparent',
    },
  });
