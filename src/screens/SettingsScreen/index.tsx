import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

import ThemedSurface from '../../components/surfaces/ThemedSurface';
import { spacing, typography } from '../../design-system';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text h1>Settings</Text>
      <ThemedSurface style={styles.card}>
        <View style={styles.row}>
          <View style={styles.copy}>
            <Text style={styles.title}>Liquid Glass</Text>
            <Text h3>Uses native glass when available and safe fallbacks everywhere else.</Text>
          </View>
          <Switch value disabled accessibilityLabel='Liquid Glass enabled' />
        </View>
        <View style={styles.row}>
          <View style={styles.copy}>
            <Text style={styles.title}>Haptics</Text>
            <Text h3>Selection feedback is enabled for primary template actions.</Text>
          </View>
          <Switch value disabled accessibilityLabel='Haptics enabled' />
        </View>
      </ThemedSurface>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: spacing.lg,
    padding: spacing.xl,
  },
  container: {
    flex: 1,
    gap: spacing.lg,
    padding: spacing.xl,
  },
  copy: {
    flex: 1,
    gap: spacing.xs,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.lg,
  },
  title: {
    ...typography.bodyStrong,
  },
});

export default SettingsScreen;
