import { StyleSheet } from 'react-native';
import { spacing } from '../../design-system';

export const styles = StyleSheet.create({
  searchOverlay: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing['4xl'],
  },
  searchText: {
    marginTop: spacing.lg,
    textAlign: 'center',
  },
});
