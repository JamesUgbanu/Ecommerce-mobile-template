import { StyleSheet } from 'react-native';

import { radius, spacing } from '../../design-system';

export const styles = StyleSheet.create({
  contentView: {
    borderRadius: radius.pill,
    alignSelf: 'flex-start',
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
