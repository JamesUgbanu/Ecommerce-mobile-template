import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { radius, shadows, spacing, typography } from '../../design-system';
import type { VisualSearchResult } from '../../types/visual-search';
import ThemedSurface from '../surfaces/ThemedSurface';

type SearchResultsCardProps = {
  result: VisualSearchResult;
};

const SearchResultsCard = ({ result }: SearchResultsCardProps) => {
  return (
    <ThemedSurface style={styles.card}>
      <Text style={styles.title}>Top matches</Text>
      {result.predictions.map((prediction) => (
        <View key={prediction.label} style={styles.row}>
          <Text style={styles.label}>{prediction.label}</Text>
          <Text h4>{Math.round(prediction.confidence * 100)}%</Text>
        </View>
      ))}
      <Text h4 style={styles.meta}>
        Provider: {result.provider} • {result.latencyMs}ms
      </Text>
    </ThemedSurface>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
    borderRadius: radius.xl,
    marginTop: spacing.lg,
    padding: spacing.xl,
    ...shadows.sm,
  },
  title: {
    ...typography.title,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  label: {
    flex: 1,
    ...typography.body,
  },
  meta: {
    color: '#6E6E6E',
  },
});

export default SearchResultsCard;
