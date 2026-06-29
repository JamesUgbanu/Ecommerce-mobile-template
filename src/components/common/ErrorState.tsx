import { Text, useTheme } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { spacing, typography } from '../../design-system';
import ThemedSurface from '../surfaces/ThemedSurface';
import AppIcon from './AppIcon';

type ErrorStateProps = {
  title: string;
  description: string;
};

const ErrorState = ({ title, description }: ErrorStateProps) => {
  const { theme } = useTheme();

  return (
    <ThemedSurface muted style={styles.container}>
      <AppIcon
        name='alert-circle-outline'
        type='material-community'
        size={44}
        color={theme.colors.error}
      />
      <Text style={styles.title}>{title}</Text>
      <Text h3 style={styles.description}>
        {description}
      </Text>
    </ThemedSurface>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.md,
    marginHorizontal: spacing.xl,
    paddingHorizontal: spacing['2xl'],
    paddingVertical: spacing['3xl'],
  },
  title: {
    ...typography.title,
  },
  description: {
    color: '#6E6E6E',
    textAlign: 'center',
  },
});

export default ErrorState;
