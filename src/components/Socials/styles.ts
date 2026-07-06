import { StyleSheet } from 'react-native';
import { radius, spacing } from '../../design-system';

export const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
  },
  socialButton: {
    alignItems: 'center',
    borderRadius: radius.xl,
    justifyContent: 'center',
    marginTop: spacing.md,
    minHeight: 64,
    minWidth: 92,
    paddingHorizontal: spacing['2xl'],
    paddingVertical: spacing.lg,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
