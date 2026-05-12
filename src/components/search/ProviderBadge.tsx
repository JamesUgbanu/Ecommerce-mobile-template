import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { VisualSearchProviderId } from '../../types/visual-search';

type ProviderBadgeProps = {
  providerId: VisualSearchProviderId;
};

const labels: Record<VisualSearchProviderId, string> = {
  tensorflow: 'TensorFlow local search',
  remote: 'Remote AI provider',
  none: 'Visual search disabled',
};

const ProviderBadge = ({ providerId }: ProviderBadgeProps) => {
  return (
    <View style={styles.badge}>
      <Text h4 style={styles.text}>
        {labels[providerId]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  text: {
    color: '#555555',
    fontWeight: '600',
  },
});

export default ProviderBadge;
