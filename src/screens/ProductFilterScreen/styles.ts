import { StyleSheet } from 'react-native';

import { radius, shadows, spacing, typography } from '../../design-system';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    marginBottom: spacing.xl,
    marginTop: spacing['4xl'],
  },
  range: {
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: spacing.sm,
    paddingVertical: spacing['2xl'],
    ...shadows.sm,
  },
  text: {
    ...typography.bodyStrong,
    fontWeight: '500',
    marginLeft: spacing.md,
    marginVertical: spacing.xs,
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing.md,
  },
  valueText: {
    ...typography.caption,
  },
  smallCircle: {
    height: 36,
    width: 36,
    borderRadius: radius.pill,
  },
  bigCircle: {
    height: 44,
    width: 44,
    borderRadius: radius.pill,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing['2xl'],
  },
  selectedCircle: {
    borderWidth: 1,
  },
  square: {
    height: 40,
    width: 40,
    borderRadius: radius.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing['2xl'],
  },
  rectangle: {
    height: 40,
    width: 110,
    borderRadius: radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    marginRight: spacing['2xl'],
  },
  unSelectedBox: {
    borderWidth: 1,
  },
  wrapContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing.md,
    flexWrap: 'wrap',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingBottom: spacing['4xl'],
    paddingVertical: spacing.xl,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: radius.xl,
    ...shadows.glass,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
});
