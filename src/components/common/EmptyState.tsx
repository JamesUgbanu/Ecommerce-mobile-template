import { Text, useTheme } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppIcon from './AppIcon';

type EmptyStateProps = {
  title: string;
  description: string;
  iconName?: string;
};

const EmptyState = ({ title, description, iconName = 'search-off' }: EmptyStateProps) => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <AppIcon name={iconName} type='material-community' size={44} color={theme.colors.grey0} />
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

export default EmptyState;
