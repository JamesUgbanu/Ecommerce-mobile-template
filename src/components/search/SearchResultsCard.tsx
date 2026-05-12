import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { VisualSearchResult } from '../../types/visual-search';

type SearchResultsCardProps = {
  result: VisualSearchResult;
};

const SearchResultsCard = ({ result }: SearchResultsCardProps) => {
  return (
    <View style={styles.card}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: 12,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 16,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  meta: {
    color: '#6E6E6E',
  },
});

export default SearchResultsCard;
