import { StyleSheet } from 'react-native';
import { radius, shadows, spacing, typography } from '../../design-system';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginBottom: spacing.xl,
    marginTop: spacing.xl,
  },
  topBox: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingLeft: spacing.xl,
    paddingVertical: spacing.md,
    ...shadows.sm,
  },
  filterContainer: {
    borderRadius: radius.pill,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: spacing.lg,
    marginTop: spacing.md,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  filterText: {
    ...typography.caption,
    marginLeft: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    marginTop: spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentView: {
    marginHorizontal: spacing.xs,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
  },
});
