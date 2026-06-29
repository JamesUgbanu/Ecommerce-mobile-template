import { StyleSheet } from 'react-native';

import { radius, spacing, typography } from '../../design-system';

export const styles = (height?: number) =>
  StyleSheet.create({
    container: {
      height: height,
      marginBottom: spacing.sm,
      marginHorizontal: spacing.md,
      borderRadius: radius['2xl'],
    },
    content: {
      flex: 1,
      flexDirection: 'row',
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 56,
    },
    navText: {
      marginTop: 3,
      alignSelf: 'center',
      ...typography.caption,
    },
  });
