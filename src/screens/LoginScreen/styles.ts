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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: spacing.sm,
  },
  link: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
