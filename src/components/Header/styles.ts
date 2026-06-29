import { StyleSheet } from 'react-native';

import { radius, spacing, typography } from '../../design-system';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    borderWidth: 0,
  },
  headerClip: {
    overflow: 'hidden',
  },
  hiddenContainer: {
    backgroundColor: 'transparent',
  },
  iconButton: {
    alignItems: 'center',
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 40,
    minWidth: 40,
  },
  rneContainer: {
    borderBottomWidth: 0,
    paddingHorizontal: spacing.sm,
  },
  side: {
    minWidth: 44,
  },
  icon: {
    fontSize: 22,
  },
  transparentContainer: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
  },
  title: {
    ...typography.bodyStrong,
  },
});
