import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { radius, spacing, typography } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';
import type { VisualSearchProviderId } from '../../types/visual-search';

type ProviderBadgeProps = {
  providerId: VisualSearchProviderId;
};

const labels: Record<VisualSearchProviderId, string> = {
  tflite: 'TFLite local search',
  remote: 'Remote AI provider',
  none: 'Visual search disabled',
};

const ProviderBadge = ({ providerId }: ProviderBadgeProps) => {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colors.surfaceMuted, borderColor: colors.borderSubtle },
      ]}
    >
      <Text h4 style={[styles.text, { color: colors.textMuted }]}>
        {labels[providerId]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  text: {
    ...typography.caption,
  },
});

export default ProviderBadge;
