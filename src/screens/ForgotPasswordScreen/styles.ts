import { StyleSheet } from 'react-native';
import { spacing } from '../../design-system';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: spacing.md,
  },
  form: {
    marginTop: spacing['3xl'],
    paddingHorizontal: spacing.xl,
  },
  buttonContainer: {
    marginTop: spacing['2xl'],
  },
  heading: {
    marginLeft: spacing.xl,
    marginTop: spacing.md,
  },
});
