import { StyleSheet } from 'react-native';
import { radius, shadows, spacing, typography } from '../../design-system';

export const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    borderRadius: radius.lg,
    justifyContent: 'center',
    margin: spacing.md,
    ...shadows.sm,
  },
  title: {
    ...typography.price,
  },
  subText: {
    ...typography.caption,
  },
});
