import { StyleSheet } from 'react-native';
import { spacing } from '../../design-system';

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing.md,
  },
  form: {
    marginTop: spacing['3xl'],
    paddingHorizontal: spacing.xl,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: spacing.sm,
  },
  buttonContainer: {
    marginTop: spacing['2xl'],
  },
  socialContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing['4xl'],
  },
  heading: {
    marginLeft: spacing.xl,
    marginTop: spacing.md,
  },
});
