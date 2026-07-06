import { StyleSheet } from 'react-native';
import { radius, shadows, spacing, typography } from '../../design-system';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    flexDirection: 'row',
    margin: spacing.md,
    overflow: 'hidden',
    ...shadows.sm,
  },
  image: {
    borderBottomRightRadius: radius.sm,
    borderTopRightRadius: radius.sm,
  },
  text: {
    flex: 2,
    marginLeft: spacing.xl,
    ...typography.bodyStrong,
  },
});
