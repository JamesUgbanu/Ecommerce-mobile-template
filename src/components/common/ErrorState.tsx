import { Icon, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type ErrorStateProps = {
  title: string;
  description: string;
};

const ErrorState = ({ title, description }: ErrorStateProps) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Icon
        name='alert-circle-outline'
        type='material-community'
        size={44}
        color={theme.colors.error}
      />
      <Text style={styles.title}>{title}</Text>
      <Text h3 style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    color: '#6E6E6E',
    textAlign: 'center',
  },
});

export default ErrorState;
